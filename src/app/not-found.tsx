'use client'

import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/utils/functions";

export default function NotFound() {
  return (
    <div className="flex flex-col gap-6 mt-[150px] sm:mt-[300px] text-center">
      <h1 className="text-xl sm:text-5xl">404 - Page Not Found</h1>
      <p>Sorry, the page you are looking for does not exist.</p>

      <Link className="" href="/">
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
      </Link>
    </div>
  );
}
