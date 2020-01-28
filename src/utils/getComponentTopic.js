import {
  FOURTH_QUESTION_LEFT,
  FOURTH_QUESTIONS_RIGHT
} from "./fourthQuestionData";

const FOURTH_QUESTIONS = [
  ...FOURTH_QUESTION_LEFT,
  ...FOURTH_QUESTIONS_RIGHT
];
// isRight is used because the answers 3 and 10 are equals
export default (topic, isRight) => {
  const result = FOURTH_QUESTIONS.filter(item => item.label === topic);
  if (isRight) {
    return Boolean(result[1])
      ? result[1].topicComponent()
      : Boolean(result[0])
      ? result[0].topicComponent()
      : null;
  }
  return Boolean(result[0]) ? result[0].topicComponent() : null;
};
