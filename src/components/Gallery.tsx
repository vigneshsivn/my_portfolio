"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Image as ImageIcon, ZoomIn, Share2, Download, X, ChevronLeft, ChevronRight, Eye } from "lucide-react";

export default function Gallery() {
  const images = ["/Image_1.jpeg", "/Image_2.jpeg"];
  const [isOpen, setIsOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [shareStatus, setShareStatus] = useState("Share");

  const openLightbox = (index: number) => {
    setCurrentIndex(index);
    setIsOpen(true);
    setIsZoomed(false);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setIsOpen(false);
    setIsZoomed(false);
    document.body.style.overflow = "";
  };

  const nextImage = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setIsZoomed(false);
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Keyboard controls
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
      if (e.key === "Escape") closeLightbox();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const handleShare = async () => {
    const shareUrl = window.location.origin + images[currentIndex];
    if (navigator.share) {
      try {
        await navigator.share({
          title: "K. Vignesh Portrait",
          text: "View photo of K. Vignesh.",
          url: shareUrl
        });
      } catch (err) {
        console.log("Share cancelled or failed", err);
      }
    } else {
      try {
        await navigator.clipboard.writeText(shareUrl);
        setShareStatus("Copied!");
        setTimeout(() => setShareStatus("Share"), 2000);
      } catch (err) {
        console.error("Failed to copy link", err);
      }
    }
  };

  return (
    <div className="fb-card">
      <h3 className="font-serif text-lg font-bold text-primary-blue flex items-center gap-3 border-b border-card-border pb-3 mb-6">
        <ImageIcon className="w-5 h-5 text-secondary-blue" />
        Photo Gallery
      </h3>

      {/* Masonry Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((src, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: idx * 0.1 }}
            onClick={() => openLightbox(idx)}
            className="group relative overflow-hidden rounded-2xl border border-card-border hover:border-primary-blue/30 cursor-pointer shadow-sm aspect-[4/5] bg-fb-bg/20"
          >
            <img
              src={src}
              alt={`Vignesh Gallery Photo ${idx + 1}`}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-102"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-fb-bg/90 backdrop-blur-xs flex flex-col items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <div className="w-12 h-12 rounded-full bg-primary-blue/5 border border-primary-blue/20 flex items-center justify-center">
                <Eye className="w-5 h-5 text-primary-blue" />
              </div>
              <span className="text-xs font-bold uppercase tracking-wider text-primary-blue">Click to Expand</span>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Lightbox Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeLightbox}
            className="fixed inset-0 z-[10000] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 md:p-12"
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:bg-primary-blue hover:text-white hover:border-primary-blue text-white flex items-center justify-center transition-all duration-300 cursor-pointer z-50 shadow-md"
              title="Close Gallery Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Prev Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="absolute left-4 md:left-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-primary-blue hover:text-white hover:border-primary-blue text-white flex items-center justify-center transition-all duration-300 cursor-pointer z-50 shadow-sm"
              title="Previous Photo"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Next Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="absolute right-4 md:right-8 w-12 h-12 rounded-full bg-white/5 border border-white/10 hover:bg-primary-blue hover:text-white hover:border-primary-blue text-white flex items-center justify-center transition-all duration-300 cursor-pointer z-50 shadow-sm"
              title="Next Photo"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Content Frame */}
            <div
              className="relative max-w-[90%] max-h-[75vh] flex items-center justify-center overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              <motion.img
                key={currentIndex}
                initial={{ scale: 0.95, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.95, opacity: 0 }}
                src={images[currentIndex]}
                alt="Expanded View"
                onClick={() => setIsZoomed(!isZoomed)}
                className={`max-w-full max-h-[70vh] object-contain rounded-lg shadow-2xl border border-white/10 cursor-zoom-in transition-transform duration-300 select-none ${
                  isZoomed ? "scale-150 cursor-zoom-out" : ""
                }`}
              />
            </div>

            {/* Controls Toolbar */}
            <div
              onClick={(e) => e.stopPropagation()}
              className="absolute bottom-8 bg-neutral-900/90 border border-white/10 rounded-full px-6 py-2.5 flex items-center gap-6 shadow-2xl z-50"
            >
              <button
                onClick={() => setIsZoomed(!isZoomed)}
                className="text-xs text-neutral-300 hover:text-primary-blue flex items-center gap-2 font-semibold transition-colors duration-200 cursor-pointer"
              >
                <ZoomIn className="w-4 h-4" />
                Zoom
              </button>
              <button
                onClick={handleShare}
                className="text-xs text-neutral-300 hover:text-primary-blue flex items-center gap-2 font-semibold transition-colors duration-200 cursor-pointer"
              >
                <Share2 className="w-4 h-4" />
                {shareStatus}
              </button>
              <a
                href={images[currentIndex]}
                download={`Vignesh_Gallery_${currentIndex + 1}.jpeg`}
                className="text-xs text-neutral-300 hover:text-primary-blue flex items-center gap-2 font-semibold transition-colors duration-200 text-decoration-none cursor-pointer"
              >
                <Download className="w-4 h-4" />
                Download
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
