"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { Marcellus } from "next/font/google";
import { cn } from "../utils/functions";
import { QuizItem } from "./_components/quiz-item";
import { useCallback, useMemo, useRef, useState } from "react";
import { QUESTION_LIST, TAnswer, type TQuestion } from "@/utils/constants";

const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  const characterScoresRef = useRef({
    "Brave Knight": 0,
    "Wise Wizard": 0,
    "Mysterious Rogue": 0,
    "Compassionate Healer": 0,
    "Dark Sorcerer": 0,
    "Adventurous Explorer": 0,
    "Noble Elf": 0,
  });

  // Function to process the answer and update the character scores in the object
  const processAnswer = useCallback((selectedAnswer: TAnswer) => {
    const characterScores = characterScoresRef.current;

    // Update the scores in the object for each character in the answer
    for (const character of selectedAnswer.characters) {
      characterScores[character as keyof typeof characterScores] =
        (characterScores[character as keyof typeof characterScores] || 0) +
        selectedAnswer.weight;
    }
  }, []);

  const [currentIndex, setCurrentIndex] = useState(0);

  const moveToNextQuestion = useCallback(
    (selectedAnswer: TAnswer) => {
      processAnswer(selectedAnswer);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    },
    [processAnswer]
  );

  const isLastQuestion = currentIndex === QUESTION_LIST.length - 1;

  const findTopCharacter = () => {
    const characterScores = characterScoresRef.current;
    let maxScore = Number.NEGATIVE_INFINITY;
    let highestCharacter = "";

    // Iterate over the characterScores object to find the highest score
    for (const character in characterScores) {
      if (
        characterScores[character as keyof typeof characterScores] > maxScore
      ) {
        maxScore = characterScores[character as keyof typeof characterScores];
        highestCharacter = character;
      }
    }

    return highestCharacter;
  };

  const topCharacter = useMemo(findTopCharacter, []);

  return (
    <div
      className={cn(
        marcellus.className,
        "relative w-full h-screen bg-cover flex items-center justify-center"
      )}
    >
      <Image
        className="absolute inset-0 left-1/2 -translate-x-1/2 top-0 -translate-y-1/2 select-none pointer-events-none animate-pulse"
        src="/hex-fade.png"
        width={600}
        height={600}
        alt="Hexagon pattern"
      />
      <AnimatePresence mode="wait" presenceAffectsLayout={false}>
        <motion.div
          key={currentIndex} // This key ensures the component re-renders when currentIndex changes
          initial={{ opacity: 0 }} // Starting state (can be customized)
          animate={{ opacity: 1 }} // Animate to this state
          exit={{ opacity: 0 }} // Exit animation
          transition={{ duration: 0.5 }} // Animation timing (customizable)
          className="w-full max-w-[650px] mx-auto flex flex-col items-center gap-10"
        >
          {!isLastQuestion ? (
            <QuizItem
              question={QUESTION_LIST[currentIndex] as TQuestion}
              onNext={moveToNextQuestion}
            />
          ) : (
            // show the top character
            <div className="flex flex-col gap-6">
              Your fantasy character is:
              <div className="flex flex-col gap-6">{topCharacter}</div>
            </div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
