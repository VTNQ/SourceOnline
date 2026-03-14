"use client";

export default function TopHeader() {
  return (
    <header className="bg-white border-b border-gray-200 sticky top-0 z-40">
      <div className="px-8 h-16 flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <h1 className="text-lg font-bold text-gray-900">Dashboard Overview</h1>
        </div>
        <div className="flex items-center space-x-4">
          {/* Conflict Pill */}
          <div className="flex items-center bg-orange-50 text-orange-700 px-3 py-1.5 rounded-full text-xs font-semibold border border-orange-100">
            <span className="material-symbols-outlined text-[16px] mr-1.5 leading-none">
              warning
            </span>
            2 Conflicts Detected
          </div>
          {/* Notifications */}
          <button className="relative p-2 text-gray-500 hover:text-[#1A56DB] transition-colors flex items-center justify-center">
            <span className="material-symbols-outlined text-[24px]">notifications</span>
            <span className="absolute top-2 right-2 flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-red-500 border border-white" />
            </span>
          </button>
        </div>
      </div>
    </header>
  );
}
