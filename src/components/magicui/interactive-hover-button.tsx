import React from "react";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface InteractiveHoverButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "white" | "whiteSolid";
}

export const InteractiveHoverButton = React.forwardRef<
  HTMLButtonElement,
  InteractiveHoverButtonProps
>(({ children, className, variant = "default", ...props }, ref) => {
  const base = "group relative w-auto cursor-pointer overflow-hidden rounded-full p-2 px-6 text-center font-semibold transition-all duration-300";
  const variants = {
    default:
      "bg-background border border-border",
      white: "bg-white/30 text-black border border-transparent group-hover:border-black backdrop-blur-md backdrop-saturate-150 text-white",
      whiteSolid: "bg-white text-black border border-transparent group-hover:border-black",
  } as const;

  return (
    <button
      ref={ref}
      className={cn(base, variants[variant], className)}
      {...props}
    >
      <div className="flex items-center gap-2">
        <div className="h-2 w-2 rounded-full bg-primary transition-all duration-300 group-hover:scale-[100.8]"></div>
        <span className="inline-block transition-all duration-300 group-hover:translate-x-12 group-hover:opacity-0">
          {children}
        </span>
      </div>
      <div className="absolute top-0 z-10 flex h-full w-full translate-x-12 items-center justify-center gap-2 opacity-0 transition-all duration-300 group-hover:-translate-x-5 group-hover:opacity-100">
        <span>{children}</span>
        <ArrowRight />
      </div>
    </button>
  );
});

InteractiveHoverButton.displayName = "InteractiveHoverButton";
