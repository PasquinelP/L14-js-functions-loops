// Function declaration
function calcSquare1(number1, number2) {
  const squareNumber1 = number1 * number1;
  const squareNumber2 = number2 * number2;
  const sum = squareNumber1 + squareNumber2;
  const squaredSum = sum * sum;
  return squaredSum;
}

console.log(calcSquare1(2, 4));

// Function expression
const calcSquare2 = function (number1, number2) {
  const squareNumber1 = number1 * number1;
  const squareNumber2 = number2 * number2;
  const sum = squareNumber1 + squareNumber2;
  const squaredSum = sum * sum;
  return squaredSum;
};

console.log(calcSquare2(2, 4));

// Arrow function
const calcSquare3 = (number1, number2) => {
  const squareNumber1 = number1 * number1;
  const squareNumber2 = number2 * number2;
  const sum = squareNumber1 + squareNumber2;
  const squaredSum = sum * sum;
  return squaredSum;
};

console.log(calcSquare3(2, 4));