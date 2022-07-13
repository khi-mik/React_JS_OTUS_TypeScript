import { firstPrioritiesCalc, secondPrioritiesCalc, thirdPrioritiesCalc } from "./engine";

describe("firstPrioritiesCalc simple cases", () => {
  it("[10, **]", () => {
    expect(firstPrioritiesCalc([10, "**"])).toEqual([100]);
  });

  it("[!, 6]", () => {
    expect(firstPrioritiesCalc(["!", 6])).toEqual([720]);
  });

  it("[sin, 0]", () => {
    expect(firstPrioritiesCalc(["sin", 0])).toEqual([0]);
  });

  it("[cos, 0]", () => {
    expect(firstPrioritiesCalc(["cos", 0])).toEqual([1]);
  });

  it("[tan, 0]", () => {
    expect(firstPrioritiesCalc(["tan", 0])).toEqual([0]);
  });

  it("[fib, 4]", () => {
    expect(firstPrioritiesCalc(["fib", 4])).toEqual([3]);
  });
});

describe("secondPrioritiesCalc simple cases", () => {
  it("[cos, 0]", () => {
    expect(firstPrioritiesCalc(["cos", 0])).toEqual([1]);
  });

  it("[1, * 32]", () => {
    expect(secondPrioritiesCalc([1, "*", 32])).toEqual([32]);
  });

  it("[32, /, 32]", () => {
    expect(secondPrioritiesCalc([32, "/", 32])).toEqual([1]);
  });
});

test.each([
  [10, "+", 1, 11],
  [10, "-", 1, 9],
])("thirdPrioritiesCalc simple case: 10 +/- 1", (a, b, c, expected) => {
  expect(thirdPrioritiesCalc([a, b, c])).toBe(expected);
});

test.each;
describe("thirdPrioritiesCalc simple case: 32 - 32 + 10", () => {
  it("[32, - 32, +, 10]", () => {
    expect(thirdPrioritiesCalc([32, "-", 32, "+", 10])).toEqual(10);
  });
});

describe("firstPrioritiesCalc mixed with second priorities cases", () => {
  it("[10, *, cos, 0]", () => {
    expect(firstPrioritiesCalc([10, "*", "cos", 0])).toEqual([10, "*", 1]);
  });
});

describe("firstPrioritiesCalc mixed with third priorities cases", () => {
  it("[2, **, +, cos, 0]", () => {
    expect(firstPrioritiesCalc([2, "**", "+", "cos", 0])).toEqual([4, "+", 1]);
  });
});

describe("secondPrioritiesCalc mixed with third priorities cases", () => {
  it("[100, /, 10, +, 2, *, 3]", () => {
    expect(secondPrioritiesCalc([100, "/", 10, "+", 2, "*", 3])).toEqual([10, "+", 6]);
  });
});

describe("thirdPrioritiesCalc invalid cases", () => {
  it("[32, / 32]", () => {
    expect(() => thirdPrioritiesCalc([32, "/", 32])).toThrow(TypeError("Unexpected stack!"));
  });
});
