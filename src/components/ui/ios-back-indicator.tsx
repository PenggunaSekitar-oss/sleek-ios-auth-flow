
import React from "react";
import { useNavigate } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

interface IosBackIndicatorProps {
  className?: string;
  returnTo?: string;
}

const IosBackIndicator: React.FC<IosBackIndicatorProps> = ({ 
  className, 
  returnTo 
}) => {
  const navigate = useNavigate();

  const handleBack = () => {
    if (returnTo) {
      navigate(returnTo);
    } else {
      navigate(-1);
    }
  };

  return (
    <button
      onClick={handleBack}
      className={cn(
        "fixed top-6 left-6 z-10 h-9 w-9 rounded-full bg-white/90 border border-border/30 shadow-sm flex items-center justify-center transition-all duration-200 active:scale-90",
        className
      )}
    >
      <ArrowLeft size={18} />
    </button>
  );
};

export default IosBackIndicator;
