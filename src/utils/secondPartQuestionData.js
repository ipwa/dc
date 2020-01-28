import TypeOne from "../type-demential/TypeOne";
import TypeTwo from "../type-demential/TypeTwo";
import TypeThree from "../type-demential/TypeThree";
import TypeFour from "../type-demential/TypeFour";
import TypeFive from "../type-demential/TypeFive";
import TypeSix from "../type-demential/TypeSix";
import TypeSeven from "../type-demential/TypeSeven";
import TypeEight from "../type-demential/TypeEight";
import TypeNine from "../type-demential/TypeNine";
import TypeTen from "../type-demential/TypeTen";

export const SECOND_PART_QUESTION = [
  {
    label: "I just know it's dementia",
    value: "A1",
    typeDementialComponent: TypeOne
  },
  {
    label: "Alzheimer's disease",
    value: "A2",
    typeDementialComponent: TypeTwo
  },
  {
    label: "Vascular dementia",
    value: "A3",
    typeDementialComponent: TypeThree
  },
  {
    label: "Mixed dementia",
    value: "A4",
    typeDementialComponent: TypeFour
  },
  {
    label: "Dementia with Lewy bodies",
    value: "A5",
    typeDementialComponent: TypeFive
  },
  {
    label: "Frontotemporal dementia (FTD)",
    value: "A6",
    typeDementialComponent: TypeSix
  },
  {
    label: "Young-onset dementia (before 65)",
    value: "A7",
    typeDementialComponent: TypeSeven
  },
  {
    label: "Posterior cortical atrophy (PCA)",
    value: "A8",
    typeDementialComponent: TypeEight
  },
  {
    label: "Alcohol-related brain damage",
    value: "A9",
    typeDementialComponent: TypeNine
  },
  {
    label: "Rarer types of dementia",
    value: "A10",
    typeDementialComponent: TypeTen
  }
];
export const SECOND_PART_QUESTION_DATA = {
  A1: {
    questions: SECOND_PART_QUESTION,
    label: "What type of dementia do you have?",
    keyQuestion: "diagnosis"
  },
  A2: {
    questions: SECOND_PART_QUESTION,
    label: "What type of dementia does the person have?",
    keyQuestion: "diagnosis"
  }
};
