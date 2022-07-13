export type ScalarOperationType = (first: number, second: number) => number;
export type AlgorithmicOperationType = (first: number) => number;

export const mul: ScalarOperationType = (first: number, second: number): number => first * second;

export const div: ScalarOperationType = (first: number, second: number): number => first / second;

export const add: ScalarOperationType = (first: number, second: number): number => first + second;

export const minus: ScalarOperationType = (first: number, second: number): number => first - second;

export const power: ScalarOperationType = (first: number, second: number): number =>
  Math.pow(first, second);

export const power2: AlgorithmicOperationType = (first: number): number => first * first;

export const factorial: AlgorithmicOperationType = (first: number): number =>
  first ? first * factorial(first - 1) : 1;

export const sin: AlgorithmicOperationType = (first: number): number => Math.sin(first);

export const cos: AlgorithmicOperationType = (first: number): number => Math.cos(first);

export const tan: AlgorithmicOperationType = (first: number): number => Math.tan(first);

export const fibonacci: AlgorithmicOperationType = (first: number): number =>
  first !== 0 && first !== 1 ? fibonacci(first - 1) + fibonacci(first - 2) : first;

export const mathOperators: { [key: string]: ScalarOperationType } = {
  "*": mul,
  "/": div,
  "+": add,
  "-": minus,
  "^": power,
  "**": power2,
};

export const mathOperatorsAlgorithmic: {
  [key: string]: AlgorithmicOperationType;
} = {
  "**": power2,
  "!": factorial,
  sin: sin,
  cos: cos,
  tan: tan,
  fib: fibonacci,
};

export const mathPriorities: number[] = [1, 2, 3];

const [FIRST, SECOND, THIRD] = mathPriorities;

export const mathOperatorsPriorities: { [key: string]: number } = {
  "*": SECOND,
  "/": SECOND,
  "+": THIRD,
  "-": THIRD,
  "^": SECOND,
  "**": FIRST,
  "!": FIRST,
  sin: FIRST,
  cos: FIRST,
  tan: FIRST,
  fib: FIRST,
};
