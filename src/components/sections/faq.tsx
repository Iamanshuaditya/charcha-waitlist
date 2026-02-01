"use client";

import React, { useState } from "react";
import { Plus, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface FAQItem {
  id: string;
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    id: "what-is-soonix",
    question: "What is Soonix?",
    answer: "Soonix is a premium Framer template by Temlis that helps you launch a clean, high-converting waitlist page. It’s designed to grow your email list and build momentum before your product goes live.",
  },
  {
    id: "whats-included",
    question: "What’s included in this template?",
    answer: "Soonix comes packed with 15+ components, custom code overrides, a thank you page, and a 404 page. All built to help you create a smooth and engaging waitlist experience.",
  },
  {
    id: "how-to-customize",
    question: "How do I customize this template?",
    answer: "Customizing Soonix is easy with Framer’s intuitive interface. You can update the layout, tweak the styles, add code overrides, and match it to your brand without hassle.",
  },
  {
    id: "support-available",
    question: "Is support available?",
    answer: "Yes! For help, reach out to the Temlis team at help@temlis.com.",
  },
  {
    id: "cost",
    question: "How much will this cost?",
    answer: "This template is completely free. Enjoy it.",
  },
];

const FAQAccordionItem = ({
  item,
  isOpen,
  onClick,
}: {
  item: FAQItem;
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <div
      className={cn(
        "group cursor-pointer overflow-hidden transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] rounded-[24px] bg-[#F0F0F0] border border-transparent hover:border-[#E5E5E5]",
        isOpen ? "pb-6" : "pb-0"
      )}
      onClick={onClick}
    >
      <div className="flex items-center justify-between px-6 py-6 md:px-8">
        <h3 className="text-[20px] font-medium leading-[1.4] tracking-[-0.01em] text-[#1A1A1A] pr-4">
          {item.question}
        </h3>
        <div
          className={cn(
            "flex h-8 w-8 min-w-[32px] items-center justify-center rounded-full transition-all duration-300",
            isOpen ? "bg-[#1A1A1A] text-white rotate-0" : "bg-[#1A1A1A] text-white"
          )}
        >
          {isOpen ? (
            <X size={16} strokeWidth={2.5} />
          ) : (
            <Plus size={16} strokeWidth={2.5} />
          )}
        </div>
      </div>
      <div
        className={cn(
          "grid transition-all duration-400 ease-[cubic-bezier(0.4,0,0.2,1)] px-6 md:px-8",
          isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        )}
      >
        <div className="overflow-hidden">
          <p className="text-[18px] leading-[1.6] text-[#666666] tracking-[-0.01em]">
            {item.answer}
          </p>
        </div>
      </div>
    </div>
  );
};

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("what-is-soonix");

  const toggleAccordion = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  return (
    <section className="w-full flex justify-center py-[120px] bg-[#F5F5F5]">
      <div className="container max-w-[1248px] px-6">
        <div className="flex flex-col items-center text-center mb-12">
          <h2 className="text-[48px] md:text-[56px] font-medium leading-[1.2] tracking-[-0.03em] text-[#1A1A1A] mb-4">
            Frequently asked questions
          </h2>
          <p className="max-w-[580px] text-[18px] leading-[1.6] text-[#666666] tracking-[-0.01em]">
            Everything you need to know about the Soonix template. Find answers to
            the most common questions below.
          </p>
        </div>

        <div className="mx-auto max-w-[640px] flex flex-col gap-3">
          {faqData.map((item) => (
            <FAQAccordionItem
              key={item.id}
              item={item}
              isOpen={openId === item.id}
              onClick={() => toggleAccordion(item.id)}
            />
          ))}
        </div>
      </div>
    </section>
  );
}