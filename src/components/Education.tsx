"use client";

import { motion } from "framer-motion";
import { GraduationCap, Award, CheckCircle } from "lucide-react";

export default function Education() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="fb-card"
    >
      <h3 className="font-serif text-lg font-bold text-primary-blue flex items-center gap-3 border-b border-card-border pb-3 mb-6">
        <GraduationCap className="w-5 h-5 text-secondary-blue" />
        Educational Background
      </h3>

      <div className="relative pl-8 border-l-2 border-primary-blue/30 space-y-6 ml-3">
        {/* Post-Graduate Education */}
        <div className="relative">
          {/* Timeline Node */}
          <div className="absolute -left-[41px] top-1.5 w-6 h-6 rounded-full bg-white border-2 border-primary-blue flex items-center justify-center shadow-[0_0_8px_rgba(24,119,242,0.2)]">
            <GraduationCap className="w-3.5 h-3.5 text-primary-blue" />
          </div>
          <div className="bg-fb-bg/30 border border-card-border hover:border-primary-blue/20 rounded-2xl p-5 transition-all duration-300">
            <span className="text-xs font-bold text-primary-blue tracking-wider uppercase">Post-Graduate Degree</span>
            <h4 className="font-serif text-lg font-bold mt-1 text-fb-text">Master of Science (M.Sc) in Computer Science</h4>
          </div>
        </div>
      </div>
      

    </motion.div>
  );
}
