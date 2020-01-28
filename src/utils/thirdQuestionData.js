const THIRD_QUESTION_LEFT = [
  {
    label: "Dealing with dementia symptoms",
    value: "A1"
  },
  {
    label: "Making the home dementia friendly",
    value: "A2"
  },
  {
    label: "Legal and financial planning",
    value: "A3"
  },
  {
    label: "Staying active and involved",
    value: "A4"
  },
  {
    label: "How to get more help and support",
    value: "A5"
  }
];
const THIRD_QUESTION_RIGHT = [
  {
    label: "They are still independent",
    value: "A1"
  },
  {
    label: "They have more advanced dementia or extra care needs",
    value: "A2"
  },
  {
    label: "They are approaching the end of their life",
    value: "A3"
  }
];
export const THIRD_QUESTION_DATA = {
  A1: {
    questions: THIRD_QUESTION_LEFT,
    label: "Which topics are you interested in?",
    keyQuestion: "extendedInformation"
  },
  A2: {
    questions: THIRD_QUESTION_RIGHT,
    label:
      "Which best describes the person with dementia that you are helping?",
    keyQuestion: "extendedInformation"
  }
};
