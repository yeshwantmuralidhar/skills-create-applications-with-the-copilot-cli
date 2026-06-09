const { add, subtract, multiply, divide, modulo, power, squareRoot, calculate } = require("../calculator");

// Tests based on example operations from the image:
//   2 + 3, 10 - 4, 45 * 2, 20 / 5
// Extended operations from image:
//   modulo with 5 % 2, power with 2 ^ 3, square root with √16

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
    expect(() => calculate(1, "^", 2)).toThrow("Invalid operator");
  });

  test("throws error for division by zero through calculate", () => {
    expect(() => calculate(10, "/", 0)).toThrow("Cannot divide by zero");
  });
});

describe("Modulo (%)", () => {
  test("5 % 2 = 1 (from image example)", () => {
    expect(modulo(5, 2)).toBe(1);
  });

  test("returns remainder of two positive numbers", () => {
    expect(modulo(10, 3)).toBe(1);
  });

  test("returns zero when evenly divisible", () => {
    expect(modulo(12, 4)).toBe(0);
  });

  test("handles negative dividend", () => {
    expect(modulo(-7, 3)).toBe(-1);
  });

  test("handles negative divisor", () => {
    expect(modulo(7, -3)).toBe(1);
  });

  test("handles decimal numbers", () => {
    expect(modulo(5.5, 2)).toBeCloseTo(1.5);
  });

  test("throws error on modulo by zero", () => {
    expect(() => modulo(10, 0)).toThrow("Cannot perform modulo by zero");
  });
});

describe("Exponentiation (power)", () => {
  test("2 ^ 3 = 8 (from image example)", () => {
    expect(power(2, 3)).toBe(8);
  });

  test("raises to the power of 2", () => {
    expect(power(5, 2)).toBe(25);
  });

  test("any number to the power of 0 is 1", () => {
    expect(power(99, 0)).toBe(1);
  });

  test("any number to the power of 1 is itself", () => {
    expect(power(7, 1)).toBe(7);
  });

  test("handles negative exponent", () => {
    expect(power(2, -2)).toBeCloseTo(0.25);
  });

  test("handles negative base with even exponent", () => {
    expect(power(-3, 2)).toBe(9);
  });

  test("handles negative base with odd exponent", () => {
    expect(power(-2, 3)).toBe(-8);
  });

  test("handles decimal exponent", () => {
    expect(power(4, 0.5)).toBeCloseTo(2);
  });
});

describe("Square Root (squareRoot)", () => {
  test("√16 = 4 (from image example)", () => {
    expect(squareRoot(16)).toBe(4);
  });

  test("returns square root of a perfect square", () => {
    expect(squareRoot(9)).toBe(3);
  });

  test("returns square root of non-perfect square", () => {
    expect(squareRoot(2)).toBeCloseTo(1.4142, 4);
  });

  test("square root of 0 is 0", () => {
    expect(squareRoot(0)).toBe(0);
  });

  test("square root of 1 is 1", () => {
    expect(squareRoot(1)).toBe(1);
  });

  test("handles large numbers", () => {
    expect(squareRoot(10000)).toBe(100);
  });

  test("handles decimal input", () => {
    expect(squareRoot(2.25)).toBeCloseTo(1.5);
  });

  test("throws error for negative number", () => {
    expect(() => squareRoot(-4)).toThrow("Cannot calculate square root of a negative number");
  });

  test("throws error for negative decimal", () => {
    expect(() => squareRoot(-0.5)).toThrow("Cannot calculate square root of a negative number");
  });
});

describe("calculate() with extended operations", () => {
  test("handles modulo via % operator", () => {
    expect(calculate(5, "%", 2)).toBe(1);
  });

  test("handles power via ** operator", () => {
    expect(calculate(2, "**", 3)).toBe(8);
  });

  test("handles square root via sqrt operator", () => {
    expect(calculate(16, "sqrt", 0)).toBe(4);
  });

  test("throws error for modulo by zero through calculate", () => {
    expect(() => calculate(10, "%", 0)).toThrow("Cannot perform modulo by zero");
  });

  test("throws error for square root of negative through calculate", () => {
    expect(() => calculate(-9, "sqrt", 0)).toThrow("Cannot calculate square root of a negative number");
  });
});
