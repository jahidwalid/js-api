const numbers = [2, 4, 7, 8, 3, 5];
const bigNumbers=numbers.filter(Number => Number > 3);
const smallNumbers=numbers.filter(Number => Number < 8);

console.log(bigNumbers);
console.log(smallNumbers);