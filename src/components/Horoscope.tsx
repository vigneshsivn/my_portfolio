"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, ZoomIn, ZoomOut, Download, Printer, Maximize2, Eye, X } from "lucide-react";

export default function Horoscope() {
  const [zoom, setZoom] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const viewerRef = useRef<HTMLDivElement>(null);

  const zoomIn = () => setZoom((prev) => Math.min(prev + 0.2, 2.5));
  const zoomOut = () => setZoom((prev) => Math.max(prev - 0.2, 0.6));
  
  const toggleFullscreen = () => {
    if (!viewerRef.current) return;
    if (!document.fullscreenElement) {
      viewerRef.current.requestFullscreen().catch((err) => {
        console.error("Error enabling fullscreen", err);
      });
    } else {
      document.exitFullscreen();
    }
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fb-card">
      
      {/* Title & Toolbar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-card-border pb-4 mb-6 gap-4">
        <h3 className="font-serif text-lg font-bold text-primary-blue flex items-center gap-3">
          <Sparkles className="w-5 h-5 text-secondary-blue" />
          Horoscope / Jathagam
        </h3>

        {/* Action Toolbar */}
        <div className="flex items-center flex-wrap gap-1 bg-fb-bg border border-card-border p-1 rounded-xl shadow-inner no-print">
          <button
            onClick={() => setIsOpen(true)}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-primary-blue hover:text-white text-text-secondary transition-all cursor-pointer"
            title="Expand Fullscreen Modal"
          >
            <Eye className="w-3.5 h-3.5" />
            <span>View</span>
          </button>
          <button
            onClick={zoomIn}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-primary-blue hover:text-white text-text-secondary transition-all cursor-pointer"
            title="Zoom In"
          >
            <ZoomIn className="w-3.5 h-3.5" />
            <span>Zoom +</span>
          </button>
          <button
            onClick={zoomOut}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-primary-blue hover:text-white text-text-secondary transition-all cursor-pointer"
            title="Zoom Out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
            <span>Zoom -</span>
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-primary-blue hover:text-white text-text-secondary transition-all cursor-pointer"
            title="Print Horoscope"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print</span>
          </button>
          <a
            href="/Horoscope.jpeg"
            download="K_Vignesh_Horoscope.jpeg"
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-primary-blue hover:text-white text-text-secondary transition-all text-decoration-none cursor-pointer"
            title="Download Jadhagam File"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </a>
          <button
            onClick={toggleFullscreen}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold hover:bg-primary-blue hover:text-white text-text-secondary transition-all cursor-pointer"
            title="Toggle Viewport Fullscreen"
          >
            <Maximize2 className="w-3.5 h-3.5" />
            <span>Fullscreen</span>
          </button>
        </div>
      </div>

      {/* Document Viewer Frame */}
      <div
        ref={viewerRef}
        className="border border-card-border rounded-xl bg-black/5 overflow-hidden relative h-[450px] flex items-center justify-center"
      >
        <div className="w-full h-full overflow-auto flex items-center justify-center p-4">
          <img
            src="/Horoscope.jpeg"
            alt="K. Vignesh Horoscope Chart"
            style={{ transform: `scale(${zoom})` }}
            className="max-w-full max-h-full object-contain transition-transform duration-200 ease-out origin-center shadow-md rounded"
          />
        </div>
      </div>

      {/* Fullscreen Expand Dialog */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
            className="fixed inset-0 z-[10000] bg-black/95 backdrop-blur-md flex items-center justify-center p-4"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 w-11 h-11 rounded-full bg-white/5 border border-white/10 hover:bg-primary-blue hover:text-white text-white flex items-center justify-center transition-all duration-300 cursor-pointer z-50 shadow-md"
              title="Close Fullscreen View"
            >
              <X className="w-5 h-5" />
            </button>
            <div className="w-[95%] h-[90vh] overflow-auto flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
              <img
                src="/Horoscope.jpeg"
                alt="Horoscope Full view"
                className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
