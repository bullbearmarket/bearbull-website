import React, { useMemo, useState } from 'react';
import { Calculator, Info, ShieldCheck } from 'lucide-react';

const RiskCalculator = () => {
  const [balance, setBalance] = useState(10000);
  const [riskPercent, setRiskPercent] = useState(1);
  const [entryPrice, setEntryPrice] = useState(65000);
  const [stopLoss, setStopLoss] = useState(63000);

  const calculations = useMemo(() => {
    const riskAmount = balance * (riskPercent / 100);
    const priceDifference = Math.abs(entryPrice - stopLoss);

    const positionSize =
      priceDifference > 0 ? riskAmount / priceDifference : 0;

    const totalPositionValue = positionSize * entryPrice;

    return {
      riskAmount: riskAmount.toFixed(2),
      positionSize: positionSize.toFixed(4),
      totalPositionValue: totalPositionValue.toFixed(2),
    };
  }, [balance, riskPercent, entryPrice, stopLoss]);

  return (
    <div className="relative overflow-hidden rounded-[2.5rem] border border-[#ffd700]/20 bg-white p-8 lg:p-10 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

      {/* Background Glow */}
      <div className="absolute top-0 right-0 opacity-[0.03] pointer-events-none">
        <Calculator className="w-52 h-52 text-[#0a0a0f]" />
      </div>

      <div className="relative z-10">

        {/* Header */}
        <div className="flex items-center gap-4 mb-10">
          <div className="w-12 h-12 rounded-2xl bg-[#ffd700]/10 flex items-center justify-center">
            <Calculator className="w-6 h-6 text-[#b8860b]" />
          </div>

          <div>
            <h3 className="text-2xl font-black text-[#0a0a0f]">
              Pro Risk Calculator
            </h3>

            <p className="text-sm text-[#64748b]">
              Institutional-grade position sizing tool
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left Side Inputs */}
          <div className="space-y-6">

            <div>
              <label className="block mb-2 text-[11px] uppercase tracking-[0.25em] font-black text-gray-400">
                Account Balance (USDT)
              </label>

              <input
                type="number"
                min="0"
                step="0.01"
                value={balance}
                onChange={(e) =>
                  setBalance(parseFloat(e.target.value) || 0)
                }
                className="w-full rounded-2xl bg-[#f8fafc] border border-transparent focus:border-[#ffd700] px-6 py-4 outline-none font-bold text-[#0a0a0f] transition-all"
              />
            </div>

            <div>
              <label className="block mb-2 text-[11px] uppercase tracking-[0.25em] font-black text-gray-400">
                Risk Percentage (%)
              </label>

              <input
                type="number"
                min="0"
                step="0.1"
                value={riskPercent}
                onChange={(e) =>
                  setRiskPercent(parseFloat(e.target.value) || 0)
                }
                className="w-full rounded-2xl bg-[#f8fafc] border border-transparent focus:border-[#ffd700] px-6 py-4 outline-none font-bold text-[#0a0a0f] transition-all"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">

              <div>
                <label className="block mb-2 text-[11px] uppercase tracking-[0.25em] font-black text-gray-400">
                  Entry Price
                </label>

                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={entryPrice}
                  onChange={(e) =>
                    setEntryPrice(parseFloat(e.target.value) || 0)
                  }
                  className="w-full rounded-2xl bg-[#f8fafc] border border-transparent focus:border-[#ffd700] px-6 py-4 outline-none font-bold text-[#0a0a0f] transition-all"
                />
              </div>

              <div>
                <label className="block mb-2 text-[11px] uppercase tracking-[0.25em] font-black text-gray-400">
                  Stop Loss
                </label>

                <input
                  type="number"
                  min="0"
                  step="0.01"
                  value={stopLoss}
                  onChange={(e) =>
                    setStopLoss(parseFloat(e.target.value) || 0)
                  }
                  className="w-full rounded-2xl bg-[#f8fafc] border border-transparent focus:border-red-400 px-6 py-4 outline-none font-bold text-[#0a0a0f] transition-all"
                />
              </div>

            </div>
          </div>

          {/* Right Side Results */}
          <div className="rounded-[2rem] bg-[#0a0a0f] p-8 text-white flex flex-col justify-between shadow-2xl">

            <div>

              <div className="mb-8">
                <span className="block mb-2 text-[11px] uppercase tracking-[0.25em] text-white/40 font-black">
                  Recommended Position Size
                </span>

                <div className="text-4xl lg:text-5xl font-black text-[#ffd700]">
                  {calculations.positionSize}

                  <span className="ml-2 text-sm text-white/40 uppercase">
                    Units
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-6">

                <div>
                  <span className="block mb-2 text-[11px] uppercase tracking-[0.25em] text-white/40 font-black">
                    Risk Amount
                  </span>

                  <div className="text-2xl font-black text-red-400">
                    ${calculations.riskAmount}
                  </div>
                </div>

                <div>
                  <span className="block mb-2 text-[11px] uppercase tracking-[0.25em] text-white/40 font-black">
                    Position Value
                  </span>

                  <div className="text-2xl font-black text-[#00ff88]">
                    ${calculations.totalPositionValue}
                  </div>
                </div>

              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] font-black text-white/50">
              <ShieldCheck className="w-4 h-4 text-[#00ff88]" />
              Institutional Risk Engine Active
            </div>
          </div>
        </div>

        {/* Bottom Tip */}
        <div className="mt-8 rounded-2xl border border-[#ffd700]/20 bg-[#fff9e6] p-5 flex gap-4">

          <Info className="w-5 h-5 text-[#b8860b] flex-shrink-0 mt-0.5" />

          <p className="text-sm leading-7 text-[#8a6b00]">
            <strong>Professional Risk Tip:</strong> Most professional traders
            risk only 1–2% of total capital per trade. Proper position sizing
            helps protect your portfolio during market volatility and improves
            long-term consistency.
          </p>

        </div>
      </div>
    </div>
  );
};

export default RiskCalculator;
