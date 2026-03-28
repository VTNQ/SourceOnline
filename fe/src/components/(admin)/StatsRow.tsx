export default function StatsRow() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      {/* Revenue */}
      <div className="bg-white p-6 rounded-[8px] border border-gray-200 shadow-[0_1px_3px_0_rgba(0,0,0,0.1)]">
        <div className="flex justify-between items-start mb-2">
          <p className="text-sm text-gray-500 font-medium">Monthly Revenue</p>
          <span className="p-2 bg-blue-50 text-[#1A56DB] rounded-lg">
            <span className="material-symbols-outlined text-[20px]">payments</span>
          </span>
        </div>
        <div className="flex items-baseline justify-between">
          <h3 className="text-2xl font-bold text-gray-900">₫184,000,000</h3>
          <span className="text-[#10B981] text-xs font-bold flex items-center bg-green-50 px-2 py-0.5 rounded">
            <span className="material-symbols-outlined text-[14px] mr-0.5">arrow_upward</span>
            12%
          </span>
        </div>
      </div>

      {/* Students */}
      <div className="bg-white p-6 rounded-[8px] border border-gray-200 shadow-[0_1px_3px_0_rgba(0,0,0,0.1)]">
        <div className="flex justify-between items-start mb-2">
          <p className="text-sm text-gray-500 font-medium">New Students (Week)</p>
          <span className="p-2 bg-green-50 text-[#10B981] rounded-lg">
            <span className="material-symbols-outlined text-[20px]">person_add</span>
          </span>
        </div>
        <div className="flex items-baseline justify-between">
          <h3 className="text-2xl font-bold text-gray-900">1,240</h3>
          <span className="text-[#10B981] text-xs font-bold flex items-center bg-green-50 px-2 py-0.5 rounded">
            <span className="material-symbols-outlined text-[14px] mr-0.5">arrow_upward</span>
            8%
          </span>
        </div>
      </div>

      {/* Courses */}
      <div className="bg-white p-6 rounded-[8px] border border-gray-200 shadow-[0_1px_3px_0_rgba(0,0,0,0.1)]">
        <div className="flex justify-between items-start mb-2">
          <p className="text-sm text-gray-500 font-medium">Active Courses</p>
          <span className="p-2 bg-amber-50 text-[#F59E0B] rounded-lg">
            <span className="material-symbols-outlined text-[20px]">auto_stories</span>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-900">87</h3>
          <span className="bg-amber-100 text-amber-700 text-[10px] px-2 py-1 rounded-md font-bold uppercase tracking-wider">
            12 Pending
          </span>
        </div>
      </div>

      {/* Live Sessions */}
      <div className="bg-white p-6 rounded-[8px] border border-gray-200 shadow-[0_1px_3px_0_rgba(0,0,0,0.1)]">
        <div className="flex justify-between items-start mb-2">
          <p className="text-sm text-gray-500 font-medium">Live Sessions Today</p>
          <span className="p-2 bg-red-50 text-[#EF4444] rounded-lg">
            <span className="material-symbols-outlined text-[20px]">videocam</span>
          </span>
        </div>
        <div className="flex items-center justify-between">
          <h3 className="text-2xl font-bold text-gray-900">6</h3>
          <span className="text-[#EF4444] text-[10px] font-bold flex items-center bg-red-50 px-2 py-1 rounded-md uppercase tracking-wider">
            <span className="material-symbols-outlined text-[14px] mr-1">report</span>
            1 Conflict
          </span>
        </div>
      </div>
    </section>
  );
}
