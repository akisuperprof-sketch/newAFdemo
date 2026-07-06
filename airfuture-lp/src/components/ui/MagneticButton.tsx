"use client";

import { useRef, useState, ReactNode } from "react";
import { motion } from "framer-motion";
import { clsx } from "clsx";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  as?: React.ElementType;
  href?: string;
}

export default function MagneticButton({
  children,
  className,
  onClick,
  as: Component = "button",
  href,
  ...props
}: MagneticButtonProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const handleMouse = (e: React.MouseEvent<HTMLDivElement>) => {
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current!.getBoundingClientRect();
    const middleX = clientX - (left + width / 2);
    const middleY = clientY - (top + height / 2);
    // Move up to 20% of the dimension
    setPosition({ x: middleX * 0.2, y: middleY * 0.2 });
  };

  const reset = () => {
    setPosition({ x: 0, y: 0 });
  };

  const MotionComponent = motion(Component as any);

  return (
    <div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={reset}
      className={clsx("relative flex items-center justify-center", className)}
    >
      <MotionComponent
        onClick={onClick}
        href={href}
        animate={{ x: position.x, y: position.y }}
        transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.1 }}
        className="w-full h-full flex items-center justify-center"
        {...props}
      >
        {children}
      </MotionComponent>
    </div>
  );
}
