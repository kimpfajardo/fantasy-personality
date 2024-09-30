import { cn } from "@/utils/functions";
import { motion } from "framer-motion";

type WelcomeScreenProps = {
  handleNextScreen: () => void;
};

export const WelcomeScreen = ({ handleNextScreen }: WelcomeScreenProps) => {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -50 },
        visible: {
          opacity: 1,
          y: 0,

          transition: {
            staggerChildren: 0.1,
          },
        },
      }}
      initial="hidden"
      animate="visible"
      className="flex flex-col gap-6"
    >
      <motion.h1
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        className="text-6xl text-center"
      >
        Which Fantasy Character Are You?
      </motion.h1>
      <motion.hr
        className="border border-slate-100 mx-auto"
        variants={{
          hidden: { opacity: 0, width: 0 },
          visible: {
            opacity: 1,
            width: "50%",
            transition: {
              delay: 0.3,
            },
          },
        }}
      />
      <motion.p
        variants={{
          hidden: { opacity: 0, y: 50 },
          visible: {
            opacity: 1,
            y: 0,
          },
        }}
        className="text-center text-2xl font-light"
      >
        Discover Your Inner Fantasy Character in Just a Few Questions
      </motion.p>

      <motion.button
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
          },
        }}
        className={cn(
          "p-4 text-center transition-all duration-300 select-none overflow-hidden bg-slate-200 w-[300px]",
          "relative group tracking-normal mx-auto"
        )}
        type="button"
        style={{
          animationIterationCount: "1",
          animationDirection: "normal",
          animationFillMode: "forwards",
        }}
        onClick={handleNextScreen}
      >
        <div
          className={cn(
            "absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-slate-700 transition-all duration-300 ease-smooth delay-100 group-hover:w-full"
          )}
        />
        <span>Get started</span>
        <div
          className={cn(
            "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-slate-700 transition-all duration-300 ease-smooth delay-100 group-hover:w-full"
          )}
        />
      </motion.button>
    </motion.div>
  );
};
