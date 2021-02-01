// Deel A: Schrijf je eerste functie

// Make a Dutch cheese sandwich
// Step 1: Slice the sandwich open with a knife
// Step 2: Put some butter on the sandwich
// Step 3: Add Gouda cheese to the sandwich
// Step 4: Close the sandwich

const makeDutchCheeseSandwich = function() {
  console.log("Slice the sandwich open with a knife");
  console.log("Put some butter on the sandwich");
  console.log("Add Gouda cheese to the sandwich");
  console.log("Close the sandwich");
}

makeDutchCheeseSandwich();


// Deel B: Schrijf een functie met een argument

// declare function
const makeSandwich = function(topping) {
  console.log("Slice the sandwich open with a knife");
  console.log("Put some butter on the sandwich");
  console.log("Add " + topping + " to the sandwich");
  console.log("Close the sandwich");
  console.log("There you go, a sandwich with " + topping);
}

// call function
makeSandwich("hagelslag");
makeSandwich("leverworst");


// Deel C: gebruik een return statement
const calculateDiscountedPrice = function(totalAmount, discount) {
  return Math.round(totalAmount - discount);
}

console.log(calculateDiscountedPrice(30, 7));


// Deel D: gebruik meerdere return statements
const calculateDiscountedPriceAbove25Euro = function (totalAmount, discount) {
  if(totalAmount > 25) {
    return Math.round(totalAmount - discount);
  } else {
    return totalAmount;
  }
}

console.log(calculateDiscountedPriceAbove25Euro(25, 5));
console.log(calculateDiscountedPriceAbove25Euro(26, 5));
console.log(calculateDiscountedPriceAbove25Euro(30, 7));
console.log(calculateDiscountedPriceAbove25Euro(10, 5));
console.log(calculateDiscountedPriceAbove25Euro(50, 10));
