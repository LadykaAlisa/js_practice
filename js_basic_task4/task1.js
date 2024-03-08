let inputString = "Тест заміна голосних літер";

let resultString = inputString.replace(/[аеиіоуюєїАЕИІОУЮЄЇ]/g, '*');

console.log("Результат заміни голосних літер:", resultString);
