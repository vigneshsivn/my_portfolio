"use client";

import { motion } from "framer-motion";
import { Sparkles, Milestone, MapPin, Globe } from "lucide-react";

export default function Personal() {
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
      className="grid grid-cols-1 md:grid-cols-2 gap-6"
    >
      {/* Astro & Personal Particulars */}
      <motion.div variants={itemVariants} className="fb-card">
        <h3 className="font-serif text-lg font-bold text-primary-blue flex items-center gap-3 border-b border-card-border pb-3 mb-4">
          <Sparkles className="w-5 h-5 text-secondary-blue" />
          Personal & Birth Particulars
        </h3>
        
        <div className="space-y-3.5 text-xs md:text-sm">
          <div className="flex justify-between items-center py-2 border-b border-card-border/60">
            <span className="text-text-secondary">Full Name</span>
            <span className="font-semibold text-fb-text">K. Vignesh</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-card-border/60">
            <span className="text-text-secondary">Date of Birth</span>
            <span className="font-semibold text-fb-text">November 2, 1996 (02/11/1996)</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-card-border/60">
            <span className="text-text-secondary">Age</span>
            <span className="font-semibold text-fb-text">29 Years</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-card-border/60">
            <span className="text-text-secondary">Religion</span>
            <span className="font-semibold text-fb-text">Hindu</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-card-border/60">
            <span className="text-text-secondary">Caste</span>
            <span className="font-semibold text-fb-text">Raju</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-text-secondary">Mother Tongue</span>
            <span className="font-semibold text-fb-text">Telugu</span>
          </div>
        </div>
      </motion.div>

      {/* Physical & Location Particulars */}
      <motion.div variants={itemVariants} className="fb-card">
        <h3 className="font-serif text-lg font-bold text-primary-blue flex items-center gap-3 border-b border-card-border pb-3 mb-4">
          <Milestone className="w-5 h-5 text-secondary-blue" />
          Physical & Location particulars
        </h3>
        
        <div className="space-y-3.5 text-xs md:text-sm">
          <div className="flex justify-between items-center py-2 border-b border-card-border/60">
            <span className="text-text-secondary">Height</span>
            <span className="font-semibold text-fb-text">168 cm (5'6")</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-card-border/60">
            <span className="text-text-secondary">Marital Status</span>
            <span className="font-semibold text-fb-text">Unmarried</span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-card-border/60">
            <span className="text-text-secondary">Current Location</span>
            <span className="font-semibold text-fb-text flex items-center gap-1.5">
              <MapPin className="w-4 h-4 text-primary-blue" />
              Chennai, Tamil Nadu
            </span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-card-border/60">
            <span className="text-text-secondary">Native Place</span>
            <span className="font-semibold text-fb-text flex items-center gap-1.5">
              <Globe className="w-4 h-4 text-primary-blue" />
              Karur, Tamil Nadu
            </span>
          </div>
          <div className="flex justify-between items-center py-2 border-b border-card-border/60">
            <span className="text-text-secondary">Languages Known</span>
            <span className="font-semibold text-fb-text">Tamil, English</span>
          </div>
          <div className="flex justify-between items-center py-2">
            <span className="text-text-secondary">Lifestyles</span>
            <span className="font-semibold text-fb-text">Teetotaler</span>
          </div>
        </div>

        {/* Embedded Small Map */}
        <div className="mt-5 pt-4 border-t border-card-border/60">
          <a 
            href="https://www.google.com/maps/dir/?api=1&destination=11.067430,78.012849"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full h-28 rounded-xl overflow-hidden border border-card-border relative bg-fb-bg/30 group cursor-pointer"
          >
            <iframe
              src="https://maps.google.com/maps?q=11.067430,78.012849&z=12&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={false}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 z-0 opacity-80 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
            ></iframe>
            <div className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/20">
              <span className="bg-primary-blue text-white px-3 py-1.5 rounded-full font-bold text-xs shadow-lg flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" /> Get Directions
              </span>
            </div>
          </a>
        </div>
      </motion.div>

    </motion.div>
  );
}
