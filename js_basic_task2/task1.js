let income = 200000;
let tax;

if (income < 10000) {
    tax=5;

}
else if (income>=10000 && income<=50000) {
    tax=10;
      
}
else if (income>=50001 && income<=100000) {
    tax=15;
   
}
else if (income>=100001 && income<=200000){
    tax=20;
    
}
else {
    tax =25;
    
}

let taxSum = (income * tax )/ 100;
let incomeWithoutTax = income - taxSum;

console.log(`Сума базового дохода складає ${income}`);
console.log(`Відсоток податку складає ${tax} %`);
console.log(`Сумма доходу після вирахування податків складає ${incomeWithoutTax}`);
