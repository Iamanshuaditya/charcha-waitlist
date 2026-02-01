import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full bg-[#F5F5F5] py-[80px] flex flex-col items-center justify-center gap-[24px]">
      {/* Navigation Links */}
      <div className="flex items-center justify-center gap-[12px] md:gap-[16px]">
        <a
          href="https://www.temlis.com/webflow-templates"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] md:text-[16px] text-[#666666] font-body hover:text-[#1A1A1A] transition-colors"
        >
          Webflow Templates
        </a>
        <span className="text-[#666666] text-[14px] select-none">·</span>
        <a
          href="https://www.temlis.com/framer-templates"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] md:text-[16px] text-[#666666] font-body hover:text-[#1A1A1A] transition-colors"
        >
          Framer Templates
        </a>
        <span className="text-[#666666] text-[14px] select-none">·</span>
        <a
          href="https://www.temlis.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] md:text-[16px] text-[#666666] font-body hover:text-[#1A1A1A] transition-colors"
        >
          Temlis.com
        </a>
      </div>

      {/* Copyright Notice */}
      <div className="flex items-center justify-center gap-[4px]">
        <span className="text-[14px] md:text-[16px] text-[#666666] font-body">
          © 2025 Soonix by
        </span>
        <a
          href="https://www.temlis.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[14px] md:text-[16px] text-[#1A1A1A] font-semibold font-body hover:opacity-80 transition-opacity"
        >
          Temlis
        </a>
      </div>
    </footer>
  );
};

export default Footer;