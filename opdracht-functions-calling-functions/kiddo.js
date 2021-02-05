/*
Hey kiddo

We're going to write two functions, one that greets and another that checks if someone is an adult.

    create a function that has one parameter: the age
    this function should return true if the age is >= 18, false in all other cases
    think of a good name for the function and the parameter
    create a second function that has one parameter: the age
    think of a good name for the function and the parameter
    this second function uses (calls) the first function, giving it the age, to check if we get an adult age
    if it's an adult the second function should return "Hello there"
    if it's not an adult it should return "Hey kiddo"
    use console.log to display the return value of the second function
    experiment so you're sure your function works
*/

const checkAge = function (number) {
  const adult = number >=18;
  return adult;
};

const checkAdult = function (age) {
  const isAdult = checkAge(age);
  if (isAdult) {
    return message;
  } else {
    return message;
  }
};

console.log(checkAdult(20));
console.log(checkAdult(14));
console.log(checkAdult(18));












