export default function RevenueChart() {
  return (
    <section className="bg-white p-8 rounded-[8px] border border-gray-200 shadow-[0_1px_3px_0_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Revenue Performance</h2>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Comparison of gross revenue over the last week
          </p>
        </div>
        <div className="relative">
          <select className="appearance-none pr-10 pl-4 py-2 text-sm font-semibold border border-gray-200 rounded-lg focus:ring-[#1A56DB] focus:border-[#1A56DB] bg-gray-50/50 cursor-pointer outline-none">
            <option>Last 7 Days</option>
            <option>Last 30 Days</option>
          </select>
          <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-[18px] pointer-events-none text-gray-400">
            expand_more
          </span>
        </div>
      </div>

      <div className="relative h-72 w-full pt-4">
        {/* Y-Axis Labels */}
        <div className="absolute left-0 top-0 bottom-6 w-12 flex flex-col justify-between text-[10px] font-bold text-gray-400 text-right pr-2">
          <span>40M</span>
          <span>30M</span>
          <span>20M</span>
          <span>10M</span>
          <span>0M</span>
        </div>

        {/* Chart Area */}
        <div className="ml-12 h-[calc(100%-24px)] border-l border-b border-gray-100 relative overflow-hidden">
          {/* Grid Lines */}
          <div className="absolute inset-0 flex flex-col justify-between pointer-events-none">
            {[...Array(5)].map((_, i) => (
              <div key={i} className="w-full h-[1px] bg-gray-50" />
            ))}
          </div>

          {/* SVG Area Chart */}
          <svg
            className="absolute inset-0 h-full w-full"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
                <stop offset="0%" stopColor="#1A56DB" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#1A56DB" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path
              d="M 0 60 Q 15 40 30 45 Q 45 50 60 20 Q 75 35 100 5 L 100 100 L 0 100 Z"
              fill="url(#chartGradient)"
            />
            <path
              d="M 0 60 Q 15 40 30 45 Q 45 50 60 20 Q 75 35 100 5"
              fill="none"
              stroke="#1A56DB"
              strokeWidth="2.5"
              strokeLinecap="round"
            />
          </svg>

          {/* Data Points */}
          <div className="dot" style={{ left: "0%", top: "60%" }} />
          <div className="dot" style={{ left: "30%", top: "45%" }} />
          <div className="dot" style={{ left: "60%", top: "20%" }} />
          <div className="dot" style={{ left: "100%", top: "5%" }} />
        </div>

        {/* X-Axis Labels */}
        <div className="ml-12 flex justify-between mt-3 text-[10px] text-gray-400 font-bold uppercase tracking-widest">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((d) => (
            <span key={d}>{d}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
