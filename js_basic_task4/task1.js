const numbers = [5, -4, 0, 6, 7, -1, 0, 0];


let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

for (var i = 0; i < numbers.length; i++) {
  if (numbers[i] > 0) {
    positiveCount++;
  } else if (numbers[i] < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }
}

console.log("Positive numbers: " + positiveCount);
console.log("Negative numbers: " + negativeCount);
console.log("Zeros: " + zeroCount);

