"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";

import { Marcellus } from "next/font/google";
import { cn } from "../utils/functions";
import { QuizItem } from "./_components/quiz-item";
import { useCallback, useMemo, useState } from "react";
import {
  CHARACTER_DESCRIPTIONS,
  CHARACTER_IMAGES,
  CHARACTER_NAMES,
  QUESTION_LIST,
} from "@/utils/constants";
import type { TAnswer, TCharacter, TQuestion, TSex } from "@/utils/types";
import { Result } from "./_components/result";

const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
  const [sex, setSex] = useState<string | null>(null);

  const [scores, setScores] = useState<Record<string, number>>({
    [CHARACTER_NAMES.BRAVE_KNIGHT]: 0,
    [CHARACTER_NAMES.WISE_WIZARD]: 0,
    [CHARACTER_NAMES.MYSTERIOUS_ROGUE]: 0,
    [CHARACTER_NAMES.COMPASSIONATE_HEALER]: 0,
    [CHARACTER_NAMES.DARK_SORCERER]: 0,
    [CHARACTER_NAMES.ADVENTUROUS_EXPLORER]: 0,
    [CHARACTER_NAMES.NOBLE_ELF]: 0,
  });

  const processAnswer = useCallback(
    (selectedAnswer: TAnswer) => {
      const scoresCopy = { ...scores };
      for (const character of selectedAnswer.characters) {
        scoresCopy[character] =
          (scoresCopy[character] || 0) + selectedAnswer.weight;
      }

      setScores({ ...scoresCopy });
    },
    [scores]
  );

  const [currentIndex, setCurrentIndex] = useState(0);

  const moveToNextQuestion = useCallback(
    (selectedAnswer: TAnswer) => {
      if (currentIndex === 0) {
        setSex(selectedAnswer?.value as string);
      }
      processAnswer(selectedAnswer);
      setCurrentIndex((prevIndex) => prevIndex + 1);
    },
    [processAnswer, currentIndex]
  );

  const isLastQuestion = currentIndex === QUESTION_LIST.length;

  const findTopCharacter = useCallback(() => {
    let maxScore = Number.NEGATIVE_INFINITY;
    let highestCharacter = "";

    for (const character in scores) {
      if (scores[character] > maxScore) {
        maxScore = scores[character];
        highestCharacter = character;
      }
    }

    return highestCharacter;
  }, [scores]);

  const topCharacter: TCharacter = useMemo(() => {
    // const result = findTopCharacter();
    const result = CHARACTER_NAMES.WISE_WIZARD;
    const characterImages = CHARACTER_IMAGES[result][(sex as TSex) ?? "male"];
    const details = CHARACTER_DESCRIPTIONS[result];

    const randomizeImage = (characterImages: string[]) => {
      return characterImages[
        Math.floor(Math.random() * characterImages.length)
      ];
    };

    return {
      name: result,
      image:
        characterImages?.length > 1
          ? randomizeImage(characterImages)
          : characterImages?.[0],
      details,
    };
  }, [sex]);

  const resetQuiz = useCallback(() => {
    setSex(null);
    setScores({
      [CHARACTER_NAMES.BRAVE_KNIGHT]: 0,
      [CHARACTER_NAMES.WISE_WIZARD]: 0,
      [CHARACTER_NAMES.MYSTERIOUS_ROGUE]: 0,
      [CHARACTER_NAMES.COMPASSIONATE_HEALER]: 0,
      [CHARACTER_NAMES.DARK_SORCERER]: 0,
      [CHARACTER_NAMES.ADVENTUROUS_EXPLORER]: 0,
      [CHARACTER_NAMES.NOBLE_ELF]: 0,
    });
    setCurrentIndex(0);
  }, []);

  return (
    <div
      className={cn(
        marcellus.className,
        "relative w-full min-h-screen bg-cover flex justify-center px-5"
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
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="w-full max-w-[650px] mx-auto flex flex-col items-center gap-10 mt-[150px] sm:mt-[250px] mb-20"
        >
          {isLastQuestion ? (
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
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
