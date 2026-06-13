"use client";

import { motion } from "framer-motion";
import { User, ShieldCheck, Heart } from "lucide-react";

export default function About() {
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

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="space-y-6"
    >
      {/* Bio Card */}
      <motion.div variants={itemVariants} className="fb-card">
        <h3 className="font-serif text-lg font-bold text-primary-blue flex items-center gap-3 border-b border-card-border pb-3 mb-4">
          <User className="w-5 h-5 text-secondary-blue" />
          About Me
        </h3>
        <p className="text-text-secondary text-sm md:text-base leading-relaxed">
          I am a Senior Software Developer working at Accenture in Chennai. I hold an M.Sc. in Computer Science and come from a respectable family based in Karur. I value honesty, mutual respect, responsibility, and strong family relationships. I believe marriage is built on trust, understanding, commitment, and shared growth. I strive to maintain a balanced and meaningful life while pursuing personal and professional excellence.
        </p>
      </motion.div>


    </motion.div>
  );
}
