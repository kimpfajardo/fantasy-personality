import { cn } from "@/utils/functions";
import type { TAnswer } from "@/utils/types";
import { motion } from "framer-motion";
import { choiceVariants } from "./quiz-item";
import { Fragment } from "react";
import { AnimatedBorderContainer } from "./animated-border-container";

export type ChoiceItemProps = {
  chosenAnswer: number | null;
  answer: TAnswer;
  index: number;
  onClick: () => void;
};

export const ChoiceItem = ({
  chosenAnswer,
  answer,
  index,
  onClick,
}: ChoiceItemProps) => {
  const isChosen = chosenAnswer === index;
  const hasChosen = !!chosenAnswer;
  return (
    <motion.button
      variants={choiceVariants}
      suppressHydrationWarning
      key={answer.text}
      className={cn(
        "p-4 h-full text-center transition-all duration-300 select-none overflow-hidden bg-slate-100",
        "relative group tracking-normal answer w-full",
        isChosen ? "bg-slate-700 text-white" : "text-slate-700"
      )}
      onClick={onClick}
      disabled={hasChosen}
      type="button"
      style={{
        animationIterationCount: "1",
        animationDirection: "normal",
        animationFillMode: "forwards",
      }}
    >
      <AnimatedBorderContainer
        showBorder={isChosen}
        showBorderOnHover={!hasChosen}
      >
        <Fragment>
          <div className={cn(isChosen ? "text-white" : "text-slate-700")}>
            {answer?.content}
          </div>
          <span>{answer.text}</span>
        </Fragment>
      </AnimatedBorderContainer>
    </motion.button>
  );
};
