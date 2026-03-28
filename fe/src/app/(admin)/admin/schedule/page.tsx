export default function SchedulePage() {
    return (
        <div className="flex-1 overflow-y-auto p-8">
            <div className="flex flex-wrap items-end justify-between gap-6 mb-8">
                <div className="space-y-1">
                    <h1 className="text-3xl font-black tracking-tight">Class Schedule</h1>
                    <p className="text-slate-500 dark:text-slate-400">View and organize all live teaching sessions.</p>
                </div>
                <div className="flex items-center gap-3">
                    <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                        <button
                            className="px-4 py-1.5 text-sm font-bold bg-white dark:bg-slate-700 shadow-sm rounded-lg">Month
                        </button>
                        <button
                            className="px-4 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">Week
                        </button>
                        <button
                            className="px-4 py-1.5 text-sm font-medium text-slate-500 hover:text-slate-700 dark:hover:text-slate-300">Day
                        </button>
                    </div>
                    <div className="flex items-center gap-2 ml-4">
                        <button
                            className="size-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800">
                            <span className="material-symbols-outlined">chevron_left</span>
                        </button>
                        <span className="text-sm font-bold min-w-[120px] text-center">October 2023</span>
                        <button
                            className="size-9 flex items-center justify-center rounded-lg border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800">
                            <span className="material-symbols-outlined">chevron_right</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="flex flex-wrap gap-4 mb-8">
                <div className="flex-1 min-w-[200px]">
                    <label
                        className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Instructor</label>
                    <select
                        className="w-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-primary focus:ring-primary">
                        <option>All Instructors</option>
                        <option>Dr. Sarah Johnson</option>
                        <option>Prof. Michael Chen</option>
                        <option>Elena Rodriguez</option>
                    </select>
                </div>
                <div className="flex-1 min-w-[200px]">
                    <label className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Room /
                        Lab</label>
                    <select
                        className="w-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-primary focus:ring-primary">
                        <option>All Rooms</option>
                        <option>Science Lab A</option>
                        <option>Main Lecture Hall</option>
                        <option>Digital Suite 101</option>
                    </select>
                </div>
                <div className="flex-1 min-w-[200px]">
                    <label
                        className="block text-xs font-bold uppercase tracking-wider text-slate-400 mb-2">Category</label>
                    <select
                        className="w-full bg-white dark:bg-slate-800 border-slate-200 dark:border-slate-700 rounded-xl text-sm focus:border-primary focus:ring-primary">
                        <option>All Categories</option>
                        <option>Computer Science</option>
                        <option>Physical Sciences</option>
                        <option>Art &amp; Design</option>
                    </select>
                </div>
                <div className="flex items-end">
                    <button
                        className="h-[42px] px-6 rounded-xl border border-slate-200 dark:border-slate-700 font-bold text-sm hover:bg-slate-50 dark:hover:bg-slate-800 transition-colors">
                        Clear Filters
                    </button>
                </div>
            </div>
            <div
                className="bg-white dark:bg-slate-800 rounded-3xl border border-slate-200 dark:border-slate-700 overflow-hidden shadow-sm">
                <div
                    className="grid grid-cols-7 border-b border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800/50">
                    <div
                        className="py-3 text-center text-xs font-bold uppercase tracking-widest text-slate-400 border-r border-slate-200 dark:border-slate-700">Sun
                    </div>
                    <div
                        className="py-3 text-center text-xs font-bold uppercase tracking-widest text-slate-400 border-r border-slate-200 dark:border-slate-700">Mon
                    </div>
                    <div
                        className="py-3 text-center text-xs font-bold uppercase tracking-widest text-slate-400 border-r border-slate-200 dark:border-slate-700">Tue
                    </div>
                    <div
                        className="py-3 text-center text-xs font-bold uppercase tracking-widest text-slate-400 border-r border-slate-200 dark:border-slate-700">Wed
                    </div>
                    <div
                        className="py-3 text-center text-xs font-bold uppercase tracking-widest text-slate-400 border-r border-slate-200 dark:border-slate-700">Thu
                    </div>
                    <div
                        className="py-3 text-center text-xs font-bold uppercase tracking-widest text-slate-400 border-r border-slate-200 dark:border-slate-700">Fri
                    </div>
                    <div className="py-3 text-center text-xs font-bold uppercase tracking-widest text-slate-400">Sat
                    </div>
                </div>
                <div className="grid grid-cols-7 auto-rows-[140px]">
                    <div
                        className="p-3 border-r border-b border-slate-100 dark:border-slate-700 opacity-30 text-slate-400">27
                    </div>
                    <div
                        className="p-3 border-r border-b border-slate-100 dark:border-slate-700 opacity-30 text-slate-400">28
                    </div>
                    <div
                        className="p-3 border-r border-b border-slate-100 dark:border-slate-700 opacity-30 text-slate-400">29
                    </div>
                    <div
                        className="p-3 border-r border-b border-slate-100 dark:border-slate-700 opacity-30 text-slate-400">30
                    </div>
                    <div className="p-3 border-r border-b border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <span className="text-sm font-bold text-slate-400">1</span>
                    </div>
                    <div className="p-3 border-r border-b border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <span className="text-sm font-bold text-slate-400">2</span>
                        <div className="bg-primary/10 border-l-4 border-primary p-2 rounded-r-lg">
                            <p className="text-[10px] font-bold text-primary leading-tight">09:00 AM</p>
                            <p className="text-[11px] font-semibold leading-tight line-clamp-1">Intro to Quantum</p>
                        </div>
                    </div>
                    <div className="p-3 border-b border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <span className="text-sm font-bold text-slate-400">3</span>
                    </div>
                    <div className="p-3 border-r border-b border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <span className="text-sm font-bold text-slate-400">4</span>
                    </div>
                    <div
                        className="p-3 border-r border-b border-slate-100 dark:border-slate-700 flex flex-col gap-2 bg-primary/5">
                        <span className="text-sm font-bold text-primary">5</span>
                        <div className="bg-primary border-l-4 border-primary-700 p-2 rounded-r-lg text-white">
                            <p className="text-[10px] font-bold leading-tight">11:30 AM</p>
                            <p className="text-[11px] font-bold leading-tight line-clamp-1">UI Design Lab</p>
                        </div>
                    </div>
                    <div className="p-3 border-r border-b border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <span className="text-sm font-bold text-slate-400">6</span>
                    </div>
                    <div className="p-3 border-r border-b border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <span className="text-sm font-bold text-slate-400">7</span>
                        <div className="bg-amber-100 dark:bg-amber-900/30 border-l-4 border-amber-500 p-2 rounded-r-lg">
                            <div className="flex items-center gap-1 mb-0.5">
                                <span
                                    className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-[12px]">warning</span>
                                <p className="text-[10px] font-bold text-amber-600 dark:text-amber-400 leading-tight">CONFLICT</p>
                            </div>
                            <p className="text-[11px] font-semibold leading-tight line-clamp-1">Room Overlap</p>
                        </div>
                    </div>
                    <div className="p-3 border-r border-b border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <span className="text-sm font-bold text-slate-400">8</span>
                    </div>
                    <div className="p-3 border-r border-b border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <span className="text-sm font-bold text-slate-400">9</span>
                        <div className="bg-slate-100 dark:bg-slate-700 border-l-4 border-slate-400 p-2 rounded-r-lg">
                            <p className="text-[10px] font-bold text-slate-500 dark:text-slate-300 leading-tight">02:00
                                PM</p>
                            <p className="text-[11px] font-semibold leading-tight line-clamp-1">Faculty Meeting</p>
                        </div>
                    </div>
                    <div className="p-3 border-b border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <span className="text-sm font-bold text-slate-400">10</span>
                    </div>
                    <div className="p-3 border-r border-b border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <span className="text-sm font-bold text-slate-400">11</span>
                    </div>
                    <div className="p-3 border-r border-b border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <span className="text-sm font-bold text-slate-400">12</span>
                    </div>
                    <div className="p-3 border-r border-b border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <span className="text-sm font-bold text-slate-400">13</span>
                        <div className="bg-primary/10 border-l-4 border-primary p-2 rounded-r-lg">
                            <p className="text-[10px] font-bold text-primary leading-tight">10:00 AM</p>
                            <p className="text-[11px] font-semibold leading-tight line-clamp-1">Advanced AI Ethics</p>
                        </div>
                    </div>
                    <div className="p-3 border-r border-b border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <span className="text-sm font-bold text-slate-400">14</span>
                    </div>
                    <div className="p-3 border-r border-b border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <span className="text-sm font-bold text-slate-400">15</span>
                    </div>
                    <div className="p-3 border-r border-b border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <span className="text-sm font-bold text-slate-400">16</span>
                    </div>
                    <div className="p-3 border-b border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <span className="text-sm font-bold text-slate-400">17</span>
                    </div>
                    <div className="p-3 border-r border-b border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <span className="text-sm font-bold text-slate-400">18</span>
                    </div>
                    <div className="p-3 border-r border-b border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <span className="text-sm font-bold text-slate-400">19</span>
                    </div>
                    <div className="p-3 border-r border-b border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <span className="text-sm font-bold text-slate-400">20</span>
                    </div>
                    <div className="p-3 border-r border-b border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <span className="text-sm font-bold text-slate-400">21</span>
                    </div>
                    <div className="p-3 border-r border-b border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <span className="text-sm font-bold text-slate-400">22</span>
                        <div className="bg-amber-100 dark:bg-amber-900/30 border-l-4 border-amber-500 p-2 rounded-r-lg">
                            <div className="flex items-center gap-1 mb-0.5">
                                <span
                                    className="material-symbols-outlined text-amber-600 dark:text-amber-400 text-[12px]">warning</span>
                                <p className="text-[10px] font-bold text-amber-600 dark:text-amber-400 leading-tight">CONFLICT</p>
                            </div>
                            <p className="text-[11px] font-semibold leading-tight line-clamp-1">Instructor
                                Overbooked</p>
                        </div>
                    </div>
                    <div className="p-3 border-r border-b border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <span className="text-sm font-bold text-slate-400">23</span>
                    </div>
                    <div className="p-3 border-b border-slate-100 dark:border-slate-700 flex flex-col gap-2">
                        <span className="text-sm font-bold text-slate-400">24</span>
                    </div>
                </div>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-6 text-sm text-slate-500 dark:text-slate-400">
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-primary"></div>
                    <span>Course Session</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-slate-400"></div>
                    <span>Internal Event</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className="w-3 h-3 rounded bg-amber-500"></div>
                    <span className="font-bold text-amber-600 dark:text-amber-500">Schedule Conflict</span>
                </div>
            </div>
        </div>
    );
}