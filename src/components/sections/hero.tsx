"use client";

import React from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

import { Sparkles, Ticket } from 'lucide-react';

const HeroSection = () => {
  const [email, setEmail] = React.useState('');
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

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
        {/* Soft Launch Badge */}
        <div className="mb-6 mt-16 bg-white/5 border border-white/10 px-6 py-2 rounded-full inline-flex items-center backdrop-blur-md">
          <p className="text-[14px] font-medium text-white/90 tracking-widest uppercase">
            Soft Launch 2026
          </p>
        </div>

        {/* Headline */}
        <h1 className="mb-6 text-white text-[56px] md:text-[72px] font-semibold leading-[1.05] tracking-[-0.04em] font-display">
          India, meet your <br className="hidden md:block" /> new <span className="text-[#d8c3a5]">video adda</span>.
        </h1>

        {/* Description */}
        <p className="mb-10 text-gray-300 text-lg md:text-xl leading-[1.6] font-normal font-body max-w-[600px]">
          We’re building the future of desi storytelling. No corporate algorithms, just pure creativity. Join the community before we go global.
        </p>

        {/* Waitlist Form */}
        <div className="w-full mb-10 h-[80px] flex justify-center items-center">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                onSubmit={handleSubmit}
                className="relative flex items-center w-full max-w-[480px] group"
              >
                <div className="relative w-full shadow-lg rounded-full overflow-hidden">
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter your email address"
                    className="w-full h-[64px] pl-8 pr-[160px] bg-white/10 border border-white/20 rounded-full text-lg focus:ring-2 focus:ring-[#d8c3a5]/50 focus:border-[#d8c3a5] transition-all outline-none text-white placeholder:text-gray-400 backdrop-blur-md"
                    required
                  />
                  <button
                    type="submit"
                    className="absolute right-2 top-2 bottom-2 px-8 bg-[#d8c3a5] text-[#0f2f2f] text-[16px] font-semibold rounded-full hover:bg-white transition-all btn-transition active:scale-95 whitespace-nowrap flex items-center gap-2"
                  >
                    Join the Party
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ type: "spring", bounce: 0.5 }}
                className="relative group cursor-default"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-[#d8c3a5] to-[#bfa07a] rounded-xl blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
                <div className="relative flex items-center gap-6 px-8 py-4 bg-[#0f2f2f] border border-[#d8c3a5]/50 rounded-xl shadow-2xl">
                  <div className="w-12 h-12 rounded-full bg-[#d8c3a5]/10 flex items-center justify-center border border-[#d8c3a5]">
                    <Ticket className="text-[#d8c3a5] w-6 h-6" />
                  </div>
                  <div className="text-left">
                    <div className="flex items-center gap-2">
                      <h3 className="text-[#d8c3a5] font-bold text-lg">YOU'RE ON THE LIST</h3>
                      <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
                    </div>
                    <p className="text-gray-400 text-sm font-mono">Position: <span className="text-white">#2,401</span></p>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
          <p className="text-[15px] text-gray-400 font-body">
            Join <span className="text-white font-bold">2,400+ creators</span> waiting for the drop
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;