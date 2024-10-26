function getAverage(scores) {
    let total = 0;

    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }

    const average = total / scores.length;
    return average;
}

function getGrade(score) {
    // // If...else:
    // // let grade;
    // if (score < 59) {
    //     grade = "F";
    // } else if (score >= 60 && score <= 69) {
    //     grade = "D";
    // } else if (score >= 70 && score <= 79) {
    //     grade = "C";
    // } else if (score >= 80 && score <= 89) {
    //     grade = "B";
    // } else if (score >= 90 && score <= 99) {
    //     grade = "A";
    // } else {
    //     grade = "A++";
    // }
    // return grade;


    // // Switch...case
    // // let grade;
    // switch (true) {
    //     case score < 59:
    //         grade = "F";
    //         break;
    //     case score < 70:
    //         grade = "D";
    //         break;
    //     case score < 80:
    //         grade = "C";
    //         break;
    //     case score < 90:
    //         grade = "B";
    //         break;
    //     case score < 100:
    //         grade = "A";
    //         break;
    //     default:
    //         grade = "A++";
    // }
    // return grade;


    // Ternary operator:
    return score < 59 ? "F" :
        score < 70 ? "D" :
        score < 80 ? "C" :
        score < 90 ? "B" :
        score < 100 ? "A" :
        "A++";
}

function hasPassingGrade(score) {
    let grade = getGrade(score);
    return grade !== "F";
}


// ✅Checking
const attemptCounter = 10;

function generateAndDisplayGrades() {
    const scores = [];                                        // Array creation
    for (let i = 0; i < attemptCounter; i++) {
        const score = Math.ceil(Math.random() * 100);
        scores.push(score);                                   // Pushing the array

        const grade = getGrade(score);                        // Function call - getGrade
        const isPassing = hasPassingGrade(score);             // Function call - hasPassingGrade

        console.log(`Score${" " + (i + 1)}: ${score} ${"\n"}Grade${" " + (i + 1)}: ${grade} ${"\n"}Passing grade: ${isPassing  ? "✅ Yes" : "❌ No"}${"\n"}`);
    }
    return scores;                                            // Array return
}

const scoresArray = generateAndDisplayGrades();               // Saving an array of scores


function studentMsg(totalScores, studentScore) {
    const average = getAverage(totalScores);
    const studentGrade = getGrade(studentScore);
    const passStatus = hasPassingGrade(studentScore) ? "passed" : "failed";
    return (`Class average: ${average}. Your grade: ${studentGrade}. You ${passStatus} the course.`);
}

console.log(studentMsg(scoresArray, 37));                     // My student has 37 points