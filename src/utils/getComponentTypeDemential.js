import { SECOND_PART_QUESTION } from "./secondPartQuestionData";

export default answer => {
  const result = SECOND_PART_QUESTION.filter(
    item => item.label === answer
  ).pop();
  return Boolean(result) ? result.typeDementialComponent() : null;
};
