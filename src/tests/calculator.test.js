const { add, subtract, multiply, divide, calculate } = require("../calculator");

// Tests based on example operations from the image:
//   2 + 3, 10 - 4, 45 * 2, 20 / 5

describe("Addition (+)", () => {
  test("2 + 3 = 5 (from image example)", () => {
    expect(add(2, 3)).toBe(5);
  });

  test("adds two positive numbers", () => {
    expect(add(10, 20)).toBe(30);
  });

  test("adds negative numbers", () => {
    expect(add(-5, -3)).toBe(-8);
  });

  test("adds a positive and negative number", () => {
    expect(add(10, -4)).toBe(6);
  });

  test("adds zero", () => {
    expect(add(7, 0)).toBe(7);
  });

  test("adds decimal numbers", () => {
    expect(add(1.5, 2.3)).toBeCloseTo(3.8);
  });
});

describe("Subtraction (-)", () => {
  test("10 - 4 = 6 (from image example)", () => {
    expect(subtract(10, 4)).toBe(6);
  });

  test("subtracts two positive numbers", () => {
    expect(subtract(20, 5)).toBe(15);
  });

  test("subtracts resulting in negative", () => {
    expect(subtract(3, 10)).toBe(-7);
  });

  test("subtracts negative numbers", () => {
    expect(subtract(-5, -3)).toBe(-2);
  });

  test("subtracts zero", () => {
    expect(subtract(9, 0)).toBe(9);
  });

  test("subtracts decimal numbers", () => {
    expect(subtract(5.5, 2.2)).toBeCloseTo(3.3);
  });
});

describe("Multiplication (*)", () => {
  test("45 * 2 = 90 (from image example)", () => {
    expect(multiply(45, 2)).toBe(90);
  });

  test("multiplies two positive numbers", () => {
    expect(multiply(6, 7)).toBe(42);
  });

  test("multiplies by zero", () => {
    expect(multiply(100, 0)).toBe(0);
  });

  test("multiplies negative numbers", () => {
    expect(multiply(-3, -4)).toBe(12);
  });

  test("multiplies positive and negative", () => {
    expect(multiply(5, -3)).toBe(-15);
  });

  test("multiplies decimal numbers", () => {
    expect(multiply(2.5, 4)).toBeCloseTo(10);
  });
});

describe("Division (/)", () => {
  test("20 / 5 = 4 (from image example)", () => {
    expect(divide(20, 5)).toBe(4);
  });

  test("divides two positive numbers", () => {
    expect(divide(100, 4)).toBe(25);
  });

  test("divides resulting in decimal", () => {
    expect(divide(10, 3)).toBeCloseTo(3.3333, 4);
  });

  test("divides negative numbers", () => {
    expect(divide(-12, -3)).toBe(4);
  });

  test("divides positive by negative", () => {
    expect(divide(15, -5)).toBe(-3);
  });

  test("divides zero by a number", () => {
    expect(divide(0, 5)).toBe(0);
  });

  test("throws error on division by zero", () => {
    expect(() => divide(10, 0)).toThrow("Cannot divide by zero");
  });

  test("throws error on division by zero with negative numerator", () => {
    expect(() => divide(-5, 0)).toThrow("Cannot divide by zero");
  });
});

describe("calculate() function", () => {
  test("handles addition via operator", () => {
    expect(calculate(2, "+", 3)).toBe(5);
  });

  test("handles subtraction via operator", () => {
    expect(calculate(10, "-", 4)).toBe(6);
  });

  test("handles multiplication via operator", () => {
    expect(calculate(45, "*", 2)).toBe(90);
  });

  test("handles division via operator", () => {
    expect(calculate(20, "/", 5)).toBe(4);
  });

  test("throws error for invalid operator", () => {
    expect(() => calculate(1, "%", 2)).toThrow("Invalid operator");
  });

  test("throws error for division by zero through calculate", () => {
    expect(() => calculate(10, "/", 0)).toThrow("Cannot divide by zero");
  });
});
