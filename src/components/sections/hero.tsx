import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-start w-full min-h-[500px] pt-[80px] pb-[40px] px-6 text-center overflow-hidden">
      {/* Background Hero Glow */}
      <div 
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[800px] pointer-events-none z-0 opacity-40 select-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(191, 219, 254, 0.4) 0%, rgba(245, 245, 245, 0) 70%)'
        }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-[600px] w-full mx-auto">
        {/* Soonix Logo Icon */}
        <div className="mb-10 w-[64px] h-[64px] bg-[#1A1A1A] rounded-[16px] flex items-center justify-center p-3.5 shadow-sm">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            className="w-full h-full text-white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 7.5L7 16.5M7 7.5L17 16.5"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M12 3V21M3 12H21"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              className="opacity-20"
            />
            {/* Custom S-shape styled path based on visual reference */}
            <path
              d="M16 8C16 8 15 7 12 7C9 7 8 8.5 8 10C8 11.5 9 12 12 12C15 12 16 12.5 16 14C16 15.5 15 17 12 17C9 17 8 16 8 16"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="hidden" 
            />
            {/* Using a solid representation of the logo based on the black square icon */}
            <rect x="4" y="4" width="16" height="16" rx="4" fill="white" className="mix-blend-difference" />
            <path d="M15 9H9V11H15V13H9V15H15" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          {/* Note: In actual production we'd use the precise SVG from the logo asset, but constructing a clean visual placeholder that captures the 'S' essence */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <span className="text-white font-display text-3xl font-bold">S</span>
          </div>
        </div>

        {/* Headline */}
        <h1 className="mb-5 text-[#1A1A1A] text-[64px] font-medium leading-[1.1] tracking-[-0.04em] font-display">
          Get early access
        </h1>

        {/* Description */}
        <p className="mb-10 text-[#666666] text-lg leading-[1.6] font-normal font-body max-w-[520px]">
          We&rsquo;re getting close. Sign up to get early access to Soonix and start building your viral waitlist.
        </p>

        {/* Waitlist Form */}
        <div className="w-full mb-8">
          <form className="relative flex items-center w-full max-w-[440px] mx-auto group">
            <div className="relative w-full">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full h-[56px] pl-6 pr-[140px] bg-[#EDEDED] border-none rounded-full text-base focus:bg-white focus:ring-2 focus:ring-[#1A1A1A]/10 transition-all outline-none text-[#1A1A1A] placeholder:text-[#666666]/50"
              />
              <button
                type="submit"
                className="absolute right-1.5 top-1.5 bottom-1.5 px-6 bg-[#222222] text-white text-[15px] font-semibold rounded-full hover:bg-black transition-all btn-transition active:scale-95 whitespace-nowrap"
              >
                Join waitlist
              </button>
            </div>
          </form>
        </div>

        {/* Social Proof */}
        <div className="flex items-center gap-3 mb-6">
          <div className="flex -space-x-2.5">
            <div className="w-8 h-8 rounded-full border-2 border-[#F5F5F5] overflow-hidden relative">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5e93e89c-73c2-445b-b7fc-ef2ea4a51327-soonix-framer-website/assets/icons/yDoWRpO7gyZCpc5TLXnstV9qJJ0-1.png" 
                alt="User avatar" 
                width={32} 
                height={32}
                className="object-cover"
              />
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-[#F5F5F5] overflow-hidden relative">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5e93e89c-73c2-445b-b7fc-ef2ea4a51327-soonix-framer-website/assets/icons/p7aVkjuN3JdFpE8soFh8go0lmk-2.png" 
                alt="User avatar" 
                width={32} 
                height={32}
                className="object-cover"
              />
            </div>
            <div className="w-8 h-8 rounded-full border-2 border-[#F5F5F5] overflow-hidden relative">
              <Image 
                src="https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5e93e89c-73c2-445b-b7fc-ef2ea4a51327-soonix-framer-website/assets/icons/rNm2MXvNVhdLoeSvw0ZFaHZo4OU-3.png" 
                alt="User avatar" 
                width={32} 
                height={32}
                className="object-cover"
              />
            </div>
          </div>
          <p className="text-[14px] text-[#666666] font-body">
            Join <span className="text-[#1A1A1A] font-medium">+5,000</span> others on the waitlist
          </p>
        </div>

        {/* Status Text */}
        <div className="bg-white/50 backdrop-blur-sm border border-[#E5E5E5] px-4 py-1.5 rounded-full">
          <p className="text-[14px] font-medium text-[#1A1A1A]">
            Countdown finished!
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;