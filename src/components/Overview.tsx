"use client";

import { motion } from "framer-motion";
import { User, Award, Shield, Heart, MapPin, Milestone, DollarSign, BookOpen, Clock, Users } from "lucide-react";

type OverviewProps = {
  setActiveTab: (tab: string) => void;
};

export default function Overview({ setActiveTab }: OverviewProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
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
      animate="show"
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {/* About Me Card */}
      <motion.div variants={itemVariants} className="glass-panel rounded-2xl p-6 md:col-span-2 hover:border-accent-gold/40 transition-colors duration-300">
        <h3 className="font-serif text-xl font-bold text-accent-gold flex items-center gap-3 border-b border-border-dark pb-3 mb-4">
          <User className="w-5 h-5 text-primary-blue" />
          About Me
        </h3>
        <p className="text-text-secondary leading-relaxed text-sm md:text-base">
          I am a Senior Software Developer working at Accenture in Chennai. I hold an M.Sc. in Computer Science and come from a respectable family based in Karur. I value honesty, mutual respect, responsibility, and strong family relationships. I believe marriage is built on trust, understanding, commitment, and shared growth. I strive to maintain a balanced and meaningful life while pursuing personal and professional excellence.
        </p>
      </motion.div>

      {/* Quick Highlights / Statistics Grid */}
      <motion.div variants={itemVariants} className="glass-panel rounded-2xl p-6 md:col-span-2 hover:border-accent-gold/40 transition-colors duration-300">
        <h3 className="font-serif text-xl font-bold text-accent-gold flex items-center gap-3 border-b border-border-dark pb-3 mb-4">
          <Award className="w-5 h-5 text-primary-blue" />
          Quick Highlights
        </h3>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          <div className="bg-bg-base/40 border border-border-dark rounded-xl p-4 flex flex-col items-center text-center hover:border-accent-gold/30 transition-transform duration-300 hover:-translate-y-1">
            <Clock className="w-6 h-6 text-primary-blue mb-2" />
            <span className="text-xs text-text-secondary uppercase tracking-wider">Age</span>
            <span className="font-bold text-sm mt-1">29 Years</span>
          </div>

          <div className="bg-bg-base/40 border border-border-dark rounded-xl p-4 flex flex-col items-center text-center hover:border-accent-gold/30 transition-transform duration-300 hover:-translate-y-1">
            <Milestone className="w-6 h-6 text-primary-blue mb-2" />
            <span className="text-xs text-text-secondary uppercase tracking-wider">Height</span>
            <span className="font-bold text-sm mt-1">168 cm</span>
          </div>

          <div className="bg-bg-base/40 border border-border-dark rounded-xl p-4 flex flex-col items-center text-center hover:border-accent-gold/30 transition-transform duration-300 hover:-translate-y-1">
            <MapPin className="w-6 h-6 text-primary-blue mb-2" />
            <span className="text-xs text-text-secondary uppercase tracking-wider">Location</span>
            <span className="font-bold text-sm mt-1">Chennai, TN</span>
          </div>

          <div className="bg-bg-base/40 border border-border-dark rounded-xl p-4 flex flex-col items-center text-center hover:border-accent-gold/30 transition-transform duration-300 hover:-translate-y-1">
            <BookOpen className="w-6 h-6 text-primary-blue mb-2" />
            <span className="text-xs text-text-secondary uppercase tracking-wider">Education</span>
            <span className="font-bold text-xs mt-1">M.Sc. CS</span>
          </div>

          <div className="bg-bg-base/40 border border-border-dark rounded-xl p-4 flex flex-col items-center text-center hover:border-accent-gold/30 transition-transform duration-300 hover:-translate-y-1">
            <DollarSign className="w-6 h-6 text-primary-blue mb-2" />
            <span className="text-xs text-text-secondary uppercase tracking-wider">Income</span>
            <span className="font-bold text-sm mt-1">₹10 LPA</span>
          </div>

          <div className="bg-bg-base/40 border border-border-dark rounded-xl p-4 flex flex-col items-center text-center hover:border-accent-gold/30 transition-transform duration-300 hover:-translate-y-1">
            <Users className="w-6 h-6 text-primary-blue mb-2" />
            <span className="text-xs text-text-secondary uppercase tracking-wider">Caste</span>
            <span className="font-bold text-sm mt-1">Raju (Hindu)</span>
          </div>
        </div>
      </motion.div>

      {/* Snapshot Cards */}
      <motion.div variants={itemVariants} className="glass-panel rounded-2xl p-6 hover:border-accent-gold/40 transition-colors duration-300">
        <h3 className="font-serif text-xl font-bold text-accent-gold flex items-center gap-3 border-b border-border-dark pb-3 mb-4">
          <BookOpen className="w-5 h-5 text-primary-blue" />
          Education & Career Snapshot
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          Holding a Master's degree in Computer Science, K. Vignesh operates as a Senior Software Developer at Accenture in Chennai, leading technical implementations with a salary profile of ₹10 LPA.
        </p>
        <button
          onClick={() => setActiveTab("career")}
          className="text-xs font-bold text-primary-blue hover:text-accent-gold flex items-center gap-1 transition-colors duration-200 cursor-pointer"
        >
          View Full Timeline &rarr;
        </button>
      </motion.div>

      <motion.div variants={itemVariants} className="glass-panel rounded-2xl p-6 hover:border-accent-gold/40 transition-colors duration-300">
        <h3 className="font-serif text-xl font-bold text-accent-gold flex items-center gap-3 border-b border-border-dark pb-3 mb-4">
          <Heart className="w-5 h-5 text-primary-blue" />
          Family Background Snapshot
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          Hailing from a highly respectable native family in Karur. Son of Kandasamy and Kokila, with one younger brother. Anchored in traditional family values, mutual respect, and unity.
        </p>
        <button
          onClick={() => setActiveTab("family")}
          className="text-xs font-bold text-primary-blue hover:text-accent-gold flex items-center gap-1 transition-colors duration-200 cursor-pointer"
        >
          View Family Details &rarr;
        </button>
      </motion.div>


    </motion.div>
  );
}
