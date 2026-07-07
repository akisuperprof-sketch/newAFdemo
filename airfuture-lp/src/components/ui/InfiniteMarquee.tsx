"use client";

import { motion } from "framer-motion";
import { ReactNode } from "react";

interface InfiniteMarqueeProps {
  children: ReactNode;
  speed?: number; // seconds to complete one loop
  direction?: "left" | "right";
  className?: string;
}

export default function InfiniteMarquee({
  children,
  speed = 20,
  direction = "left",
  className = "",
}: InfiniteMarqueeProps) {
  const xMovement = direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"];

  return (
    <div className={`overflow-hidden whitespace-nowrap flex ${className}`}>
      <motion.div
        className="flex w-max"
        animate={{ x: xMovement }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: speed,
        }}
      >
        <div className="flex px-4">{children}</div>
        <div className="flex px-4">{children}</div>
      </motion.div>
    </div>
  );
}
