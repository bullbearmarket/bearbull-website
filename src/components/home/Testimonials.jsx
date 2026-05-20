import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Alex Thompson",
    role: "Quantitative Trader",
    content: "The execution speed in BearBull is the closest I've seen to live exchange environments. It's the perfect place to test high-frequency strategies without risk.",
    avatar: "https://i.pravatar.cc/150?u=alex",
    rating: 5
  },
  {
    name: "Sarah Chen",
    role: "Crypto Influencer",
    content: "I recommend BearBull to all my followers. The UI is incredibly clean, and the monthly rewards actually make people take the simulation seriously.",
    avatar: "https://i.pravatar.cc/150?u=sarah",
    rating: 5
  },
  {
    name: "Marcus Miller",
    role: "Beginner Investor",
    content: "The Risk Calculator changed how I look at markets. I stopped 'gambling' and started trading. Best educational tool in the crypto space.",
    avatar: "https://i.pravatar.cc/150?u=marcus",
    rating: 5
  }
];

const Testimonials = () => {
  return (
    <section className="section-padding overflow-hidden">
      <div className="text-center mb-20">
        <h2 className="text-4xl lg:text-5xl font-black text-[#0a0a0f] mb-6">Trusted by 50,000+ Traders.</h2>
        <p className="text-[#64748b] text-lg max-w-2xl mx-auto">See why traders from around the world choose BearBull to master the markets.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((t, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="p-10 rounded-[2.5rem] bg-[#f8f9fa] border border-gray-100 hover:bg-white hover:shadow-premium transition-all duration-500 group"
          >
            <div className="flex gap-1 mb-6">
              {[...Array(t.rating)].map((_, index) => (
                <Star key={index} className="w-4 h-4 fill-[#ffd700] text-[#ffd700]" />
              ))}
            </div>
            <div className="relative">
              <Quote className="absolute -top-4 -left-4 w-12 h-12 text-[#00ff88]/10" />
              <p className="relative z-10 text-[#0a0a0f] text-lg leading-relaxed mb-8 font-medium">
                "{t.content}"
              </p>
            </div>
            <div className="flex items-center gap-4">
              <img 
                src={t.avatar} 
                alt={t.name} 
                className="w-12 h-12 rounded-full border-2 border-white shadow-sm grayscale group-hover:grayscale-0 transition-all duration-500" 
              />
              <div>
                <h4 className="font-bold text-[#0a0a0f]">{t.name}</h4>
                <p className="text-xs text-[#64748b] font-bold uppercase tracking-widest">{t.role}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
