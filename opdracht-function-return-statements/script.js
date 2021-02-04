const numberBiggerThen100 = function(number) {
  return number > 100;
};

console.log(numberBiggerThen100(120));
console.log(numberBiggerThen100(100));
console.log(numberBiggerThen100(40));
console.log(numberBiggerThen100(240));
// This is a function that produces something.


const bouncerBot = function (maxNumber, currentNumber, age) {
  if (currentNumber <= maxNumber && age >=18) {
    return "Come in!";
  } else if (currentNumber > maxNumber && age >= 18) {
    return "It's too busy now, come back later";
  } else {
    return "This is a club for adults";
  }
};

console.log(bouncerBot(100, 50, 24));
console.log(bouncerBot(100, 102, 18));
console.log(bouncerBot(100, 80, 15));
console.log(bouncerBot(80, 100, 19));



const calculateAverage = function (number1, number2, number3, number4, number5) {
  const total = number1 + number2 + number3 + number4 + number5;
  const average = Math.round(total / 5);
  return average;
} 

console.log(calculateAverage(20, 41, 8, 56, 9));
console.log(calculateAverage(6, 13, 24, 88, 32));
console.log(calculateAverage(33, 845, 102, 74, 25));
