import React from 'react';
import Image from 'next/image';

const HeroSection = () => {
  return (
    <section className="relative flex flex-col items-center justify-start w-full min-h-[600px] pt-[100px] pb-[60px] px-6 text-center overflow-hidden">
      {/* Background Hero Glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[1400px] h-[800px] pointer-events-none z-0 opacity-60 select-none"
        style={{
          background: 'radial-gradient(circle at center, rgba(255, 153, 51, 0.15) 0%, rgba(55, 48, 163, 0.05) 40%, rgba(253, 251, 247, 0) 70%)'
        }}
      />

      <div className="relative z-10 flex flex-col items-center max-w-[800px] w-full mx-auto">
        {/* Chacha Logo Icon / Badge */}
        <div className="mb-8 w-[80px] h-[80px] bg-gradient-to-br from-[#1A1A2E] to-[#3730A3] rounded-[24px] flex items-center justify-center p-4 shadow-lg rotate-3 hover:rotate-6 transition-transform duration-500 ease-out">
          <span className="text-white font-display text-4xl font-bold">C</span>
        </div>

        {/* Soft Launch Badge */}
        <div className="mb-6 bg-[#F3F0FF] border border-[#E0E7FF] px-4 py-1.5 rounded-full inline-flex items-center gap-2">
          <div className="w-2 h-2 bg-[#FF9933] rounded-full animate-pulse"></div>
          <p className="text-[14px] font-medium text-[#3730A3] tracking-wide uppercase">
            Soft Launch @ Design India 2026
          </p>
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-[#1A1A2E] text-[56px] md:text-[72px] font-semibold leading-[1.05] tracking-[-0.04em] font-display">
          India, meet your <br className="hidden md:block" /> new <span className="text-[#FF9933]">video adda</span>.
        </h1>

        {/* Description */}
        <p className="mb-10 text-[#6B7280] text-lg md:text-xl leading-[1.6] font-normal font-body max-w-[600px]">
          We’re building the future of desi storytelling. No corporate algorithms, just pure creativity. Join the community before we go global.
        </p>

        {/* Waitlist Form */}
        <div className="w-full mb-10">
          <form className="relative flex items-center w-full max-w-[480px] mx-auto group">
            <div className="relative w-full shadow-lg rounded-full">
              <input
                type="email"
                placeholder="Enter your email address"
                className="w-full h-[64px] pl-8 pr-[160px] bg-white border border-[#E0E7FF] rounded-full text-lg focus:ring-2 focus:ring-[#3730A3]/20 focus:border-[#3730A3] transition-all outline-none text-[#1A1A2E] placeholder:text-[#9CA3AF]"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 px-8 bg-[#1A1A2E] text-white text-[16px] font-semibold rounded-full hover:bg-[#3730A3] transition-all btn-transition active:scale-95 whitespace-nowrap"
              >
                Join the Party
              </button>
            </div>
          </form>
        </div>

        {/* Social Proof */}
        <div className="flex flex-col items-center gap-2">
          <div className="flex -space-x-3">
            <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1628157588553-5eeea00af15c?auto=format&fit=crop&w=100&h=100"
                alt="Creator"
                width={40} height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=100&h=100"
                alt="Creator"
                width={40} height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1607346256330-dee7af15f7c5?auto=format&fit=crop&w=100&h=100"
                alt="Creator"
                width={40} height={40}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-10 h-10 rounded-full border-2 border-white overflow-hidden relative">
              <Image
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&h=100"
                alt="Creator"
                width={40} height={40}
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <p className="text-[15px] text-[#6B7280] font-body">
            Join <span className="text-[#1A1A2E] font-bold">2,400+ creators</span> waiting for the drop
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;