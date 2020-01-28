import { FIRST_QUESTIONS_DATA } from "./firstQuestionData";
import { SECOND_QUESTION_DATA } from "./secondQuestionData";
import { SECOND_PART_QUESTION_DATA } from "./secondPartQuestionData";
import { THIRD_QUESTION_DATA } from "./thirdQuestionData";
import { FOURTH_QUESTIONS_DATA } from "./fourthQuestionData";

export const DATA_QUESTIONS = {
  firstQuestion: FIRST_QUESTIONS_DATA,
  secondQuestion: SECOND_QUESTION_DATA,
  secondPartQuestion: SECOND_PART_QUESTION_DATA,
  thirdQuestion: THIRD_QUESTION_DATA,
  fourthQuestion: FOURTH_QUESTIONS_DATA
};

const getQuestionInitial = (nameQuestion, answer, acc, values) => {
  if (
    typeof values[nameQuestion] === "object" &&
    values[nameQuestion] instanceof Array
  ) {
    const answers = values[nameQuestion].reduce((acc, valueQuestion) => {
      const question = DATA_QUESTIONS[nameQuestion][answer].questions
        .filter(question => question.value === valueQuestion)
        .pop();
      if (question) {
        acc.push(question.label);
      }
      return acc;
    }, []);
    acc[nameQuestion] = {
      //...question,
      question: DATA_QUESTIONS[nameQuestion][answer].label,
      answer: answers,
      key: DATA_QUESTIONS[nameQuestion][answer].keyQuestion
    };
    return acc;
  } else {
    const question = DATA_QUESTIONS[nameQuestion][answer].questions
      .filter(question => question.value === values[nameQuestion])
      .pop();
    if (question) {
      acc[nameQuestion] = {
        //...question,
        question: DATA_QUESTIONS[nameQuestion][answer].label,
        answer: question.label,
        key: DATA_QUESTIONS[nameQuestion][answer].keyQuestion,
        valueQuestion: question.valueQuestion
      };
    }
    return acc;
  }
};

const getAnswerIndex = (nameQuestion, valuesFinal) => {
  const ANSWER_INDEX = {
    firstQuestion: "A1",
    secondQuestion: valuesFinal["firstQuestion"],
    secondPartQuestion: valuesFinal["firstQuestion"],
    thirdQuestion: valuesFinal["firstQuestion"],
    fourthQuestion: valuesFinal["thirdQuestion"]
  };
  return ANSWER_INDEX[nameQuestion];
};

export const getAnswerAndQuestion = values => {
  const result = Object.keys(values)
    .filter(nameQuestion => values[nameQuestion].length !== 0)
    .reduce((acc, nameQuestion) => {
      const answerIndex = getAnswerIndex(nameQuestion, values);
      acc = getQuestionInitial(nameQuestion, answerIndex, acc, values);
      return acc;
    }, {});

  console.log("result", result);

  const response = Object.keys(result).reduce((acc, keyResult) => {
    const { question, answer, key, valueQuestion } = result[keyResult];
    if (key === "type") {
      return {
        ...acc,
        type: valueQuestion
      };
    } else if (key === "diagnosis") {
      return {
        type: acc["type"],
        diagnosis: answer,
        extendedInformation: acc["extendedInformation"]
        //...acc,
      };
    } else {
      if (acc["extendedInformation"]) {
        acc["extendedInformation"].push({
          questionLabel: question,
          answerLabel: answer
        });
      } else {
        acc["extendedInformation"] = [
          {
            questionLabel: question,
            answerLabel: [answer]
          }
        ];
      }
      return {
        ...acc
      };
    }
  }, {});

  console.log("response", response);

  return {
    response: {
      sgs: response
    },
    result
  };
};
//getAnswerAndQuestion(FAKE);
