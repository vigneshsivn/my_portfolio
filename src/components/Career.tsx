"use client";

import { motion } from "framer-motion";
import { Briefcase, Award, ShieldAlert, CheckCircle2 } from "lucide-react";

export default function Career() {
  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0, transition: { type: "spring" as const, stiffness: 80 } }
  };

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-100px" }}
      className="grid grid-cols-1 md:grid-cols-3 gap-6"
    >
      {/* Timeline Card */}
      <div className="md:col-span-2">
        <div className="fb-card h-full">
          <h3 className="font-serif text-lg font-bold text-primary-blue flex items-center gap-3 border-b border-card-border pb-3 mb-6">
            <Briefcase className="w-5 h-5 text-secondary-blue" />
            Professional Timeline
          </h3>

          <div className="relative pl-8 border-l-2 border-primary-blue/30 space-y-8 ml-3">
            {/* Accenture Present Position */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-primary-blue flex items-center justify-center shadow-[0_0_8px_rgba(24,119,242,0.2)]">
                <Briefcase className="w-3.5 h-3.5 text-primary-blue" />
              </div>
              <div className="bg-fb-bg/30 border border-card-border hover:border-primary-blue/20 rounded-2xl p-5 transition-all duration-300">
                <span className="text-xs font-bold text-primary-blue tracking-wider uppercase">2024 - Present</span>
                <h4 className="font-serif text-lg font-bold text-fb-text mt-1">Senior Software Developer</h4>
                <span className="text-sm font-semibold text-secondary-blue block mt-0.5">Accenture Services, Chennai</span>
              </div>
            </motion.div>

            {/* Earlier Professional Step */}
            <motion.div variants={itemVariants} className="relative">
              <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-card-border flex items-center justify-center shadow-sm">
                <Briefcase className="w-3 h-3 text-text-secondary" />
              </div>
              <div className="bg-fb-bg/30 border border-card-border hover:border-primary-blue/20 rounded-2xl p-5 transition-all duration-300">
                <span className="text-xs font-bold text-text-secondary tracking-wider uppercase">2021 - 2024</span>
                <h4 className="font-serif text-lg font-bold text-fb-text mt-1">Software Developer</h4>
                <span className="text-sm font-semibold text-text-secondary block mt-0.5">Novac Technology Solutions, Chennai</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Career highlights card */}
      <div className="space-y-6">
        <motion.div variants={itemVariants} className="fb-card">
          <h3 className="font-serif text-lg font-bold text-primary-blue flex items-center gap-3 border-b border-card-border pb-3 mb-4">
            <Award className="w-5 h-5 text-secondary-blue" />
            Salary & Position
          </h3>
          <div className="bg-fb-bg/40 border border-card-border rounded-xl p-5 text-center shadow-inner">
            <span className="text-xs text-text-secondary uppercase tracking-wider block font-bold">Annual Salary</span>
            <span className="font-serif text-3xl font-extrabold text-fb-text block mt-1">₹10 LPA</span>
            <span className="text-xs font-bold text-white bg-primary-blue px-4.5 py-1.5 rounded-full inline-block mt-4 shadow-sm shadow-primary-blue/30">
              Senior Developer (Accenture)
            </span>
          </div>
        </motion.div>


      </div>
    </motion.div>
  );
}
