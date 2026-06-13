"use client";

import { motion } from "framer-motion";
import { Users, Heart } from "lucide-react";

export default function Family() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.08 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 100 } }
  };

  const familyData = [
    { label: "Father", name: "Kandasamy" },
    { label: "Mother", name: "Kokila" },
    { label: "Sibling", name: "One Younger Brother" }
  ];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="fb-card"
    >
      <h3 className="font-serif text-lg font-bold text-primary-blue flex items-center gap-3 border-b border-card-border pb-3 mb-6">
        <Users className="w-5 h-5 text-secondary-blue" />
        Family Particulars
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {familyData.map((member, idx) => (
          <motion.div
            key={idx}
            variants={itemVariants}
            className="bg-fb-bg/30 border border-card-border hover:border-primary-blue/20 rounded-2xl p-5 flex flex-col items-center justify-center text-center transition-all duration-300 group shadow-xs"
          >
            <div className="w-11 h-11 rounded-full bg-primary-blue/5 border border-primary-blue/10 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform duration-300">
              <Heart className="w-5 h-5 text-primary-blue" />
            </div>
            <span className="text-[10px] font-bold text-text-secondary uppercase tracking-wider">{member.label}</span>
            <span className="font-serif font-bold text-lg text-fb-text mt-1">{member.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
