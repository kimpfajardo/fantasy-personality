import { cn } from "@/utils/functions";
import { inter } from "../layout";

export const Footer = () => (
  <footer
    className={cn(
      "flex border-t gap-4 justify-center p-6 text-sm",
      inter.className
    )}
  >
    <p>
      <span>Developed by </span>
      <a
        className="text-slate-700 underline font-bold"
        href="https://devkpf.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Kim Fajardo
      </a>
      <span className="mx-2">|</span>
      <span>
        <span>{new Date().getFullYear()}</span>
      </span>
    </p>
  </footer>
);
