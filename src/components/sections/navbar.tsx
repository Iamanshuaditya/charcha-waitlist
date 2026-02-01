"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const options = [
    { name: "Option A", href: "#", active: false },
    { name: "Option B", href: "#", active: false },
    { name: "Option C", href: "#", active: true },
  ];

  return (
    <div className="absolute top-0 right-0 left-0 z-50 pointer-events-none">
      <nav className="flex items-center justify-end p-5 md:p-[20px] max-w-[1920px] mx-auto pointer-events-auto">
        <div className="relative">
          {/* Main Dropdown Trigger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`flex items-center justify-between w-[160px] h-[44px] px-4 py-2 bg-[#EFF0F0] rounded-[24px] cursor-pointer transition-all duration-200 border-none focus:outline-none hover:opacity-90 ${
              isOpen ? "rounded-b-none rounded-t-[36px] bg-[#EFF0F0]" : ""
            }`}
            aria-expanded={isOpen}
            aria-haspopup="listbox"
          >
            <span className="text-[16px] leading-[24px] font-[400] text-[#505050] font-body">
              Option
            </span>
            <ChevronDown
              className={`w-5 h-5 text-[#505050] transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {/* Dropdown Menu */}
          {isOpen && (
            <div
              className="absolute top-[44px] right-0 w-[160px] bg-[#EFF0F0] rounded-b-[36px] py-[5px] flex flex-col items-center overflow-hidden z-20"
              role="listbox"
            >
              {options.map((option, index) => (
                <a
                  key={index}
                  href={option.href}
                  className={`flex items-center w-full h-[44px] px-4 py-[10px] text-[16px] leading-[24px] font-body transition-colors duration-200 hover:bg-[#E5E5E5] ${
                    option.active
                      ? "text-[#1A1A1A] font-medium"
                      : "text-[#505050]"
                  }`}
                >
                  <div className="flex items-center justify-start w-full">
                    <p className="m-0">{option.name}</p>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;