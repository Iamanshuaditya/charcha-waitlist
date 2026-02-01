import React from 'react';

const ForCreators = () => {
    return (
        <section id="creators" className="py-24 bg-[#1A1A2E] text-white">
            <div className="container max-w-[1200px] mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-16">
                    <div className="flex-1">
                        <div className="inline-block px-4 py-1.5 rounded-full bg-[#FF9933]/20 border border-[#FF9933]/50 text-[#FF9933] font-medium text-sm mb-6">
                            Creators First
                        </div>
                        <h2 className="text-[48px] md:text-[64px] font-display font-bold leading-[1.1] mb-8">
                            Keep 90% of <br /> your revenue.
                        </h2>
                        <p className="text-gray-300 text-lg md:text-xl leading-relaxed mb-8 max-w-[500px]">
                            We believe the person holding the camera adds the most value. That’s why our model is flipped to serve you, not the platform.
                        </p>

                        <ul className="flex flex-col gap-4">
                            {[
                                "Transparent algorithms",
                                "Direct fan subscriptions",
                                "Brand deal support provided"
                            ].map((item, i) => (
                                <li key={i} className="flex items-center gap-3 text-lg font-medium">
                                    <span className="w-6 h-6 rounded-full bg-[#3730A3] flex items-center justify-center text-xs">✓</span>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="flex-1 w-full relative">
                        <div className="relative z-10 grid grid-cols-2 gap-4">
                            <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] backdrop-blur-sm">
                                <div className="text-[32px] font-bold text-[#FF9933] mb-1">90%</div>
                                <div className="text-sm text-gray-400">Revenue Share</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] backdrop-blur-sm translate-y-8">
                                <div className="text-[32px] font-bold text-[#A78BFA] mb-1">0%</div>
                                <div className="text-sm text-gray-400">Hidden Fees</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] backdrop-blur-sm">
                                <div className="text-[32px] font-bold text-white mb-1">24/7</div>
                                <div className="text-sm text-gray-400">Creator Support</div>
                            </div>
                            <div className="bg-white/5 border border-white/10 p-6 rounded-[24px] backdrop-blur-sm translate-y-8">
                                <div className="text-[32px] font-bold text-[#6EE7B7] mb-1">Day 1</div>
                                <div className="text-sm text-gray-400">Monetization</div>
                            </div>
                        </div>
                        {/* Glow effect behind grid */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#3730A3] opacity-30 blur-[80px] -z-0" />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ForCreators;
