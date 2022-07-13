import {
  mul,
  div,
  add,
  minus,
  power,
  power2,
  factorial,
  sin,
  cos,
  tan,
  fibonacci,
} from "./mathOperators";

describe("mathOperators test cases", () => {
  it("mul 1 * 2 to equal 2", () => {
    expect(mul(1, 2)).toBe(2);
  });

  it("mul 2 * 2 to equal 4", () => {
    expect(mul(2, 2)).toBe(4);
  });

  it("div 2 / 2 to equal 1", () => {
    expect(div(2, 2)).toBe(1);
  });

  it("div 4 / 2 to equal 2", () => {
    expect(div(4, 2)).toBe(2);
  });

  it("add 4 + 2 to equal 6", () => {
    expect(add(4, 2)).toBe(6);
  });

  it("minus 4 - 2 to equal 2", () => {
    expect(minus(4, 2)).toBe(2);
  });

  //********* */
  it("power 2 ^ 5 to equal 32", () => {
    expect(power(2, 5)).toBe(32);
  });

  it("power2 2 ** to equal 4", () => {
    expect(power2(2)).toBe(4);
  });

  it("factorial 6 ! to equal 720", () => {
    expect(factorial(6)).toBe(720);
  });

  it("sin 0 to equal 0", () => {
    expect(sin(0)).toBe(0);
  });

  it("cos 0 to equal 1", () => {
    expect(cos(0)).toBe(1);
  });

  it("tan 0 to equal 0", () => {
    expect(tan(0)).toBe(0);
  });

  it("fibonacci 6 to equal 8", () => {
    expect(fibonacci(6)).toBe(8);
  });
});
