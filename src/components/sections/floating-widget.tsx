"use client";

import React from "react";
import Image from "next/image";

/**
 * FloatingWidget Component
 * Clones the promotional widget in the bottom-right corner.
 * Targets: Template statistics, designer count, "Remix" and "See all templates" buttons.
 */
const FloatingWidget = () => {
  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3 pointer-events-none">
      {/* Floating Panel Container */}
      <div className="pointer-events-auto bg-black rounded-[24px] p-4 w-[280px] shadow-2xl flex flex-col gap-4 border border-[#ffffff1a]">
        
        {/* Header Section: Logo & Count */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-5 h-5 relative flex items-center justify-center">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5e93e89c-73c2-445b-b7fc-ef2ea4a51327-soonix-framer-website/assets/svgs/GprGteIPH00Jsm7vk0gDIa0mg-4.svg"
                alt="Temlis Logo"
                width={59}
                height={20}
                className="object-contain"
              />
            </div>
            <span className="text-[12px] font-medium text-white/90">130+ Premium Templates</span>
          </div>
          
          {/* Tech/Platform Icons Floating in the top right corner of the widget or separately */}
          <div className="absolute -top-4 -right-2 flex items-center bg-white rounded-full px-2 py-1 shadow-md border border-[#E5E5E5] gap-1.5">
             <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5e93e89c-73c2-445b-b7fc-ef2ea4a51327-soonix-framer-website/assets/svgs/kll8hkXQaWFuZYA2rIcBFiR0ImM-1.svg" width={14} height={14} alt="icon" />
             <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5e93e89c-73c2-445b-b7fc-ef2ea4a51327-soonix-framer-website/assets/svgs/Rpk84Ki0mEv6Xoj80Pd8oTIwU-2.svg" width={18} height={14} alt="icon" />
             <Image src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5e93e89c-73c2-445b-b7fc-ef2ea4a51327-soonix-framer-website/assets/svgs/01KHeI91D6cKFGgIXy8SlXVTnI-3.svg" width={14} height={14} alt="icon" />
          </div>
        </div>

        {/* Buttons Row */}
        <div className="grid grid-cols-2 gap-2">
          <button className="h-10 px-4 rounded-xl border border-white/20 text-white text-[14px] font-semibold hover:bg-white/10 transition-colors flex items-center justify-center">
            Remix
          </button>
          <a 
            href="https://www.temlis.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="h-10 px-3 rounded-xl bg-[#D9FD02] text-black text-[14px] font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-1"
          >
            <span>See all templates</span>
            <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.5 8.5L8.5 3.5M8.5 3.5H4.5M8.5 3.5V7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>

        {/* Footer Statistics */}
        <div className="flex items-center gap-3 pt-1 border-t border-white/10">
          <div className="flex -space-x-2">
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5e93e89c-73c2-445b-b7fc-ef2ea4a51327-soonix-framer-website/assets/images/q9rRMouJmvHMJzJbHfjQkcGBgM-3.png" 
              width={32} height={32} 
              className="rounded-full border-2 border-black" 
              alt="designer"
            />
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5e93e89c-73c2-445b-b7fc-ef2ea4a51327-soonix-framer-website/assets/images/AuZj4aywhElPd3WsS8760yQF8I-4.png" 
              width={32} height={32} 
              className="rounded-full border-2 border-black" 
              alt="designer"
            />
            <Image 
              src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5e93e89c-73c2-445b-b7fc-ef2ea4a51327-soonix-framer-website/assets/images/ZuKs43eoIc03K5aEZZwl774o-5.png" 
              width={32} height={32} 
              className="rounded-full border-2 border-black" 
              alt="designer"
            />
          </div>
          <div className="flex flex-col">
            <div className="flex text-[#D9FD02]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="10" height="10" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                </svg>
              ))}
            </div>
            <span className="text-[11px] text-white/50 leading-tight">1,540+ happy designers</span>
          </div>
        </div>
      </div>

      {/* Made in Framer Badge */}
      <div className="pointer-events-auto bg-white rounded-full px-4 py-2 flex items-center gap-2 shadow-sm border border-[#E5E5E5] hover:bg-[#F5F5F5] transition-colors cursor-pointer group">
        <svg width="12" height="18" viewBox="0 0 12 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0 0H12V6H6L0 0Z" fill="black"/>
          <path d="M0 6H6L12 12H0V6Z" fill="black"/>
          <path d="M0 12H6V18L0 12Z" fill="black"/>
        </svg>
        <span className="text-[13px] font-semibold text-black">Made in Framer</span>
      </div>
    </div>
  );
};

export default FloatingWidget;