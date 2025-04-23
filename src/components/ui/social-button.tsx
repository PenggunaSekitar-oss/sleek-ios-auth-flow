
import React from "react";
import { cn } from "@/lib/utils";

interface SocialButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  icon: React.ReactNode;
  provider: string;
}

export const SocialButton = React.forwardRef<HTMLButtonElement, SocialButtonProps>(
  ({ className, icon, provider, ...props }, ref) => {
    return (
      <button
        className={cn(
          "flex items-center justify-center gap-3 bg-white border border-border rounded-xl py-3 px-4 w-full transition-all duration-200 hover:bg-accent active:scale-[0.98]",
          className
        )}
        ref={ref}
        {...props}
      >
        {icon}
        <span className="font-medium">Continue with {provider}</span>
      </button>
    );
  }
);

SocialButton.displayName = "SocialButton";
