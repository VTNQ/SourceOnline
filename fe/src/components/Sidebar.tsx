"use client";

import Link from "next/link";

const navItems = [
  { icon: "dashboard", label: "Dashboard", active: true },
  { icon: "calendar_today", label: "Schedule", active: false },
  { icon: "auto_stories", label: "Courses", active: false },
  { icon: "group", label: "Users", active: false },
  { icon: "payments", label: "Payments", active: false },
  { icon: "settings", label: "Settings", active: false },
];

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-50 w-64 bg-white border-r border-gray-200 flex flex-col">
      {/* Logo */}
      <div className="px-6 py-8">
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 bg-[#1A56DB] rounded flex items-center justify-center flex-shrink-0 shadow-sm">
            <span className="text-white font-bold text-lg">L</span>
          </div>
          <div>
            <span className="text-xl font-bold tracking-tight text-gray-900 block leading-tight">
              LearnHub
            </span>
            <span className="text-[10px] font-medium text-gray-400 uppercase tracking-widest block">
              admin
            </span>
          </div>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 space-y-1 overflow-y-auto">
        {navItems.map((item) => (
          <Link
            key={item.label}
            href="#"
            className={`flex items-center space-x-3 px-4 py-3 text-sm rounded-lg transition-colors group ${
              item.active
                ? "font-semibold bg-blue-50 text-[#1A56DB] nav-active"
                : "font-medium text-gray-500 hover:bg-gray-50 hover:text-gray-900"
            }`}
          >
            <span className="material-symbols-outlined text-[22px]">
              {item.icon}
            </span>
            <span>{item.label}</span>
          </Link>
        ))}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-gray-100 bg-gray-50/50">
        <div className="flex items-center space-x-3 px-2">
          <img
            src="https://api.dicebear.com/7.x/avataaars/svg?seed=admin"
            alt="Admin Avatar"
            className="w-9 h-9 rounded-full border border-gray-200 bg-gray-100"
          />
          <div className="overflow-hidden">
            <p className="text-sm font-bold text-gray-900 truncate leading-none mb-1">
              Admin User
            </p>
            <p className="text-[11px] text-gray-500 truncate">Super Admin</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
