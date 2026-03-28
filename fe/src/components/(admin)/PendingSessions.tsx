const sessions = [
  {
    title: "Advanced React Patterns",
    instructor: "Alex Nguyen",
    time: "Oct 24, 14:00",
    venue: "Zoom #4",
  },
  {
    title: "Data Science Fundamentals",
    instructor: "Sarah Chen",
    time: "Oct 24, 16:30",
    venue: "Google Meet",
  },
];

export default function PendingSessions() {
  return (
    <section className="bg-white rounded-[8px] border border-gray-200 shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] overflow-hidden">
      <div className="px-8 py-6 border-b border-gray-100 flex justify-between items-center">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Sessions Pending Approval</h2>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Require immediate administrative review
          </p>
        </div>
        <button className="text-sm text-[#1A56DB] font-bold hover:underline">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm">
          <thead className="bg-gray-50/50 text-gray-500 font-bold uppercase text-[10px] tracking-wider">
            <tr>
              <th className="px-8 py-4">Session Details</th>
              <th className="px-8 py-4">Time &amp; Venue</th>
              <th className="px-8 py-4">Status</th>
              <th className="px-8 py-4 text-right">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {sessions.map((s) => (
              <tr key={s.title} className="hover-row">
                <td className="px-8 py-5">
                  <div className="flex flex-col">
                    <span className="font-bold text-gray-900">{s.title}</span>
                    <span className="text-xs text-gray-500 font-medium mt-0.5">
                      {s.instructor}
                    </span>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <div className="flex flex-col">
                    <span className="text-gray-700 font-medium">{s.time}</span>
                    <span className="text-xs text-gray-500">{s.venue}</span>
                  </div>
                </td>
                <td className="px-8 py-5">
                  <span className="bg-amber-100 text-amber-700 px-2.5 py-1 rounded text-[10px] font-bold uppercase tracking-wider">
                    Pending
                  </span>
                </td>
                <td className="px-8 py-5 text-right space-x-2">
                  <button className="text-xs font-bold bg-[#1A56DB] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors shadow-sm">
                    Approve
                  </button>
                  <button className="text-xs font-bold border border-gray-200 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-50 transition-colors">
                    Reject
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
