let studentName = "Rahul";
let correctAnswers = 15;
let wrongAnswers = 5;

function getFinalScore(name, correct, wrong) {
    return (name === "Unknown") ? "Invalid Student"  : (correct * 4) - (wrong * 1);
}

let result = getFinalScore(studentName, correctAnswers, wrongAnswers);

console.log("Final Score:", result);

console.log("Type of result:", typeof result);