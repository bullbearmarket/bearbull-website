import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, HelpCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

const FAQItem = ({ question, answer, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-100 last:border-0">
      <button
        onClick={onClick}
        className="w-full py-8 flex items-center justify-between text-left group transition-all"
      >
        <span className={cn(
          "text-xl font-bold transition-colors duration-300",
          isOpen ? "text-[#00ff88]" : "text-[#0a0a0f] group-hover:text-[#00ff88]"
        )}>
          {question}
        </span>
        <div className={cn(
          "flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300",
          isOpen ? "bg-[#0a0a0f] border-[#0a0a0f] text-[#00ff88] rotate-0" : "bg-transparent border-gray-200 text-[#0a0a0f] rotate-90"
        )}>
          {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-[#64748b] text-lg leading-relaxed max-w-3xl">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "How accurate is the simulated market data?",
      answer: "We use institutional-grade API feeds from major global exchanges like Binance and Coinbase. The prices you see on BearBull are synced in real-time, ensuring that your simulated trades reflect actual market conditions with millisecond precision."
    },
    {
      question: "Are the monthly rewards real cash?",
      answer: "No. To maintain the educational and risk-free nature of our platform, rewards are distributed exclusively as digital gift cards (Amazon, Google Play, etc.). This allows us to reward successful traders without turning the platform into a gambling site."
    },
    {
      question: "Does the monthly reset affect my Premium status?",
      answer: "Not at all. While virtual portfolios and leaderboards reset every month to keep the competition fresh, your Premium (Pro) membership remains active. Your historical data, analytics, and special badges are permanently linked to your account."
    },
    {
      question: "Can I use the Risk Calculator for real-world trading?",
      answer: "Yes. While our calculator is built into the simulator, the mathematical principles it uses—such as position sizing and risk-of-ruin—are the same ones used by professional traders in real markets. Many of our users use it to plan their real portfolios."
    },
    {
      question: "Is BearBull available in my country?",
      answer: "BearBull is a global platform. As long as you have an internet connection and access to the iOS App Store or Google Play Store, you can download the app and start trading. Our rewards are also redeemable in most major global regions."
    }
  ];

  return (
    <section className="section-padding bg-white" id="faq">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-16 h-16 bg-[#f8f9fa] rounded-2xl flex items-center justify-center mx-auto mb-6"
          >
            <HelpCircle className="w-8 h-8 text-[#0a0a0f]" />
          </motion.div>
          <h2 className="text-4xl lg:text-5xl font-black text-[#0a0a0f] mb-6">Frequently Asked Questions</h2>
          <p className="text-[#64748b] text-lg">Everything you need to know about the BearBull experience.</p>
        </div>

        <div className="bg-white rounded-[3rem] border border-gray-100 p-8 lg:p-12 shadow-sm">
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
              isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
            />
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-4 p-6 rounded-3xl bg-[#0a0a0f] text-white">
            <span className="text-sm font-medium">Still have questions?</span>
            <a 
              href="/contact" 
              className="px-6 py-2 bg-[#00ff88] text-[#0a0a0f] rounded-full text-xs font-black uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
