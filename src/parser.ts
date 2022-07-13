import { isNumber } from "./helpers";
import { mathOperators, mathOperatorsAlgorithmic } from "./mathOperators";

export type ParsedLineType = (number | string)[];

export const parser = (line: string): ParsedLineType | null => {
  const stack = line.split(" ");

  return stack.reduce<ParsedLineType>((result, item, key) => {
    const prevItem = stack[key - 1];
    const nextItem = stack[key + 1];

    const isValidNumberPush = !isNumber(prevItem) && isNumber(item);
    const isValidOperatorPush =
      (isNumber(prevItem) || mathOperatorsAlgorithmic.hasOwnProperty(prevItem)) &&
      !isNumber(item) &&
      mathOperators.hasOwnProperty(item);
    const isValidOperatorsAlgorithmicPush =
      !isNumber(item) && isNumber(nextItem) && mathOperatorsAlgorithmic.hasOwnProperty(item);

    if (isValidNumberPush) {
      result.push(Number(item));
    } else if (isValidOperatorPush || isValidOperatorsAlgorithmicPush) {
      result.push(item);
    } else {
      throw new TypeError("Parser: Unexpected string");
    }
    return result;
  }, []);
};
