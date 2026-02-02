"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  return (
    <div className="absolute top-0 right-0 left-0 z-50 pointer-events-none">
      <nav className="flex items-center justify-between p-5 md:p-[24px] max-w-[1400px] mx-auto pointer-events-auto">
        {/* Brand Logo */}
        <div className="flex items-center">
          <span className="text-[28px] font-bold text-white tracking-tight font-display">
            Chacha
          </span>
        </div>

        {/* Navigation and CTA */}
        <div className="flex items-center gap-6">
          <div className="hidden md:flex items-center gap-6">
            <a href="#creators" className="text-white/80 hover:text-white font-medium transition-colors">Creators</a>
            <a href="#why-chacha" className="text-white/80 hover:text-white font-medium transition-colors">Why Chacha</a>
            <a href="#event" className="text-white/80 hover:text-white font-medium transition-colors">Event Mode</a>
          </div>

          <button className="px-6 py-2.5 bg-white/10 border border-white/20 text-white rounded-full font-medium hover:bg-white/20 transition-all backdrop-blur-md">
            Join Waitlist
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;