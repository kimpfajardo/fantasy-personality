"use client";

import { cn } from "@/utils/functions";
import { memo, useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import type { TAnswer, TQuestion } from "@/utils/types";
import { ChoiceItem } from "./choice-item";

type QuizItemProps = {
  question: TQuestion;
  onNext: (answer: TAnswer) => void;
};

export const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      type: "spring",
    },
  },
  next: {
    opacity: 0,
    y: -100,
  },
};

export const childVariants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const choiceContainerVariants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.05,
      type: "tween",
    },
  },
};

export const choiceVariants = {
  hidden: {
    opacity: 0,
    y: -10,
  },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const QuizItem = memo<QuizItemProps>(
  ({
    question: { question, answers, type, shouldRandomize = true },
    onNext,
  }: QuizItemProps) => {
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

    const shuffledAnswers = useMemo(() => {
      if (type === "multiple-choice" && shouldRandomize) {
        return shuffle(answers);
      }
      return answers;
    }, [shuffle, answers, type, shouldRandomize]);

    return (
      <motion.div
        variants={container}
        initial="hidden"
        animate={"show"}
        exit={"next"}
        className="flex flex-col gap-6 px-5"
      >
        <motion.div variants={childVariants}>
          <h1 className="text-2xl md:text-6xl text-center">{question}</h1>
        </motion.div>

        <motion.div variants={childVariants}>
          <motion.div
            variants={choiceContainerVariants}
            className={cn(
              "gap-6",
              type === "multiple-choice"
                ? "grid grid-cols-1 md:grid-cols-2 grid-rows-2"
                : cn(
                    "flex",
                    type === "yes-no-maybe"
                      ? "flex-col"
                      : "flex-col sm:flex-row"
                  )
            )}
            initial="hidden"
            animate="show"
          >
            {shuffledAnswers.map((answer, index) => (
              <div key={answer.text} className="active:scale-105 transition-all w-full h-full">
                <ChoiceItem
                  chosenAnswer={chosenAnswer}
                  answer={answer}
                  index={index}
                  onClick={() => {
                    setChosenAnswer(index);
                    onNext(answer);
                  }}
                />
              </div>
            ))}
          </motion.div>
        </motion.div>
      </motion.div>
    );
  }
);

QuizItem.displayName = "QuizItem";
