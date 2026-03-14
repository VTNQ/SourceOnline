export default function PlatformPerformance() {
  return (
    <section className="bg-white rounded-[8px] border border-gray-200 shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] p-6">
      <h2 className="text-base font-bold text-gray-900 mb-6">Platform Performance</h2>

      <div className="space-y-6">
        {/* Total Enrolled */}
        <div>
          <div className="flex justify-between text-xs font-bold mb-2">
            <span className="text-gray-500 uppercase tracking-wider">Total Enrolled</span>
            <span className="text-gray-900">24,512</span>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div className="bg-[#1A56DB] h-full w-[85%]" />
          </div>
        </div>

        {/* Completion Rate */}
        <div>
          <div className="flex justify-between text-xs font-bold mb-2">
            <span className="text-gray-500 uppercase tracking-wider">Completion Rate</span>
            <span className="text-gray-900">68.4%</span>
          </div>
          <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
            <div className="bg-[#10B981] h-full w-[68%]" />
          </div>
        </div>

        {/* Avg Rating */}
        <div className="flex items-center justify-between border-t border-gray-100 pt-6 mt-6">
          <span className="text-sm font-bold text-gray-500 uppercase tracking-wider">
            Avg Rating
          </span>
          <div className="flex items-center text-[#F59E0B]">
            <span className="font-bold text-gray-900 text-lg mr-2 leading-none">4.8</span>
            <div className="flex">
              {[1, 2, 3, 4].map((i) => (
                <span key={i} className="material-symbols-outlined text-[18px]">
                  star
                </span>
              ))}
              <span className="material-symbols-outlined text-[18px] text-gray-200">
                star
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
