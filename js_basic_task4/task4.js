const basePriceCar = 10000;
let finalPriceCar = basePriceCar;
let yearOfIssue = 2021;
let hasClimateControl = true;
let mileage = 50500;
let hasSafetyPackage = true;
let isElectric = true;
let percentYearOfIssue = 10;
let percentHasClimateControl = 7;
let percentMileage = 5;
let percentHasSafetyPackage = 8;
let percentIsElectric = 15;

if (yearOfIssue>=2019 && yearOfIssue<=2022) {
    finalPriceCar += (basePriceCar * percentYearOfIssue) / 100;
    console.log(`Base price was 10,000, production year increase +${percentYearOfIssue}% to the final price ${finalPriceCar}`);
}


if (hasClimateControl) {
    finalPriceCar += (basePriceCar * percentHasClimateControl)/100;
    console.log(`Base price was 10,000, has climate control increase +${percentHasClimateControl}% to the final price ${finalPriceCar}`);
}


if (mileage>=50000 && mileage<=100000) {
    finalPriceCar -= (basePriceCar * percentMileage)/100;
    console.log(`Base price was 10,000, mileage decrease -${percentMileage}% to the final price ${finalPriceCar}`);
}

if (hasSafetyPackage) {
    finalPriceCar += (basePriceCar * percentHasSafetyPackage)/100;
    console.log(`Base price was 10,000, has safety package increase +${percentHasSafetyPackage}% to the final price ${finalPriceCar}`);

}

if (isElectric) {
    finalPriceCar += (basePriceCar *percentIsElectric)/100;
    console.log(`Base price was 10,000, is electric increase +${percentIsElectric}% to the final price ${finalPriceCar}`);
}

console.log(`Final price auto: ${finalPriceCar}`);






