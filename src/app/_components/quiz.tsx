"use client";

import { useQuiz } from "@/utils/hooks/use-quiz";
import { motion } from "framer-motion";
import { QuizItem } from "./quiz-item";
import { Result } from "./result";
import type { TQuestion } from "@/utils/types";
import { QUESTION_LIST } from "@/utils/constants";
import { Fragment } from "react";
import { WelcomeScreen } from "./welcome-screen";

export const Quiz = () => {
  const {
    currentIndex,
    isLastQuestion,
    moveToNextQuestion,
    topCharacter,
    resetQuiz,
    setCurrentIndex,
  } = useQuiz();
  return (
    <motion.div
      key={currentIndex}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className="w-full max-w-[650px] mx-auto flex flex-col items-center gap-10 mt-[150px] sm:mt-[250px] mb-20"
    >
      {currentIndex === -1 ? (
        <WelcomeScreen handleNextScreen={() => setCurrentIndex(0)} />
      ) : (
        <Fragment>
          {!isLastQuestion ? (
            <QuizItem
              question={QUESTION_LIST[currentIndex] as TQuestion}
              onNext={moveToNextQuestion}
            />
          ) : (
            <Result
              character={topCharacter}
              handleReset={resetQuiz}
              key={topCharacter.name}
            />
          )}
        </Fragment>
      )}
    </motion.div>
  );
};
