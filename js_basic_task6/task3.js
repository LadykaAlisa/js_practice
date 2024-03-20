function calculate(num1, num2, operator) {
    if (typeof num1 !== 'number' || typeof num2 !== 'number') {
        throw new Error("Параметри повинні бути числами");
    }
    if (typeof operator !== 'string' || !['+', '-', '*', '/'].includes(operator)) {
        throw new Error("Третій параметр повинен бути +,-,/ або *");
    }
    if (arguments.length !== 3) {
        throw new Error("Кількість аргументів повинна бути рівною 3");
    }
    if (operator === '/' && num2 === 0) {
        throw new Error("Коли операція ділення, другий параметр повинен не дорівнювати 0");
    }

    let result;
    if (operator === '+') {
        result = num1 + num2;
    } else if (operator === '-') {
        result = num1 - num2;
    } else if (operator === '*') {
        result = num1 * num2;
    } else if (operator === '/') {
        result = num1 / num2;
    }
    return `${num1} ${operator} ${num2} = ${result}`;
}

try {
    console.log(calculate(100, 5, "*"));
    console.log(calculate(100, 5, 3)); 
    console.log(calculate(100, 0, "/")); 
} catch (error) {
    console.error(error.message);
}






