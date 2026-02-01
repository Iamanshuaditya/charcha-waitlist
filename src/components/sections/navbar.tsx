"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <div className="absolute top-0 right-0 left-0 z-50 pointer-events-none">
      <nav className="flex items-center justify-between p-5 md:p-[24px] max-w-[1400px] mx-auto pointer-events-auto">
        {/* Brand Logo */}
        <div className="flex items-center">
          <span className="text-[28px] font-bold text-[#1A1A2E] tracking-tight font-display">
            Chacha
          </span>
        </div>

        {/* Navigation and CTA */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            <a href="#creators" className="text-[#1A1A2E] hover:text-[#FF9933] font-medium transition-colors">Creators</a>
            <a href="#why-chacha" className="text-[#1A1A2E] hover:text-[#FF9933] font-medium transition-colors">Why Chacha</a>
            <a href="#event" className="text-[#1A1A2E] hover:text-[#FF9933] font-medium transition-colors">Event Mode</a>
          </div>

          <button className="px-6 py-2.5 bg-[#1A1A2E] text-white rounded-full font-medium hover:bg-[#3730A3] transition-all soft-shadow">
            Join Waitlist
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;