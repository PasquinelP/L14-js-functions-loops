/* 
VAT calculations

VAT exercise 1

Now let's write some code. First let's write a function that takes the base price and the VAT percentage and returns the price including VAT. You must do the calculation of the VAT amount in a separate function. So, in the spirit of the lesson: we have a main function that does the main calculation and another function that we call from this main function.
*/

const calcVat = function (basePrice, vat){
  if (vat === 21) {
    const vatAmount = basePrice * 0.21;
    return vatAmount;
  } else {
    const vatAmount = basePrice * 0.09;
    return vatAmount;
  }
};


const calcPriceInclVat = function (basePrice, vat) {
  const vatAmount = calcVat(basePrice, vat);
  const priceInclVat = basePrice + vatAmount;
  return  priceInclVat;
}

console.log(calcPriceInclVat(1000, 21));
console.log(calcPriceInclVat(2, 9));

/*
VAT exercise 2

In this exercise we're going to calculate the base price and VAT amount. The main function you make should take the amount including VAT and the VAT percentage. The return value should be an array with two elements: base price and VAT amount. Again: make sure you use two functions, where the main one calls another function to do part of the calculation.
*/

const calcVatAmount = function (price, vat) {
  if (vat === 21) {
    const vatAmount = price - (price / 1.21);
    return vatAmount;
  } else {
    const vatAmount = price - (price / 1.09);
    return vatAmount;
  }
};

const calcBasePrice = function (price, vat) {
  if (vat === 21) {
    const basePrice = price / 1.21;
    return basePrice;
  } else {
    const basePrice = price / 1.09;
    return basePrice;
  }
}

const calcBasePriceAndVat = function (price, vat) {
  const vatAmount = calcVatAmount(price, vat);
  const basePrice = calcBasePrice(price, vat);
  const basePriceAndVat = [basePrice, vatAmount]
  return basePriceAndVat;
};

console.log(calcBasePriceAndVat(1210, 21));
console.log(calcBasePriceAndVat(2.18, 9));

