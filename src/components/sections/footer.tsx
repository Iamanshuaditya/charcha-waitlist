import React from 'react';
import { Twitter, Instagram, Linkedin, ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full pt-[120px] pb-12 px-6 relative overflow-hidden">
      {/* Top Border */}
      <div className="absolute top-0 left-6 right-6 h-[1px] bg-white/10" />

      <div className="max-w-[1400px] mx-auto">
        {/* Main Content */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-24 gap-16">

          {/* Brand Statement */}
          <div className="max-w-[400px]">
            <h3 className="text-white font-display text-2xl mb-6">Chacha.</h3>
            <p className="text-gray-400 font-light leading-relaxed">
              The new home for India's creative class.
              Building the infrastructure for the next generation of storytelling.
            </p>
          </div>

          {/* Navigation Columns */}
          <div className="flex flex-col md:flex-row gap-10 md:gap-32 w-full md:w-auto">
            <div className="grid grid-cols-2 gap-10 md:flex md:gap-32 w-full">
              <div className="flex flex-col gap-6">
                <span className="text-xs uppercase tracking-widest text-[#d8c3a5] font-medium">Platform</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Creators</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Brands</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Events</a>
              </div>
              <div className="flex flex-col gap-6">
                <span className="text-xs uppercase tracking-widest text-[#d8c3a5] font-medium">Company</span>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">About</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Careers</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Press</a>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <span className="text-xs uppercase tracking-widest text-[#d8c3a5] font-medium">Social</span>
              <div className="flex gap-4 md:flex-col md:gap-6">
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="hidden md:inline">Twitter</span> <Twitter size={20} className="md:hidden" /> <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="hidden md:inline">Instagram</span> <Instagram size={20} className="md:hidden" /> <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
                </a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2 group">
                  <span className="hidden md:inline">LinkedIn</span> <Linkedin size={20} className="md:hidden" /> <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity hidden md:block" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Huge Brand Typography */}
        <div className="w-full overflow-hidden mb-16">
          <h1 className="text-[18vw] md:text-[15vw] leading-[0.8] font-display font-bold text-white/5 select-none tracking-tight text-center md:text-left">
            CHACHA
          </h1>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5 text-sm">
          <p className="text-gray-500">
            &copy; 2026 Chacha Media Pvt Ltd. All rights reserved.
          </p>
          <div className="flex gap-8">
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;