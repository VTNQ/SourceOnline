const courses = [
  { title: "Python for AI", author: "James Wilson" },
  { title: "Micro-services", author: "Elena Rossi" },
];

export default function CourseQueue() {
  return (
    <section className="bg-white rounded-[8px] border border-gray-200 shadow-[0_1px_3px_0_rgba(0,0,0,0.1)] overflow-hidden">
      <div className="px-6 py-5 border-b border-gray-100 flex justify-between items-center">
        <h2 className="text-base font-bold text-gray-900">Course Queue</h2>
        <a href="#" className="text-xs text-[#1A56DB] font-bold hover:underline">
          View All
        </a>
      </div>

      <div className="p-2 divide-y divide-gray-50">
        {courses.map((c) => (
          <div
            key={c.title}
            className="p-4 flex items-center justify-between hover:bg-gray-50 rounded-lg transition-colors"
          >
            <div>
              <p className="text-sm font-bold text-gray-900 truncate max-w-[150px]">
                {c.title}
              </p>
              <p className="text-[11px] text-gray-500 font-medium">by {c.author}</p>
            </div>
            <div className="flex space-x-2">
              <button
                className="w-9 h-9 flex items-center justify-center bg-blue-50 text-[#1A56DB] rounded-lg hover:bg-blue-100 transition-colors"
                title="Approve"
              >
                <span className="material-symbols-outlined text-[20px]">check</span>
              </button>
              <button
                className="w-9 h-9 flex items-center justify-center border border-gray-200 text-gray-400 rounded-lg hover:bg-gray-50 transition-colors"
                title="Reject"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
