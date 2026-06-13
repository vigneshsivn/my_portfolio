"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Phone, MessageSquare, ArrowDown, MapPin, Award, Calendar, GraduationCap, Printer } from "lucide-react";

// Components
import About from "@/components/About";
import Personal from "@/components/Personal";
import Education from "@/components/Education";
import Career from "@/components/Career";
import Family from "@/components/Family";
import Gallery from "@/components/Gallery";
import Horoscope from "@/components/Horoscope";

import Preferences from "@/components/Preferences";
import Contact from "@/components/Contact";
import FloatingActions from "@/components/FloatingActions";
import PrintLayout from "@/components/PrintLayout";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");

  const sections = [
    { id: "home", label: "Home" },
    { id: "about", label: "About" },
    { id: "personal", label: "Personal Details" },
    { id: "education", label: "Education" },
    { id: "professional", label: "Professional" },
    { id: "family", label: "Family" },
    { id: "gallery", label: "Gallery" },
    { id: "horoscope", label: "Horoscope" },

    { id: "contact", label: "Contact" },
  ];

  // Observer to track scrolled section
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px", // Trigger when section occupies the center screen
      threshold: 0
    };

    const handleIntersection = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(handleIntersection, observerOptions);

    sections.forEach(sec => {
      const el = document.getElementById(sec.id);
      if (el) observer.observe(el);
    });

    return () => {
      sections.forEach(sec => {
        const el = document.getElementById(sec.id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // Profile picture right-click & drag protection
  useEffect(() => {
    const profileImg = document.getElementById("hero-sidebar-profile-img");
    if (!profileImg) return;

    const preventDefault = (e: Event) => e.preventDefault();
    profileImg.addEventListener("contextmenu", preventDefault);
    profileImg.addEventListener("dragstart", preventDefault);

    return () => {
      profileImg.removeEventListener("contextmenu", preventDefault);
      profileImg.removeEventListener("dragstart", preventDefault);
    };
  }, []);

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

  const handlePrint = () => {
    window.print();
  };

  return (
    <>
      {/* Sticky Header Navbar */}
      <header className="sticky top-0 z-[999] w-full bg-white/95 dark:bg-[#242526]/95 backdrop-blur-md border-b border-card-border shadow-xs no-print transition-colors duration-300">
        <div className="max-w-[1100px] mx-auto px-4 h-14 flex items-center justify-between">
          {/* Logo / Badge */}
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection("home")}>
            <span className="w-3.5 h-3.5 rounded-full bg-primary-blue shadow-[0_0_8px_#1877F2] animate-pulse" />
            <span className="font-serif font-black text-sm tracking-wider text-primary-blue">K. VIGNESH</span>
          </div>

          {/* Links */}
          <nav className="hidden lg:block">
            <ul className="flex items-center gap-1.5">
              {sections.map(sec => (
                <li key={sec.id}>
                  <button
                    onClick={() => scrollToSection(sec.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all duration-300 cursor-pointer ${
                      activeSection === sec.id
                        ? "text-primary-blue bg-primary-blue/10"
                        : "text-text-secondary hover:text-fb-text hover:bg-fb-bg/50"
                    }`}
                  >
                    {sec.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>

      {/* Main container wrapper */}
      <div className="w-full max-w-[800px] mx-auto px-4 py-8 space-y-12 flex-grow no-print">

        {/* ==========================================
             1. HERO SECTION (HOME)
             ========================================== */}
        <section id="home" className="pt-4 scroll-mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fb-card flex flex-col items-center text-center p-8 md:p-12 relative overflow-hidden group/hero"
          >
            {/* Animated Gradient Orbs */}
            <motion.div 
              animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.4, 0.2], rotate: [0, 90, 0] }}
              transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              className="absolute -top-32 -left-32 w-64 h-64 bg-primary-blue/30 rounded-full blur-[80px] pointer-events-none"
            />
            <motion.div 
              animate={{ scale: [1, 1.5, 1], opacity: [0.1, 0.3, 0.1], rotate: [0, -90, 0] }}
              transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              className="absolute -bottom-32 -right-32 w-80 h-80 bg-secondary-blue/20 rounded-full blur-[80px] pointer-events-none"
            />

            {/* Circular Profile Frame with Rotating Glow */}
            <div className="relative w-44 h-44 mb-8 z-10 perspective-1000">
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full bg-linear-to-tr from-primary-blue via-transparent to-secondary-blue opacity-40 blur-md z-0 group-hover/hero:opacity-100 transition-opacity duration-700"
              />
              <motion.img
                whileHover={{ scale: 1.05, rotateY: 10, rotateX: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
                id="hero-sidebar-profile-img"
                src="/Vicky_Profile.jpeg"
                alt="K. Vignesh Hero Portrait"
                className="w-full h-full rounded-full object-cover border-4 border-white/5 shadow-2xl relative z-10 select-none pointer-events-auto cursor-pointer"
              />
            </div>

            {/* Introduction details */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.6 }}
              className="z-10 w-full"
            >
              <h1 className="font-serif text-4xl md:text-5xl font-black text-fb-text tracking-tight">
                K. Vignesh
              </h1>
              <p className="text-sm font-bold text-primary-blue tracking-widest uppercase mt-3 flex items-center justify-center gap-2">
                <span className="w-8 h-[1px] bg-primary-blue/50" />
                Senior Software Developer
                <span className="w-8 h-[1px] bg-primary-blue/50" />
              </p>
              <span className="text-xs text-text-secondary font-semibold mt-2 flex items-center justify-center gap-1.5">
                Accenture &bull; Chennai, Tamil Nadu
              </span>
            </motion.div>

            <div className="w-full h-[1px] bg-card-border my-8 z-10" />

            {/* Hero Infographics */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.4, duration: 0.6 }}
              className="grid grid-cols-2 sm:grid-cols-4 gap-3 md:gap-4 w-full mb-8 z-10"
            >
              <div className="bg-fb-bg/20 backdrop-blur-md border border-white/5 rounded-2xl p-4 text-center hover:bg-white/5 transition-colors duration-300">
                <Calendar className="w-5 h-5 text-primary-blue mx-auto mb-2 opacity-80" />
                <span className="text-[10px] text-text-secondary uppercase block font-bold tracking-wider">Age</span>
                <span className="font-bold text-sm block text-fb-text mt-1">29 Years</span>
              </div>
              <div className="bg-fb-bg/20 backdrop-blur-md border border-white/5 rounded-2xl p-4 text-center hover:bg-white/5 transition-colors duration-300">
                <GraduationCap className="w-5 h-5 text-primary-blue mx-auto mb-2 opacity-80" />
                <span className="text-[10px] text-text-secondary uppercase block font-bold tracking-wider">Degree</span>
                <span className="font-bold text-sm block text-fb-text mt-1">M.Sc. CS</span>
              </div>
              <div className="bg-fb-bg/20 backdrop-blur-md border border-white/5 rounded-2xl p-4 text-center hover:bg-white/5 transition-colors duration-300">
                <MapPin className="w-5 h-5 text-primary-blue mx-auto mb-2 opacity-80" />
                <span className="text-[10px] text-text-secondary uppercase block font-bold tracking-wider">Native</span>
                <span className="font-bold text-sm block text-fb-text mt-1">Karur, TN</span>
              </div>
              <div className="bg-fb-bg/20 backdrop-blur-md border border-white/5 rounded-2xl p-4 text-center hover:bg-white/5 transition-colors duration-300">
                <Award className="w-5 h-5 text-primary-blue mx-auto mb-2 opacity-80" />
                <span className="text-[10px] text-text-secondary uppercase block font-bold tracking-wider">Income</span>
                <span className="font-bold text-sm block text-fb-text mt-1">₹10 LPA</span>
              </div>
            </motion.div>

            {/* Hero CTAs */}
            <motion.div 
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 w-full z-10"
            >
              <a
                href="tel:+919942574158"
                className="flex-1 py-3.5 rounded-xl bg-linear-to-r from-primary-blue to-secondary-blue text-white text-sm font-bold shadow-[0_0_20px_rgba(29,78,216,0.4)] hover:shadow-[0_0_30px_rgba(29,78,216,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Contact Family
              </a>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 rounded-xl border border-white/10 hover:border-primary-blue/50 bg-white/5 hover:bg-primary-blue/10 text-fb-text hover:text-primary-blue text-sm font-bold backdrop-blur-md transition-all cursor-pointer flex items-center justify-center gap-2"
              >
                <MessageSquare className="w-4 h-4 text-[#2ed573]" />
                WhatsApp Message
              </a>
            </motion.div>

            {/* Scroll Down Trigger */}
            <motion.button
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 1 }}
              onClick={() => scrollToSection("about")}
              className="mt-8 text-xs text-text-secondary hover:text-primary-blue transition-colors duration-200 cursor-pointer flex flex-col items-center gap-2 z-10 border-none bg-transparent group/scroll"
            >
              <span className="uppercase tracking-widest text-[9px] font-bold">Discover More</span>
              <motion.div 
                animate={{ y: [0, 5, 0] }} 
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              >
                <ArrowDown className="w-4 h-4 opacity-50 group-hover/scroll:opacity-100 transition-opacity" />
              </motion.div>
            </motion.button>
          </motion.div>
        </section>

        {/* ==========================================
             2. ABOUT ME SECTION
             ========================================== */}
        <section id="about" className="scroll-mt-20">
          <About />
        </section>

        {/* ==========================================
             3. PERSONAL DETAILS SECTION
             ========================================== */}
        <section id="personal" className="scroll-mt-20">
          <Personal />
        </section>

        {/* ==========================================
             4. EDUCATION SECTION
             ========================================== */}
        <section id="education" className="scroll-mt-20">
          <Education />
        </section>

        {/* ==========================================
             5. PROFESSIONAL DETAILS SECTION
             ========================================== */}
        <section id="professional" className="scroll-mt-20">
          <Career />
        </section>

        {/* ==========================================
             6. FAMILY DETAILS SECTION
             ========================================== */}
        <section id="family" className="scroll-mt-20">
          <Family />
        </section>

        {/* ==========================================
             7. GALLERY SECTION
             ========================================== */}
        <section id="gallery" className="scroll-mt-20">
          <Gallery />
        </section>

        {/* ==========================================
             8. HOROSCOPE SECTION
             ========================================== */}
        <section id="horoscope" className="scroll-mt-20">
          <Horoscope />
        </section>



        {/* ==========================================
             10. PARTNER PREFERENCES SECTION (Extra standard section)
             ========================================== */}
        <section id="preferences" className="scroll-mt-20">
          <Preferences />
        </section>

        {/* ==========================================
             11. CONTACT SECTION
             ========================================== */}
        <section id="contact" className="scroll-mt-20">
          <Contact />
        </section>
        
        {/* Footer branding */}
        <footer className="w-full text-center py-6 border-t border-card-border text-[10px] text-text-secondary tracking-widest no-print uppercase">
          &copy; {new Date().getFullYear()} K. Vignesh Matrimonial Portfolio.
          <button onClick={handlePrint} className="ml-3 text-primary-blue hover:underline bg-transparent border-none cursor-pointer inline-flex items-center gap-1 font-bold">
            <Printer className="w-3 h-3" /> Print PDF
          </button>
        </footer>
      </div>

      {/* Floating Speed Dial bar */}
      <FloatingActions />

      {/* Hidden print layout template */}
      <PrintLayout />
    </>
  );
}
