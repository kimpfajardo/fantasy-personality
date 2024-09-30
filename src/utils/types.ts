import type { ReactNode } from "react";

export type TQuestionType = "multiple-choice" | "yes-no-maybe" | "rating";

export type TQuestion = {
  question: string;
  type: TQuestionType;
  answers: TAnswer[];
  shouldRandomize?: boolean;
};

export type TAnswer = {
  text: string;
  characters: string[];
  weight: number;
  content?: ReactNode;
  value?: string;
};

export type TSex = "male" | "female";

export type TCharacter = {
  name: string;
  image: string;
  details: {
    summary: string;
    keyTraits: string[];
    notes: string;
  };
};
