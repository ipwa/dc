import TopicOne from "../topics/TopicOne";
import TopicTwo from "../topics/TopicTwo";
import TopicThree from "../topics/TopicThree";
import TopicFour from "../topics/TopicFour";
import TopicFive from "../topics/TopicFive";
import TopicSix from "../topics/TopicSix";
import TopicSeven from "../topics/TopicSeven";
import TopicEight from "../topics/TopicEight";
import TopicNine from "../topics/TopicNine";
import TopicTen from "../topics/TopicTen";
export const FOURTH_QUESTION_LEFT = [
  {
    label: "Dealing with dementia symptoms",
    value: "A1",
    topicComponent: TopicOne
  },
  {
    label: "Making the home dementia friendly",
    value: "A2",
    topicComponent: TopicTwo
  },
  {
    label: "Legal and financial planning",
    value: "A3",
    topicComponent: TopicThree
  },
  {
    label: "Staying active and involved",
    value: "A4",
    topicComponent: TopicFour
  },
  {
    label: "How to get more help and support",
    value: "A5",
    topicComponent: TopicFive
  }
];
export const FOURTH_QUESTIONS_RIGHT = [
  {
    label: "How later stage dementials affects behavior and emotions",
    value: "A1",
    topicComponent: TopicSix
  },
  {
    label: "Health and personal care for someone with dementia",
    value: "A2",
    topicComponent: TopicSeven
  },
  {
    label: "Making decisions for the person with dementia",
    value: "A3",
    topicComponent: TopicEight
  },
  {
    label: "Care options including how to choose a care home",
    value: "A4",
    topicComponent: TopicNine
  },
  {
    label: "Legal and financial planning",
    value: "A5",
    topicComponent: TopicTen
  }
];
export const FOURTH_QUESTIONS_DATA = {
  A1: {
    questions: FOURTH_QUESTION_LEFT,
    label: "Which topics are you interested in?"
  },
  A2: {
    questions: FOURTH_QUESTIONS_RIGHT,
    label: "Which topics are you interested in?"
  }
};
