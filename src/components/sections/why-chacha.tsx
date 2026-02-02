import React from 'react';

const benefits = [
    {
        title: "Built for Bharat",
        description: "We speak your language. Not just literally, but culturally. From regional dialects to local monetization models, Chacha is engineered for the Indian creator economy.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#d8c3a5]">
                <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20" />
            </svg>
        )
    },
    {
        title: "Signal, Not Noise",
        description: "The algorithm is broken. We fixed it. Our feed prioritizes deep storytelling and genuine talent over clickbait and trends. Quality is the only metric.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#d8c3a5]">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
            </svg>
        )
    },
    {
        title: "Empire Building",
        description: "Don't just get views. Build a legacy. Chacha provides the professional tools you need to turn your creativity into a sustainable, high-growth business.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#d8c3a5]">
                <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
            </svg>
        )
    }
];

const WhyChacha = () => {
    return (
        <section id="why-chacha" className="relative py-32 px-6 overflow-hidden">
            {/* Geometric Divider Line */}
            <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />

            <div className="max-w-[1200px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">

                    {/* Left: Sticky Header */}
                    <div className="sticky top-32">
                        <h2 className="text-[56px] md:text-[72px] font-display font-medium text-white leading-[1] mb-8 tracking-tighter">
                            Why <br />
                            <span className="text-[#d8c3a5]">Chacha?</span>
                        </h2>
                        <p className="text-[20px] text-gray-400 max-w-[400px] leading-relaxed font-light">
                            Because the world doesn't need another generic platform. It needs a sanctuary for craft.
                        </p>
                    </div>

                    {/* Right: Benefits List */}
                    <div className="flex flex-col gap-8">
                        {benefits.map((item, index) => (
                            <div key={index} className="group relative bg-white/5 border border-white/10 p-10 backdrop-blur-sm transition-all duration-500 hover:bg-white/10 hover:border-[#d8c3a5]/30">
                                {/* Hover Glow */}
                                <div className="absolute inset-0 bg-gradient-to-br from-[#d8c3a5]/0 via-[#d8c3a5]/0 to-[#d8c3a5]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

                                <div className="relative z-10">
                                    <div className="w-14 h-14 border border-white/20 flex items-center justify-center mb-6 group-hover:border-[#d8c3a5] transition-colors duration-500">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-[28px] font-display font-medium text-white mb-4 group-hover:text-[#d8c3a5] transition-colors">
                                        {item.title}
                                    </h3>
                                    <p className="text-gray-400 leading-[1.7] font-light text-lg">
                                        {item.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default WhyChacha;
