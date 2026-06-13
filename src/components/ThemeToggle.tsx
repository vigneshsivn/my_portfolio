"use client";

import { useTheme } from "@/context/ThemeContext";
import { Sun, Moon } from "lucide-react";
import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // Avoid hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return <div className="w-10 h-10 rounded-full bg-card-bg/50 border border-card-border" />;

  return (
    <button
      onClick={toggleTheme}
      id="theme-toggle-btn"
      aria-label="Toggle Light/Dark Theme"
      className="w-10 h-10 rounded-full flex items-center justify-center glass-panel bg-fb-bg/30 border border-card-border hover:border-primary-blue hover:text-primary-blue text-fg-base backdrop-blur-md transition-all duration-300 cursor-pointer shadow-[0_4px_20px_rgba(0,0,0,0.1)] hover:shadow-[0_4px_20px_rgba(29,78,216,0.3)] hover:scale-105 active:scale-95"
    >
      {theme === "light" ? (
        <Moon className="w-5 h-5 animate-pulse" />
      ) : (
        <Sun className="w-5 h-5 animate-spin-slow" />
      )}
    </button>
  );
}
