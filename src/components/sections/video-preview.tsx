import React from 'react';
import Image from 'next/image';

/**
 * VideoPreview Component
 * 
 * Clones the product showcase section which displays a central mockup of a
 * task management mobile app with a play button overlay, set against a soft
 * blue gradient background.
 */
const VideoPreview = () => {
  // Asset URLs from the provided list
  const mockupUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5e93e89c-73c2-445b-b7fc-ef2ea4a51327-soonix-framer-website/assets/images/krv2Q4f6xz87HGT6O8YiC6u8-1.png";
  const gradientBgUrl = "https://slelguoygbfzlpylpxfs.supabase.co/storage/v1/object/public/test-clones/5e93e89c-73c2-445b-b7fc-ef2ea4a51327-soonix-framer-website/assets/images/ad8OvET58gUVazcz0TOTKQDYK0-2.png";

  return (
    <section className="relative w-full overflow-hidden py-[120px] flex items-center justify-center min-h-[700px]">
      {/* Soft Blue Gradient Background Wrapper */}
      <div className="absolute inset-0 z-0 flex items-center justify-center opacity-70 pointer-events-none select-none">
        <div className="relative w-[140%] max-w-[2243px] aspect-[2243/1276]">
          <Image
            src={gradientBgUrl}
            alt="Soft blue gradient background"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Content Container */}
      <div className="container relative z-10 flex flex-col items-center px-6">
        {/* Mockup Container */}
        <div className="relative w-full max-w-[800px] border border-border bg-[#FFFFFF] rounded-[32px] overflow-hidden soft-shadow transition-transform duration-500 hover:scale-[1.01]">
          {/* Main Visual Image (Mobile Mockup on Blue Background) */}
          <div className="relative aspect-[1552/870] w-full">
            <Image
              src={mockupUrl}
              alt="Soonix Task Management Mobile App"
              fill
              className="object-cover"
              sizes="(max-width: 800px) 100vw, 800px"
              priority
            />
          </div>

          {/* Play Button Overlay */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="w-[84px] h-[84px] relative pointer-events-auto cursor-pointer group">
              {/* Button Background with Blur Effect */}
              <div
                className="absolute inset-0 bg-[#1A1A1A]/80 backdrop-blur-md rounded-full transition-all duration-300 group-hover:scale-110 group-hover:bg-[#000000]"
                style={{ boxShadow: '0 4px 20px rgba(0, 0, 0, 0.2)' }}
              />

              {/* Play Icon (Triangle) */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg
                  width="28"
                  height="30"
                  viewBox="0 0 28 30"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="ml-1 transition-transform duration-300 group-hover:translate-x-0.5"
                >
                  <path
                    d="M25.5 13.4019C26.8333 14.1717 26.8333 16.0959 25.5 16.8657L4.5 28.9901C3.16667 29.7599 1.5 28.7977 1.5 27.2582L1.5 3.00947C1.5 1.47002 3.16667 0.507843 4.5 1.27764L25.5 13.4019Z"
                    fill="white"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoPreview;