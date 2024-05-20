// Design a Calculator class. The class should provide the mathematical operations of addition, subtraction, multiplication, division, and exponentiation. It should also allow consecutive operations to be performed using method chaining. The Calculator class constructor should accept a number which serves as the initial value of result.

// Your Calculator class should have the following methods:

// add - This method adds the given number value to the result and returns the updated Calculator.
// subtract - This method subtracts the given number value from the result and returns the updated Calculator.
// multiply - This method multiplies the result  by the given number value and returns the updated Calculator.
// divide - This method divides the result by the given number value and returns the updated Calculator. If the passed value is 0, an error "Division by zero is not allowed" should be thrown.
// power - This method raises the result to the power of the given number value and returns the updated Calculator.
// getResult - This method returns the result.
// Solutions within 10-5 of the actual result are considered correct.

// actions is a valid JSON array of strings
// values is a valid JSON array of numbers
// 2 <= actions.length <= 2 * 104
// 1 <= values.length <= 2 * 104 - 1
// actions[i] is one of "Calculator", "add", "subtract", "multiply", "divide", "power", and "getResult"
// First action is always "Calculator"
// Last action is always "getResult"

class Calculator {
  constructor(val) {
    this.result = val;
  }

  add(val) {
    this.result += val;
    return this;
  }
  subtract(val) {
    this.result -= val;
    return this;
  }
  multiply(val) {
    this.result *= val;
    return this;
  }
  divide(val) {
    if (val === 0) throw new Error('Division by zero is not allowed');
    this.result /= val;
    return this;
  }
  power(val) {
    this.result = Math.pow(this.result, val);
    return this;
  }
  getResult() {
    return this.result;
  }
}

const Obj = new Calculator(2).add(3).power(3).divide(5).getResult();
console.log(Obj);
