"use client";

import { motion } from "framer-motion";
import { Heart, CheckCircle2 } from "lucide-react";

export default function Preferences() {
  const preferencesList = [
    "Well-educated professional who values trust, mutual understanding, and commitment.",
    "Family-oriented life partner with respect for strong relationships.",
    "Believes in supporting each other's personal and professional growth.",
    "Aims to build a happy, harmonious family life together."
  ];

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="fb-card"
    >
      <h3 className="font-serif text-lg font-bold text-primary-blue flex items-center gap-3 border-b border-card-border pb-3 mb-4">
        <Heart className="w-5 h-5 text-secondary-blue" />
        Partner Preferences & Expectations
      </h3>
      <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6">
        Looking for a well-educated, respectful, family-oriented life partner who values trust, mutual understanding, commitment, and strong family relationships. Someone who believes in supporting each other's personal and professional growth while building a happy and harmonious family life.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {preferencesList.map((pref, idx) => (
          <div key={idx} className="flex gap-3 items-start bg-fb-bg/20 border border-card-border p-4 rounded-xl hover:border-primary-blue/20 transition-all duration-300">
            <CheckCircle2 className="w-4.5 h-4.5 text-primary-blue flex-shrink-0 mt-0.5" />
            <span className="text-xs md:text-sm text-text-secondary leading-snug">{pref}</span>
          </div>
        ))}
      </div>
    </motion.div>
  );
}
