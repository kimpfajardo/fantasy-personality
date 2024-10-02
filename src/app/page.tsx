import { AnimatePresence } from "framer-motion";
import { Quiz } from "./_components/quiz";

export default function Home() {
  return (
    <AnimatePresence mode="wait" presenceAffectsLayout={false}>
      <Quiz />
    </AnimatePresence>
  );
}
