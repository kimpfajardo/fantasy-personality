import Image from "next/image";

import { Marcellus } from "next/font/google";
import { cn } from "../utils/functions";
import { QuizItem } from "./_components/quiz-item";

const marcellus = Marcellus({
  weight: ["400"],
  subsets: ["latin"],
});

export default function Home() {
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
      <div className="w-full max-w-[650px] mx-auto flex flex-col items-center gap-10">
        {/* <h1 className="text-6xl text-center">
          What is your fantasy personality?
        </h1>

        <button
          className="border hover:border-transparent rounded-full w-[300px] hover:font-medium relative group tracking-normal hover:tracking-[3px] transition-all duration-300 ease-[cubic-bezier(0.19, 1, 0.22, 1)] py-6"
          type="button"
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-1 group-hover:w-3/4 bg-black transition-all duration-300 ease-[cubic-bezier(0.19, 1, 0.22, 1)] delay-100" />
          Take the quiz
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-1 group-hover:w-3/4 bg-black transition-all duration-300 ease-[cubic-bezier(0.19, 1, 0.22, 1)] delay-100" />
        </button> */}
        <QuizItem />
      </div>
    </div>
  );
}
