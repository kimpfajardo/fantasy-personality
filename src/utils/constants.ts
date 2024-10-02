export type TQuestionType = "multiple-choice" | "yes-no-maybe" | "rating";

export type TQuestion = {
  question: string;
  type: TQuestionType;
  answers: TAnswer[];
};

export type TAnswer = {
  text: string;
  characters: string[];
  weight: number;
};

export const QUESTION_LIST: Readonly<TQuestion[]> = Object.freeze([
  {
    question: "How do you handle conflict?",
    type: "multiple-choice",
    answers: [
      {
        text: "I confront it directly and deal with the problem.",
        characters: ["Brave Knight", "Adventurous Explorer"],
        weight: 2,
      },
      {
        text: "I think through the situation carefully before acting.",
        characters: ["Wise Wizard", "Noble Elf"],
        weight: 1,
      },
      {
        text: "I prefer to avoid conflict if possible and find a way around it.",
        characters: ["Mysterious Rogue", "Dark Sorcerer"],
        weight: 1,
      },
      {
        text: "I try to mediate and help everyone find common ground.",
        characters: ["Compassionate Healer", "Noble Elf"],
        weight: 1,
      },
      {
        text: "I plan ahead and work behind the scenes to resolve it.",
        characters: ["Dark Sorcerer", "Mysterious Rogue"],
        weight: 2,
      },
    ],
  },
  {
    question: "Do you enjoy physical challenges?",
    type: "yes-no-maybe",
    answers: [
      {
        text: "Yes",
        characters: ["Brave Knight", "Adventurous Explorer"],
        weight: 2,
      },
      {
        text: "No",
        characters: ["Wise Wizard", "Compassionate Healer"],
        weight: 1,
      },
      {
        text: "Maybe",
        characters: ["Mysterious Rogue", "Noble Elf"],
        weight: 1,
      },
    ],
  },
  {
    question: "Rate your curiosity level on a scale of 1 to 5.",
    type: "rating",
    answers: [
      {
        text: "1",
        characters: ["Brave Knight", "Compassionate Healer"],
        weight: 1,
      },
      { text: "2", characters: ["Brave Knight", "Noble Elf"], weight: 1 },
      { text: "3", characters: ["Wise Wizard", "Mysterious Rogue"], weight: 1 },
      {
        text: "4",
        characters: ["Adventurous Explorer", "Mysterious Rogue"],
        weight: 2,
      },
      { text: "5", characters: ["Wise Wizard", "Dark Sorcerer"], weight: 2 },
    ],
  },
  {
    question: "What motivates you the most?",
    type: "multiple-choice",
    answers: [
      {
        text: "Responsibility and loyalty to others.",
        characters: ["Brave Knight", "Compassionate Healer"],
        weight: 2,
      },
      {
        text: "Knowledge and understanding.",
        characters: ["Wise Wizard", "Noble Elf"],
        weight: 1,
      },
      {
        text: "Freedom and independence.",
        characters: ["Mysterious Rogue", "Adventurous Explorer"],
        weight: 1,
      },
      {
        text: "Ambition and power.",
        characters: ["Dark Sorcerer", "Noble Elf"],
        weight: 2,
      },
    ],
  },
  {
    question: "What type of challenge excites you?",
    type: "multiple-choice",
    answers: [
      {
        text: "Physical endurance.",
        characters: ["Brave Knight", "Adventurous Explorer"],
        weight: 2,
      },
      {
        text: "Mental puzzles.",
        characters: ["Wise Wizard", "Noble Elf"],
        weight: 1,
      },
      {
        text: "Finding creative solutions.",
        characters: ["Mysterious Rogue", "Dark Sorcerer"],
        weight: 2,
      },
      {
        text: "Helping others solve emotional or social problems.",
        characters: ["Compassionate Healer", "Wise Wizard"],
        weight: 1,
      },
    ],
  },
  {
    question: "Would you rather be in the background or the spotlight?",
    type: "yes-no-maybe",
    answers: [
      {
        text: "Yes, in the spotlight.",
        characters: ["Brave Knight", "Dark Sorcerer"],
        weight: 2,
      },
      {
        text: "No, in the background.",
        characters: ["Mysterious Rogue", "Compassionate Healer"],
        weight: 1,
      },
      {
        text: "It depends on the situation.",
        characters: ["Wise Wizard", "Noble Elf"],
        weight: 1,
      },
    ],
  },
  {
    question: "On a scale of 1 to 5, how much do you enjoy helping others?",
    type: "rating",
    answers: [
      { text: "1", characters: ["Dark Sorcerer"], weight: 1 },
      { text: "2", characters: ["Mysterious Rogue"], weight: 1 },
      { text: "3", characters: ["Adventurous Explorer"], weight: 1 },
      { text: "4", characters: ["Brave Knight"], weight: 1 },
      {
        text: "5",
        characters: ["Compassionate Healer", "Wise Wizard"],
        weight: 2,
      },
    ],
  },
  {
    question: "What is your preferred way of spending time?",
    type: "multiple-choice",
    answers: [
      {
        text: "Exploring new places.",
        characters: ["Adventurous Explorer", "Mysterious Rogue"],
        weight: 2,
      },
      {
        text: "Studying or learning something new.",
        characters: ["Wise Wizard", "Noble Elf"],
        weight: 1,
      },
      {
        text: "Helping others.",
        characters: ["Compassionate Healer", "Brave Knight"],
        weight: 2,
      },
      {
        text: "Planning your next big move.",
        characters: ["Dark Sorcerer", "Noble Elf"],
        weight: 2,
      },
    ],
  },
  {
    question: "How do you respond to failure?",
    type: "multiple-choice",
    answers: [
      {
        text: "I try again with more determination.",
        characters: ["Brave Knight", "Adventurous Explorer"],
        weight: 2,
      },
      {
        text: "I reflect on the mistake and learn from it.",
        characters: ["Wise Wizard", "Noble Elf"],
        weight: 1,
      },
      {
        text: "I find a different approach or path.",
        characters: ["Mysterious Rogue", "Dark Sorcerer"],
        weight: 1,
      },
      {
        text: "I focus on helping others who were affected.",
        characters: ["Compassionate Healer", "Brave Knight"],
        weight: 2,
      },
    ],
  },
  {
    question: "Would you describe yourself as ambitious?",
    type: "yes-no-maybe",
    answers: [
      { text: "Yes", characters: ["Dark Sorcerer", "Brave Knight"], weight: 2 },
      {
        text: "No",
        characters: ["Compassionate Healer", "Wise Wizard"],
        weight: 1,
      },
      {
        text: "Maybe",
        characters: ["Mysterious Rogue", "Noble Elf"],
        weight: 1,
      },
    ],
  },
]);
