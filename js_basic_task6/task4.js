function calculatePerformance(math, literature, physics) {
    let averageScore = (math + literature + physics) / 3;

    if (averageScore >= 1 && averageScore <= 49) {
        return "Low performance";
    } else if (averageScore >= 50 && averageScore <= 69) {
        return "Medium performance";
    } else if (averageScore >= 70 && averageScore <= 89) {
        return "Good performance";
    } else if (averageScore >= 90 && averageScore <= 100) {
        return "Very good performance";
    } else {
        return "Invalid input"; 
    }
}


let mathGrade = 100;
let literatureGrade = 100;
let physicsGrade = 100;
console.log(calculatePerformance(mathGrade, literatureGrade, physicsGrade));






