/**
 * Node.js CLI Calculator
 *
 * Supported operations:
 *   + : Addition
 *   - : Subtraction
 *   * : Multiplication
 *   / : Division
 */

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function prompt(question) {
  return new Promise((resolve) => rl.question(question, resolve));
}

// Addition: returns the sum of two numbers
function add(a, b) {
  return a + b;
}

// Subtraction: returns the difference of two numbers
function subtract(a, b) {
  return a - b;
}

// Multiplication: returns the product of two numbers
function multiply(a, b) {
  return a * b;
}

// Division: returns the quotient of two numbers
function divide(a, b) {
  if (b === 0) {
    throw new Error("Cannot divide by zero");
  }
  return a / b;
}

function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return add(num1, num2);
    case "-":
      return subtract(num1, num2);
    case "*":
      return multiply(num1, num2);
    case "/":
      return divide(num1, num2);
    default:
      throw new Error(`Invalid operator: ${operator}. Use +, -, *, or /`);
  }
}

async function main() {
  console.log("=== Node.js CLI Calculator ===");
  console.log("Supported operations: + (add), - (subtract), * (multiply), / (divide)\n");

  const num1 = parseFloat(await prompt("Enter the first number: "));
  if (isNaN(num1)) {
    console.error("Error: Invalid number.");
    rl.close();
    return;
  }

  const operator = (await prompt("Enter an operator (+, -, *, /): ")).trim();

  const num2 = parseFloat(await prompt("Enter the second number: "));
  if (isNaN(num2)) {
    console.error("Error: Invalid number.");
    rl.close();
    return;
  }

  try {
    const result = calculate(num1, operator, num2);
    console.log(`\nResult: ${num1} ${operator} ${num2} = ${result}`);
  } catch (error) {
    console.error(`\nError: ${error.message}`);
  }

  rl.close();
}

// Run main only when executed directly (not when imported for testing)
if (require.main === module) {
  main();
}

module.exports = { add, subtract, multiply, divide, calculate };
