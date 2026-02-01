import React from 'react';

const EventMode = () => {
    return (
        <section id="event" className="py-24 px-6 bg-gradient-to-br from-[#3730A3] to-[#1A1A2E] text-white overflow-hidden relative">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#FF9933] opacity-20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#D9FD02] opacity-10 rounded-full blur-[80px] translate-y-1/2 -translate-x-1/2" />

            <div className="container max-w-[800px] mx-auto text-center relative z-10">
                <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-medium text-sm mb-6 backdrop-blur-md">
                    📍 Live at Design India 2026
                </div>
                <h2 className="text-[40px] md:text-[56px] font-display font-bold mb-6 leading-tight">
                    You’re seeing <span className="text-[#FF9933]">Chacha</span> first.
                </h2>
                <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-[640px] mx-auto font-light leading-relaxed">
                    Skip the waitlist. Scan the QR code at our booth or sign up below to claim your OG username before the public launch.
                </p>

                <div className="flex flex-col md:flex-row items-center justify-center gap-4">
                    <button className="bg-[#FF9933] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-[#FF8C00] transition-colors shadow-lg shadow-orange-500/20 w-full md:w-auto">
                        Claim Username
                    </button>
                    <button className="bg-transparent text-white border-2 border-white/30 px-8 py-4 rounded-full font-medium text-lg hover:bg-white/10 transition-colors w-full md:w-auto">
                        Meet the Founders
                    </button>
                </div>
            </div>
        </section>
    );
};

export default EventMode;
