const squareNumbers = (arr) => {
 let newArr = [];
 for (let element of arr){
    newArr.push(element * element);
  }
  return newArr;
}

let numbers =[1, 2, 3, 8, 9];
console.log("Новий масив чисел піднесений до квадрата:", squareNumbers(numbers));







