import React from 'react';

const benefits = [
    {
        title: "Built for Indian Creators",
        description: "We don't just translate; we understand. From regional nuances to monetization models that work in Bharat, Chacha is built for you.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#FF9933]">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                <path d="M12 8v4" />
                <path d="M12 16h.01" />
            </svg>
        )
    },
    {
        title: "No Noise, More Signal",
        description: "Tired of doom-scrolling? Our feed is designed to highlight quality, storytelling, and genuine talent over clickbait.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#3730A3]">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                <circle cx="12" cy="12" r="4" />
            </svg>
        )
    },
    {
        title: "Community First",
        description: "Don't just broadcast—connect. Chacha gives you tools to build real relationships with your audience, not just view counts.",
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-[#FF9933]">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
        )
    }
];

const WhyChacha = () => {
    return (
        <section id="why-chacha" className="py-24 px-6 bg-[#FFFFFF]">
            <div className="max-w-[1200px] mx-auto">
                <div className="text-center mb-16">
                    <h2 className="text-[40px] md:text-[48px] font-display font-medium text-[#1A1A2E] mb-4">
                        Why choose <span className="text-[#3730A3]">Chacha</span>?
                    </h2>
                    <p className="text-[18px] text-[#6B7280] max-w-[600px] mx-auto">
                        Because the world doesn&apos;t need another generic platform. It needs a home.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {benefits.map((item, index) => (
                        <div key={index} className="bg-[#FDFBF7] p-8 rounded-[32px] border border-[#E0E7FF] hover:border-[#FF9933] transition-all duration-300 hover:shadow-lg group">
                            <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                {item.icon}
                            </div>
                            <h3 className="text-[24px] font-display font-medium text-[#1A1A2E] mb-4">
                                {item.title}
                            </h3>
                            <p className="text-[#6B7280] leading-[1.6]">
                                {item.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChacha;
