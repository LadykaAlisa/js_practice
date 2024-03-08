let number1 = -20;
let number2 = 20;

let minNumber = Math.min(number1, number2);
let maxNumber = Math.max(number1, number2);

console.log("Парні числа між", minNumber, "і", maxNumber, ":");

for (let i = minNumber; i <= maxNumber; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}






