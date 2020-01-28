const SECOND_QUESTION_LEFT = [
  {
    label:
      "I have memory problems or other possible symptoms of dementia",
    value: "A1"
  },
  {
    label: "Getting assessed to see if I have dementia",
    value: "A2"
  },
  {
    label:
      "Adjusting to my recent dementia diagnosis",
    value: "A3"
  },
  {
    label: "How to live well with dementia",
    value: "A4"
  }
];
const SECOND_QUESTION_RIGHT = [
  {
    label: "They have memory problems or other possible dementia symptoms",
    value: "A1"
  },
  {
    label: "They are being assessed for dementia",
    value: "A2"
  },
  {
    label: "They've just been diagnosed with dementia",
    value: "A3"
  },
  {
    label: "They've been living with dementia for a while",
    value: "A4"
  }
];
export const SECOND_QUESTION_DATA = {
  A1: {
    questions: SECOND_QUESTION_LEFT,
    label: "What do you need help with?",
    keyQuestion: "extendedInformation"
  },
  A2: {
    questions: SECOND_QUESTION_RIGHT,
    label: "What best describes the person you care about?",
    keyQuestion: "extendedInformation"
  }
};
