


let basePriceCar = 10000;
let yearOfIssue = 2020;
let hasClimateControl = true;
let mileage = 52000;
let hasSafetyPackage = true;
let isElectric = true;
let percentYearOfIssue = 10;
let percentHasClimateControl = 7;
let percentMileage = 5;
let percentHasSafetyPackage = 8;
let percentIsElectric = 15;
let totalSum1 = 0;
let totalSum2 = 0;
let totalSum3 = 0;
let totalSum4 = 0;
let totalSum5 = 0;

if (yearOfIssue >= 2019 && yearOfIssue <= 2022) {
    totalSum1 = (basePriceCar * percentYearOfIssue) / 100;
    console.log(`Base price was 10,000, production year increase +${percentYearOfIssue}% to the final price ${totalSum1}`);
}

if (hasClimateControl) {
    totalSum2 = (basePriceCar * percentHasClimateControl) / 100;
    console.log(`Base price was 10,000, has climate control increase +${percentHasClimateControl}% to the final price ${totalSum2}`);
}

if (mileage >= 50000 && mileage <= 100000) {
    totalSum3 = (basePriceCar * percentMileage) / 100;
    console.log(`Base price was 10,000, mileage decrease -${percentMileage}% to the final price ${totalSum3}`);
}

if (hasSafetyPackage) {
    totalSum4 = (basePriceCar * percentHasSafetyPackage) / 100;
    console.log(`Base price was 10,000, has safety package increase +${percentHasSafetyPackage}% to the final price ${totalSum4}`);
}

if (isElectric) {
    totalSum5 = (basePriceCar * percentIsElectric) / 100;
    console.log(`Base price was 10,000, is electric increase +${percentIsElectric}% to the final price ${totalSum5}`);
}

let finalPriceCar = basePriceCar + totalSum1 + totalSum2 - totalSum3 + totalSum4 + totalSum5;

console.log(`Final price auto: ${finalPriceCar}`);






