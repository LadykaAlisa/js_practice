const basePriceCar = 10000;
let finalPriceCar;
let yearOfIssue = 2021;
let hasClimateControl = true;
let mileage = 50500;
let hasSafetyPackage = true;
let isElectric = false;

if (yearOfIssue>=2019 && yearOfIssue<=2022) {
    let percentYearOfIssue;
    percentYearOfIssue = basePriceCar*0.1;
    basePriceCar += percentYearOfIssue;
    console.log(`Base price was 10,000, production year increase +${percentYearOfIssue} to the final price`);
}


if (hasClimateControl) {
    let percentHasClimateControl;
    percentHasClimateControl = basePriceCar*0.07;
    basePriceCar += percentHasClimateControl;
    console.log(`Base price was 10,000, has climate control increase +${percentHasClimateControl.toFixed()} to the final price`);
}


if (mileage>=50000 && mileage<=100000) {
    let percentMileage;
    percentMileage = basePriceCar*0.05;
    basePriceCar -= percentMileage;
    console.log(`Base price was 10,000, mileage decrease -${percentMileage} to the final price`);
}

if (hasSafetyPackage) {
    let percentHasSafetyPackage;
    percentHasSafetyPackage = basePriceCar*0.08;
    basePriceCar += percentHasSafetyPackage;
    console.log(`Base price was 10,000, has safety package increase +${percentHasSafetyPackage} to the final price`);

}

if (isElectric) {
    let percentIsElectric;
    percentIsElectric = basePriceCar*0.15;
    basePriceCar += percentIsElectric;
    console.log(`Base price was 10,000, is electric increase +${percentIsElectric} to the final price`);
}

console.log(`Final price auto: ${basePriceCar}`);










