"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MessageSquare, Image, ChevronUp, Menu, X } from "lucide-react";

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
      if (window.scrollY > 150) {
        setIsOpen(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const whatsappMessage = encodeURIComponent(
    "Hello, I am contacting regarding the marriage profile of K. Vignesh."
  );
  const whatsappUrl = `https://wa.me/919942574158?text=${whatsappMessage}`;

  const items = [
    {
      icon: Phone,
      label: "Call Custodian",
      href: "tel:+919942574158",
      color: "bg-primary-blue text-white",
      title: "Call Kandasamy (Father)"
    },
    {
      icon: MessageSquare,
      label: "WhatsApp Chat",
      href: whatsappUrl,
      color: "bg-[#2ed573] text-white",
      target: "_blank",
      rel: "noopener noreferrer",
      title: "Start WhatsApp Chat"
    },
    {
      icon: Image,
      label: "Gallery Section",
      onClick: () => scrollToSection("gallery"),
      color: "bg-fb-card text-primary-blue border border-card-border hover:border-primary-blue/30",
      title: "Scroll to Photo Gallery"
    }
  ];

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-center gap-3 no-print">
      {/* Expanded options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 15, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 15, scale: 0.8 }}
            className="flex flex-col items-center gap-3 mb-2"
          >
            {items.map((item, idx) => {
              const Icon = item.icon;
              const classes = `w-11 h-11 rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110 cursor-pointer ${item.color}`;
              return (
                <div key={idx} className="relative group flex items-center justify-end">
                  <span className="absolute right-14 bg-neutral-900 text-white text-[10px] font-bold px-2.5 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-md">
                    {item.label}
                  </span>
                  {item.href ? (
                    <a
                      href={item.href}
                      target={item.target}
                      rel={item.rel}
                      className={classes}
                      title={item.title}
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ) : (
                    <button
                      onClick={item.onClick}
                      className={classes}
                      title={item.title}
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  )}
                </div>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-primary-blue text-white flex items-center justify-center shadow-xl hover:scale-105 active:scale-95 transition-all cursor-pointer z-50"
        title="Quick Matrimonial Actions"
      >
        {isOpen ? <X className="w-6 h-6 animate-spin-fast" /> : <Menu className="w-6 h-6" />}
      </button>

      {/* Scroll Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="w-11 h-11 rounded-full bg-fb-card border border-card-border text-primary-blue flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all cursor-pointer"
            title="Scroll back to Top"
          >
            <ChevronUp className="w-5 h-5" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  );
}
