"use client";

import { Phone, MessageSquare } from "lucide-react";

export default function Contact() {
  const whatsappMessage = encodeURIComponent(
    "Hello, I am contacting regarding the marriage profile of K. Vignesh."
  );
  const whatsappUrl = `https://wa.me/919942574158?text=${whatsappMessage}`;

  return (
    <div className="fb-card">
      <h3 className="font-serif text-lg font-bold text-primary-blue flex items-center gap-3 border-b border-card-border pb-3 mb-6">
        <Phone className="w-5 h-5 text-secondary-blue" />
        Contact Details
      </h3>
      
      <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-6">
        Matrimonial discussions and verification details are managed by Vignesh's father. You are welcome to call or message directly using the working links below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {/* Call button */}
        <a
          href="tel:+919942574158"
          className="flex items-center gap-4 p-5 rounded-xl border border-card-border hover:border-primary-blue hover:bg-primary-blue/5 transition-all duration-300 group text-decoration-none cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full bg-primary-blue flex items-center justify-center shadow-md shadow-primary-blue/20 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
            <Phone className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-[10px] text-text-secondary uppercase font-bold tracking-wider block">Contact Person: Father</span>
            <span className="font-bold text-base text-fb-text block mt-0.5">Kandasamy</span>
            <span className="text-xs font-semibold text-primary-blue block mt-0.5">+91 99425 74158</span>
          </div>
        </a>

        {/* WhatsApp button */}
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-4 p-5 rounded-xl border border-card-border hover:border-[#2ed573] hover:bg-[#2ed573]/5 transition-all duration-300 group text-decoration-none cursor-pointer"
        >
          <div className="w-12 h-12 rounded-full bg-[#2ed573] flex items-center justify-center shadow-md shadow-[#2ed573]/20 group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
            <MessageSquare className="w-5 h-5 text-white" />
          </div>
          <div>
            <span className="text-[10px] text-text-secondary uppercase font-bold tracking-wider block">WhatsApp Direct Link</span>
            <span className="font-bold text-base text-fb-text block mt-0.5">Start Conversation</span>
            <span className="text-xs font-semibold text-[#2ed573] block mt-0.5">Instant Chat Link</span>
          </div>
        </a>
      </div>
    </div>
  );
}
