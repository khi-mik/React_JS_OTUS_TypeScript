import { ParsedLineType } from "./parser";
import { isNumber } from "./helpers";
import {
  mathOperators,
  mathOperatorsAlgorithmic,
  mathPriorities,
  mathOperatorsPriorities,
} from "./mathOperators";

const [FIRST, SECOND, THIRD] = mathPriorities;

export const firstPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 1];
    const item = nextItem;

    if (
      !isNumber(String(item)) &&
      mathOperatorsPriorities[item] === FIRST &&
      isNumber(String(prevItem))
    ) {
      if (mathOperatorsAlgorithmic[item]) {
        result = [...result.slice(0, -1), mathOperatorsAlgorithmic[item](Number(prevItem))];
      } else {
        throw new TypeError("Unexpected stack!");
      }
    } else if (
      !isNumber(String(prevItem)) &&
      mathOperatorsPriorities[prevItem] === FIRST &&
      isNumber(String(item))
    ) {
      if (mathOperatorsAlgorithmic[prevItem]) {
        result = [...result.slice(0, -1), mathOperatorsAlgorithmic[prevItem](Number(item))];
      } else {
        throw new TypeError("Unexpected stack!");
      }
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const secondPrioritiesCalc = (stack: ParsedLineType): ParsedLineType =>
  stack.reduce<ParsedLineType>((result, nextItem) => {
    const prevItem = result[result.length - 2];
    const item = result[result.length - 1];

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === SECOND) {
      if (!mathOperators[item]) {
        throw new TypeError("Unexpected stack!");
      }
      result = [...result.slice(0, -2), mathOperators[item](Number(prevItem), Number(nextItem))];
    } else {
      result.push(nextItem);
    }
    return result;
  }, []);

export const thirdPrioritiesCalc = (stack: ParsedLineType): number =>
  stack.reduce<number>((result, nextItem, key) => {
    const item = stack[key - 1];

    if (mathOperatorsPriorities[item] === FIRST || mathOperatorsPriorities[item] === SECOND) {
      throw new TypeError("Unexpected stack!");
    }

    if (!isNumber(String(item)) && mathOperatorsPriorities[item] === THIRD) {
      result = mathOperators[item](Number(result), Number(nextItem));
    }
    return result;
  }, Number(stack[0]));
