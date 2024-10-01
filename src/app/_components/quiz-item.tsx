"use client";

import { cn } from "@/utils/functions";
import { useState } from "react";

type QuizItemProps =
  | {
      question: string;
      choices: {
        tags: string[];
        text: string;
      }[];
    }
  | undefined;

const answers: string[] = [
  "I confront it directly and deal with the problem.",
  "I think through the situation carefully before acting.",
  "I prefer to avoid conflict if possible and find a way around it.",
  "I try to mediate and help everyone find common ground.",
  "I plan ahead and work behind the scenes to resolve it.",
];

export const QuizItem = () => {
  const [chosenAnswer, setChosenAnswer] = useState<string | null>(null);
  return (
    <div className="flex flex-col gap-6">
      <h1 className="text-6xl text-center">How do you handle conflict?</h1>

      <div className="grid grid-cols-2 grid-rows-2 gap-6">
        {answers.map((answer) => (
          <button
            key={answer}
            className={cn(
              "border p-4 text-center transition-all duration-300 select-none overflow-hidden",
              "relative group tracking-normal "
            )}
            onClick={() => setChosenAnswer(answer)}
            disabled={!!chosenAnswer}
            type="button"
            style={{
              animationIterationCount: "1",
              animationDirection: "normal",
              animationFillMode: "forwards",
            }}
          >
            <div
              className={cn(
                "absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-black transition-all duration-300 ease-smooth delay-100",
                chosenAnswer === answer
                  ? "w-full"
                  : chosenAnswer
                  ? ""
                  : "group-hover:w-3/4"
              )}
            />
            <div
              className={cn(
                "absolute top-1/2 left-0 -translate-y-1/2 w-1 h-1 bg-black transition-all duration-300 ease-smooth delay-100 ",
                chosenAnswer === answer ? "h-full visible" : "invisible"
              )}
            />
            <span>{answer}</span>{" "}
            <div
              className={cn(
                "absolute top-1/2 right-0 -translate-y-1/2 w-1 h-1 bg-black transition-all duration-300 ease-smooth delay-100 ",
                chosenAnswer === answer ? "h-full visible" : "invisible"
              )}
            />
            <div
              className={cn(
                "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-black transition-all duration-300 ease-smooth delay-100",
                chosenAnswer === answer
                  ? "w-full"
                  : chosenAnswer
                  ? ""
                  : "group-hover:w-3/4"
              )}
            />
          </button>
        ))}
      </div>
    </div>
  );
};
