import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";

interface AnimatedProgressProps {
  percentage: number;
  color: string;
  className?: string;
}

export function AnimatedProgress({ percentage, color, className = "" }: AnimatedProgressProps) {
  const [progress, setProgress] = useState(0);
  const [ref, isIntersecting] = useIntersectionObserver({
    threshold: 0.3,
  });

  useEffect(() => {
    if (isIntersecting) {
      const timer = setTimeout(() => {
        setProgress(percentage);
      }, 200);
      return () => clearTimeout(timer);
    }
  }, [isIntersecting, percentage]);

  return (
    <div ref={ref} className={`bg-gray-700 rounded-full h-3 overflow-hidden ${className}`}>
      <motion.div
        className={`h-full rounded-full ${color}`}
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
    </div>
  );
}
