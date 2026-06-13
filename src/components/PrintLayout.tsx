"use client";

import { Phone, MapPin } from "lucide-react";

export default function PrintLayout() {
  return (
    <div id="print-biodata-layout" className="hidden print:block max-w-[800px] mx-auto p-12 bg-white text-black font-serif">
      
      {/* Header section */}
      <div className="text-center border-b-2 border-black pb-6 mb-8">
        <h1 className="text-3xl font-bold uppercase tracking-wider">Marriage Biodata</h1>
        <h2 className="text-xl font-semibold mt-2">K. Vignesh</h2>
        <p className="text-sm italic mt-1">Senior Software Developer | M.Sc. Computer Science</p>
      </div>

      {/* Main Grid: Two columns */}
      <div className="grid grid-cols-2 gap-8 mb-8">
        
        {/* Column 1: Personal particulars */}
        <div>
          <h3 className="text-lg font-bold border-b border-black pb-1 mb-4 uppercase">Personal Profile</h3>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-gray-100"><td className="py-2 font-semibold pr-4">Full Name:</td><td className="py-2">K. Vignesh</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 font-semibold pr-4">Age:</td><td className="py-2">29 Years</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 font-semibold pr-4">Date of Birth:</td><td className="py-2">November 2, 1996</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 font-semibold pr-4">Height:</td><td className="py-2">168 cm (5'6")</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 font-semibold pr-4">Marital Status:</td><td className="py-2">Unmarried</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 font-semibold pr-4">Religion:</td><td className="py-2">Hindu</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 font-semibold pr-4">Caste:</td><td className="py-2">Raju</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 font-semibold pr-4">Mother Tongue:</td><td className="py-2">Telugu</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 font-semibold pr-4">Languages Spoken:</td><td className="py-2">Tamil, English</td></tr>
              <tr><td className="py-2 font-semibold pr-4">Native Place:</td><td className="py-2">Karur, Tamil Nadu</td></tr>
            </tbody>
          </table>
        </div>

        {/* Column 2: Education, Career */}
        <div>
          <h3 className="text-lg font-bold border-b border-black pb-1 mb-4 uppercase">Academic & Professional</h3>
          <table className="w-full text-sm">
            <tbody>
              <tr className="border-b border-gray-100"><td className="py-2 font-semibold pr-4">Education:</td><td className="py-2 font-medium">M.Sc. in Computer Science</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 font-semibold pr-4">Designation:</td><td className="py-2">Senior Software Developer</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 font-semibold pr-4">Company:</td><td className="py-2">Accenture Services Pvt. Ltd.</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 font-semibold pr-4">Location:</td><td className="py-2">Chennai, Tamil Nadu</td></tr>
              <tr className="border-b border-gray-100"><td className="py-2 font-semibold pr-4">Annual Package:</td><td className="py-2">₹10 LPA</td></tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Section 3: Family Profile */}
      <div className="mb-8 pt-8 border-t border-gray-300">
        <h3 className="text-lg font-bold border-b border-black pb-1 mb-4 uppercase">Family Particulars</h3>
        <table className="w-full text-sm">
          <tbody>
            <tr className="border-b border-gray-100"><td className="py-2.5 font-semibold pr-4 w-1/3">Father's Name:</td><td className="py-2.5">Kandasamy</td></tr>
            <tr className="border-b border-gray-100"><td className="py-2.5 font-semibold pr-4 w-1/3">Mother's Name:</td><td className="py-2.5">Kokila</td></tr>
            <tr><td className="py-2.5 font-semibold pr-4 w-1/3">Siblings:</td><td className="py-2.5">One Younger Brother</td></tr>
          </tbody>
        </table>
      </div>

      {/* Section 4: Expectations */}
      <div className="mb-8">
        <h3 className="text-lg font-bold border-b border-black pb-1 mb-4 uppercase">Partner Expectations</h3>
        <p className="text-sm leading-relaxed italic text-gray-800">
          Looking for a well-educated, respectful, family-oriented life partner who values trust, mutual understanding, commitment, and strong family relationships. Someone who believes in supporting each other's personal and professional growth while building a happy and harmonious family life.
        </p>
      </div>

      {/* Section 5: Contacts */}
      <div className="pt-6 border-t-2 border-black">
        <h3 className="text-lg font-bold pb-2 mb-4 uppercase text-center">Contact Information</h3>
        <div className="flex justify-around text-sm">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4 text-black" />
            <span>+91 99425 74158 (Father - Kandasamy)</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4 text-black" />
            <span>Chennai / Karur, Tamil Nadu</span>
          </div>
        </div>
      </div>
    </div>
  );
}
