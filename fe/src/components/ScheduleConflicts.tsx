const conflicts = [
  {
    title: "Room Overlap: Room B-201",
    desc: "UX Design vs. Java Dev",
    time: "Today, 09:00 - 11:00",
  },
  {
    title: "Instructor: Sarah Chen",
    desc: "Fundamentals vs. Mentoring",
    time: "Today, 16:30 - 18:00",
  },
];

export default function ScheduleConflicts() {
  return (
    <section className="bg-orange-50/60 rounded-[8px] border border-orange-200 shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] p-6">
      <div className="flex items-center space-x-2 mb-6">
        <span className="material-symbols-outlined text-orange-600">report_problem</span>
        <h2 className="text-base font-bold text-orange-900">Schedule Conflicts</h2>
      </div>

      <div className="space-y-4">
        {conflicts.map((c) => (
          <div
            key={c.title}
            className="bg-white p-5 rounded-lg border border-orange-100 shadow-sm"
          >
            <p className="font-bold text-gray-900 text-sm mb-1">{c.title}</p>
            <p className="text-xs text-gray-600 mb-1">{c.desc}</p>
            <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
              {c.time}
            </p>
            <button className="mt-4 w-full bg-orange-600 text-white py-2.5 rounded-lg font-bold hover:bg-orange-700 transition-colors shadow-sm text-xs">
              Resolve Conflict
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
