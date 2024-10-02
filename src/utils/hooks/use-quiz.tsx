'use client'

import { useCallback, useMemo, useState } from "react";
import type { TAnswer, TCharacter, TSex } from "../types";
import {
  CHARACTER_DESCRIPTIONS,
  CHARACTER_IMAGES,
  INITIAL_VALUES,
  QUESTION_LIST,
} from "../constants";

export const useQuiz = () => {
  const [sex, setSex] = useState<string | null>(null);

  const [scores, setScores] = useState<Record<string, number>>(INITIAL_VALUES);

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

  const [currentIndex, setCurrentIndex] = useState(-1);

  const moveToNextQuestion = useCallback(
    (selectedAnswer: TAnswer) => {
      setTimeout(() => {
        if (currentIndex === 0) {
          setSex(selectedAnswer?.value as string);
        }
        processAnswer(selectedAnswer);
        setCurrentIndex((prevIndex) => prevIndex + 1);
      }, 300);
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
    const result = findTopCharacter();

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
  }, [sex, findTopCharacter]);

  const resetQuiz = useCallback(() => {
    setSex(null);
    setScores(INITIAL_VALUES);
    setCurrentIndex(0);
  }, []);

  return {
    currentIndex,
    isLastQuestion,
    moveToNextQuestion,
    topCharacter,
    resetQuiz,
    setCurrentIndex,
  };
};
