let calculateSupply = function(age, amountDay) {
  let lifetimeSupply = age * amountDay;
  return "You will need " + lifetimeSupply + " snacks to last you until the ripe old age of " + age;
}

console.log(calculateSupply(80, 10));
console.log(calculateSupply(65, 5));
console.log(calculateSupply(72, 30));