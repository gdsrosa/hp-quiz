export const validateAnswer = (answer) => {
  const quizTemplate = [7, 'Daniel Radcliffe', 'Edwiges', 'Trouxas', 'Gina Weasley'];
  const isCorrect = [];

  answer.forEach((checkedAnswer) => {
    quizTemplate.forEach((correctAnswer) => {
      if (checkedAnswer === correctAnswer) {
        isCorrect.push(checkedAnswer);
      }
    });
  });

  console.log(isCorrect.length);

  return isCorrect;
};

// console.log(checkAnswer([7, 'Daniel', 'Ed', 'Trouxa', 'Gina Weasley']));
