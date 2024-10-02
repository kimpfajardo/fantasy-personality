import { cn } from "@/utils/functions";
import type { TCharacter } from "@/utils/types";
import { motion } from "framer-motion";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const variants = {
  hidden: { opacity: 0, y: 100 },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const Result = ({
  character: {
    name,
    image,
    details: { summary, keyTraits, notes },
  },
  handleReset,
}: {
  character: TCharacter;
  handleReset: () => void;
}) => {
  return (
    <motion.div
      className="flex flex-col items-center gap-6 text-center"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      <motion.h3 className="text-lg sm:text-xl" variants={variants}>
        Your fantasy character is:
      </motion.h3>

      <motion.h2
        className="flex flex-col gap-6 text-3xl sm:text-6xl text-slate-700 drop-shadow-lg"
        variants={variants}
      >
        {name}
      </motion.h2>

      <motion.div variants={variants}>
        <div className="overflow-hidden rounded-2xl border-2 shadow-2xl hover:scale-110 transition-all hover:rotate-2 spring-bounce-40 spring-duration-300 lg:hover:scale-[1.15]">
          <Image
            className="character-image "
            src={image}
            alt={name}
            width={300}
            height={300}
          />
        </div>
      </motion.div>

      <motion.div className="w-full" variants={variants}>
        <h4 className="text-2xl text-slate-700">What it says about you </h4>
        <hr className="mt-6 w-10 mx-auto border-black border-2" />
      </motion.div>

      <motion.p variants={variants}>{summary}</motion.p>

      <motion.div className="w-full" variants={variants}>
        <h4 className="text-2xl text-slate-700">Key Traits </h4>
        <hr className="mt-6 w-10 mx-auto border-black border-2" />
      </motion.div>

      <motion.div variants={variants}>
        <ul className="flex flex-col gap-4">
          {keyTraits.map((trait) => (
            <li key={trait}>{trait}</li>
          ))}
        </ul>
      </motion.div>

      <motion.div variants={variants}>
        <div className="p-4 flex flex-col gap-6 bg-slate-700 text-white transform spring-bounce-40 spring-duration-300 transition-transform lg:hover:scale-110">
          <div className=" w-full">
            <h4 className="text-2xl">KEEP IN MIND</h4>
            <hr className="mt-6 w-10 mx-auto border-white border-2" />
          </div>

          <p>{notes}</p>
        </div>
      </motion.div>

      <motion.div className="w-full" variants={variants}>
        <motion.button
          className={cn(
            "p-4 text-center transition-all duration-300 select-none overflow-hidden bg-slate-200",
            "relative group tracking-normal w-full"
          )}
          type="button"
          style={{
            animationIterationCount: "1",
            animationDirection: "normal",
            animationFillMode: "forwards",
          }}
          onClick={handleReset}
        >
          <div
            className={cn(
              "absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-slate-700 transition-all duration-300 ease-smooth delay-100 group-hover:w-full"
            )}
          />
          <span>Take the quiz again</span>
          <div
            className={cn(
              "absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 bg-slate-700 transition-all duration-300 ease-smooth delay-100 group-hover:w-full"
            )}
          />
        </motion.button>
      </motion.div>
    </motion.div>
  );
};
