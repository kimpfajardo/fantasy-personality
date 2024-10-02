"use client";

import { cn } from "@/utils/functions";
import { memo, useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { TAnswer, TQuestion } from "@/utils/constants";

type QuizItemProps = {
  question: TQuestion;
  onNext: (answer: TAnswer) => void;
};

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      type: "tween",
    },
  },
  next: {
    opacity: 0,
    y: -100,
    transition: {
      type: "spring",
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 2,
    },
  },
};

export const QuizItem = memo<QuizItemProps>(
  ({ question: { question, answers }, onNext }: QuizItemProps) => {
    const [chosenAnswer, setChosenAnswer] = useState<number | null>(null);

    const shuffle = useCallback((array: TAnswer[]) => {
      const tempArray = [...array];
      let currentIndex = array.length;

      while (currentIndex !== 0) {
        const randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;

        [tempArray[currentIndex], tempArray[randomIndex]] = [
          tempArray[randomIndex],
          tempArray[currentIndex],
        ];
      }

      return tempArray;
    }, []);

    const shuffledAnswers = useMemo(() => shuffle(answers), [shuffle, answers]);

    if (shuffledAnswers.length === 0) return null;

    return (
      <motion.div
        variants={container}
        initial="hidden"
        animate={"show"}
        exit={"next"}
      >
        <div className="flex flex-col gap-6">
          <motion.div variants={item}>
            <h1 className="text-6xl text-center">{question}</h1>
          </motion.div>

          <motion.div
            variants={item}
            className="grid grid-cols-2 grid-rows-2 gap-6"
            transition={{
              staggerChildren: 0.1,
              delayChildren: 0.5,
            }}
          >
            {shuffledAnswers.map((answer, index) => (
              <motion.button
                key={answer.text}
                className={cn(
                  "border p-4 text-center transition-all duration-300 select-none overflow-hidden",
                  "relative group tracking-normal answer"
                )}
                onClick={() => {
                  setChosenAnswer(index);
                  onNext(answer);
                }}
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
                    chosenAnswer === index
                      ? "w-full"
                      : chosenAnswer
                      ? ""
                      : "group-hover:w-3/4"
                  )}
                />
                <div
                  className={cn(
                    "absolute top-1/2 left-0 -translate-y-1/2 w-1 h-1 bg-black transition-all duration-300 ease-smooth delay-100 ",
                    chosenAnswer === index ? "h-full visible" : "invisible"
                  )}
                />
                <span>{answer.text}</span>{" "}
                <div
                  className={cn(
                    "absolute top-1/2 right-0 -translate-y-1/2 w-1 h-1 bg-black transition-all duration-300 ease-smooth delay-100 ",
                    chosenAnswer === index ? "h-full visible" : "invisible"
                  )}
                />
                <div
                  className={cn(
                    "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-black transition-all duration-300 ease-smooth delay-100",
                    chosenAnswer === index
                      ? "w-full"
                      : chosenAnswer
                      ? ""
                      : "group-hover:w-3/4"
                  )}
                />
              </motion.button>
            ))}
          </motion.div>
        </div>
      </motion.div>
    );
  }
);

QuizItem.displayName = "QuizItem";
