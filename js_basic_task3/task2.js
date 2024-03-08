let inputString = "Тест заміна голосних літер";

let replaceable = "о";

let resultString = inputString.split(replaceable).join ('*');

console.log("Результат заміни голосних літер:", resultString);



