import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calculator, Info, ShieldCheck } from 'lucide-react';

/**
 * Premium Risk Calculator Component
 * A functional, institutional-grade trading tool for the Premium and Guide pages.
 * Designed to provide the "Master the Market" feel with luxury UI/UX.
 */
const RiskCalculator = () => {
  const [balance, setBalance] = useState(10000);
  const [riskPercent, setRiskPercent] = useState(1);
  const [entryPrice, setEntryPrice] = useState(65000);
  const [stopLoss, setStopLoss] = useState(63000);

  // Logic for position sizing
  const amountToRisk = (balance * (riskPercent / 100)).toFixed(2);
  const priceDiff = entryPrice - stopLoss;
  const positionSize = priceDiff > 0 ? (amountToRisk / priceDiff).toFixed(4) : 0;
  const totalPositionValue = (positionSize * entryPrice).toFixed(2);

  return (
    <div className="bg-white border border-[#ffd700]/30 rounded-[2.5rem] p-8 lg:p-10 shadow-premium relative overflow-hidden group">
      {/* Background Icon Accent */}
      <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity pointer-events-none">
        <Calculator className="w-32 h-32" />
      </div>

      <div className="relative z-10">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 bg-[#ffd700]/10 rounded-xl flex items-center justify-center">
            <Calculator className="w-5 h-5 text-[#0a0a0f]" />
          </div>
          <h3 className="text-xl font-black text-[#0a0a0f]">Pro Risk Calculator</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-10">
          {/* Inputs Section */}
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Account Balance (USDT)</label>
              <input 
                type="number" 
                value={balance}
                onChange={(e) => setBalance(parseFloat(e.target.value) || 0)}
                className="w-full bg-[#f8f9fa] border border-transparent focus:border-[#ffd700] rounded-2xl px-6 py-4 outline-none font-bold text-[#0a0a0f] transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Risk Percentage (%)</label>
              <input 
                type="number" 
                value={riskPercent}
                onChange={(e) => setRiskPercent(parseFloat(e.target.value) || 0)}
                className="w-full bg-[#f8f9fa] border border-transparent focus:border-[#ffd700] rounded-2xl px-6 py-4 outline-none font-bold text-[#0a0a0f] transition-all"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Entry Price</label>
                <input 
                  type="number" 
                  value={entryPrice}
                  onChange={(e) => setEntryPrice(parseFloat(e.target.value) || 0)}
                  className="w-full bg-[#f8f9fa] border border-transparent focus:border-[#ffd700] rounded-2xl px-6 py-4 outline-none font-bold text-[#0a0a0f] transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest ml-1">Stop Loss</label>
                <input 
                  type="number" 
                  value={stopLoss}
                  onChange={(e) => setStopLoss(parseFloat(e.target.value) || 0)}
                  className="w-full bg-[#f8f9fa] border border-transparent focus:border-red-500 rounded-2xl px-6 py-4 outline-none font-bold text-[#0a0a0f] transition-all"
                />
              </div>
            </div>
          </div>

          {/* Results Display Section */}
          <div className="bg-[#0a0a0f] rounded-3xl p-8 text-white flex flex-col justify-between shadow-2xl">
            <div className="space-y-8">
              <div>
                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-1">Recommended Position Size</span>
                <div className="text-4xl font-black text-[#ffd700]">
                  {positionSize} <span className="text-xs text-white/40 uppercase tracking-normal">Units</span>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-1">Risk Amount</span>
                  <div className="text-lg font-bold text-red-500">${amountToRisk}</div>
                </div>
                <div>
                  <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest block mb-1">Notional Value</span>
                  <div className="text-lg font-bold text-[#00ff88]">${totalPositionValue}</div>
                </div>
              </div>
            </div>
            
            <div className="mt-8 pt-6 border-t border-white/10 flex items-center gap-2 text-[10px] font-bold text-gray-500 uppercase tracking-widest">
              <ShieldCheck className="w-4 h-4 text-[#00ff88]" />
              Institutional Risk Model Active
            </div>
          </div>
        </div>

        {/* Pro Tip */}
        <div className="p-4 bg-[#fff9e6] rounded-2xl border border-[#ffd700]/20 flex gap-4">
          <Info className="w-5 h-5 text-[#b8860b] flex-shrink-0 mt-0.5" />
          <p className="text-xs text-[#b8860b] leading-relaxed">
            <strong>Risk Management Tip:</strong> Never risk more than 1-2% of your capital on a single setup. This mathematical approach ensures that a single losing streak won't significantly impact your long-term success.
          </p>
        </div>
      </div>
    </div>
  );
};

export default RiskCalculator;
