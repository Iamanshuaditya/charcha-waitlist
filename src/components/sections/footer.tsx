import React from 'react';
import { Twitter, Instagram, Linkedin, Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#FAFAFA] border-t border-[#E5E5E5] py-[60px] px-6">
      <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row items-center justify-between gap-8">

        {/* Brand & Copy */}
        <div className="flex flex-col items-center md:items-start gap-4">
          <span className="text-[24px] font-display font-bold text-[#1A1A2E]">Chacha</span>
          <p className="text-[#666666] text-sm flex items-center gap-1">
            Built with <Heart size={14} className="fill-red-500 text-red-500" /> in India for the world.
          </p>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-6">
          <a href="#" className="p-3 bg-white border border-[#E5E5E5] rounded-full text-[#1A1A2E] hover:border-[#3730A3] hover:text-[#3730A3] transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="p-3 bg-white border border-[#E5E5E5] rounded-full text-[#1A1A2E] hover:border-[#3730A3] hover:text-[#3730A3] transition-colors">
            <Instagram size={20} />
          </a>
          <a href="#" className="p-3 bg-white border border-[#E5E5E5] rounded-full text-[#1A1A2E] hover:border-[#3730A3] hover:text-[#3730A3] transition-colors">
            <Linkedin size={20} />
          </a>
        </div>
      </div>

      <div className="max-w-[1200px] mx-auto mt-12 pt-8 border-t border-[#E5E5E5] w-full flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-[#999999]">
        <p className="text-[#666666]">&copy; 2026 Chacha Media Pvt Ltd.</p>
        <div className="flex gap-6">
          <a href="#" className="hover:text-[#1A1A2E]">Privacy Policy</a>
          <a href="#" className="hover:text-[#1A1A2E]">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;