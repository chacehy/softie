"use client";
import { MotionConfig } from "motion/react";

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <MotionConfig transformTemplate={(_, generated) => `${generated} translateZ(0)`}>
      {children}
    </MotionConfig>
  );
}
