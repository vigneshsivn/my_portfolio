"use client";

import { useEffect } from "react";

export default function CursorGlowProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // For elements using the .fb-card glow
      const cards = document.querySelectorAll('.fb-card');
      cards.forEach((card) => {
        const rect = (card as HTMLElement).getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        (card as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
        (card as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <>{children}</>;
}
