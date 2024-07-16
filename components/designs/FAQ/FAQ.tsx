"use client"

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPlus, FaMinus } from 'react-icons/fa';

type FAQItem = {
  question: string;
  answer: string;
};

const faqs: FAQItem[] = [
  { question: "Is WinZO a safe social gaming platform?", answer: "Yes, WinZO is a safe and secure platform for social gaming." },
  { question: "Can I pay-to-play on WinZO?", answer: "Yes, you can pay-to-play various games on WinZO." },
  { question: "How to deposit?", answer: "You can deposit money through various payment methods including credit/debit cards, UPI, and net banking." },
  { question: "How can a player credit their winnings?", answer: "Players can credit their winnings to their bank account or digital wallets." },
  { question: "Will my winnings get credited immediately?", answer: "Yes, winnings are credited immediately after the game ends." },
  { question: "Is WinZO available for Android as well as iOS devices?", answer: "Yes, WinZO is available for both Android and iOS devices." },
  { question: "How many games and formats are available on WinZO?", answer: "WinZO offers a variety of games and formats, including tournaments and multiplayer games." },
  { question: "Is WinZO a member of the All India Gaming Federation (AIGF), the SRO for online games?", answer: "Yes, WinZO is a member of the All India Gaming Federation (AIGF)." },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      {faqs.map((faq, index) => (
        <div key={index} className="mb-4 border-b pb-2">
          <div
            className="flex justify-between items-center cursor-pointer"
            onClick={() => toggleFAQ(index)}
          >
            <h3 className="text-lg font-semibold">{faq.question}</h3>
            <div className="text-xl">
              {openIndex === index ? <FaMinus /> : <FaPlus />}
            </div>
          </div>
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: openIndex === index ? 1 : 0, height: openIndex === index ? 'auto' : 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <p className="mt-2">{faq.answer}</p>
          </motion.div>
        </div>
      ))}
    </div>
  );
};

export default FAQ;
