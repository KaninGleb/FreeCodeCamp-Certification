const generateBtn = document.getElementById('generate-btn');
const gradesContainer = document.getElementById('grades-container');
const finalMessage = document.getElementById('final-message');
const studentScoreInput = document.getElementById('student-score');

const ATTEMPT_COUNTER = 12;

function getAverage(scores) {
  let total = 0;

  for (let i = 0; i < scores.length; i++) {
    total += scores[i];
  }

  return total / scores.length;
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

function createGradeCard(attempt, score, grade, isPassing) {
  const card = document.createElement('div');
  card.className = 'grade-card';
  card.innerHTML = `
    <div class="score">Attempt ${attempt}: ${score}</div>
    <div class="grade">Grade: ${grade}</div>
    <div class="passing ${isPassing ? 'yes' : ''}">
      ${isPassing ? "✅ Passed" : "❌ Failed"}
    </div>
  `;
  return card;
}

function generateAndDisplayGrades() {
  gradesContainer.innerHTML = '';
  const scores = [];

  for (let i = 0; i < ATTEMPT_COUNTER; i++) {
    const score = Math.ceil(Math.random() * 100);
    scores.push(score);

    const grade = getGrade(score);
    const isPassing = hasPassingGrade(score);

    gradesContainer.appendChild(
      createGradeCard(i + 1, score, grade, isPassing)
    )
  }
  return scores;
}

function displayFinalMessage(scores, studentScore) {
  const average = getAverage(scores);
  const studentGrade = getGrade(studentScore);
  const passStatus = hasPassingGrade(studentScore) ? "passed" : "failed";

  finalMessage.innerHTML = `
    <p>Class average: <strong>${average.toFixed(1)}</strong></p>
    <p>Your score: <strong>${studentScore}</strong> (${studentGrade})</p>
    <p>You <strong>${passStatus}</strong> the course!</p>
  `;
}

generateBtn.addEventListener('click', () => {
  const scores = generateAndDisplayGrades();
  const studentScore = parseInt(studentScoreInput.value) || 0;
  displayFinalMessage(scores, studentScore);
});

window.addEventListener('DOMContentLoaded', () => {
  const scores = generateAndDisplayGrades();
  displayFinalMessage(scores, parseInt(studentScoreInput.value));
});