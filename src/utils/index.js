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

  return isCorrect;
};

// eslint-disable-next-line no-undef
export const clearFormInput = formId => document.getElementById(formId).reset();
