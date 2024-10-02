"use client";

import { cn } from "@/utils/functions";
import { memo, useCallback, useMemo, useState } from "react";
import { delay, motion } from "framer-motion";
import type { TAnswer, TQuestion } from "@/utils/types";

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
      delay: 0.2,
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
      >
        <div className="flex flex-col gap-6 px-5">
          <motion.div variants={item}>
            <h1 className="text-2xl md:text-6xl text-center">{question}</h1>
          </motion.div>

          <motion.div
            variants={item}
            className={cn(
              "grid-cols-1 md:grid-cols-2 grid-rows-2 gap-6",
              type === "multiple-choice"
                ? "grid"
                : cn(
                    "flex gap-6",
                    type === "yes-no-maybe"
                      ? "flex-col"
                      : "flex-col sm:flex-row"
                  )
            )}
            transition={{
              staggerChildren: 0.1,
              delayChildren: 0.5,
            }}
          >
            {shuffledAnswers.map((answer, index) => (
              <ChoiceItem
                chosenAnswer={chosenAnswer}
                answer={answer}
                index={index}
                onClick={() => {
                  setChosenAnswer(index);
                  onNext(answer);
                }}
                key={answer.text}
              />
            ))}
          </motion.div>
        </div>
      </motion.div>
    );
  }
);

QuizItem.displayName = "QuizItem";

export const ChoiceItem = ({
  chosenAnswer,
  answer,
  index,
  onClick,
}: {
  chosenAnswer: number | null;
  answer: TAnswer;
  index: number;
  onClick: () => void;
}) => {
  return (
    <motion.button
      suppressHydrationWarning
      key={answer.text}
      className={cn(
        "border p-4 text-center transition-all duration-300 select-none overflow-hidden",
        "relative group tracking-normal answer w-full"
      )}
      onClick={onClick}
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
      <div className="">{answer?.content}</div>
      <span>{answer.text}</span>
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
  );
};
