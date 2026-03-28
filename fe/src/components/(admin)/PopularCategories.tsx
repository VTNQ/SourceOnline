const categories = [
  { name: "Software Development", count: "12,400", width: "85%", opacity: "100" },
  { name: "Design & Creative", count: "8,200", width: "60%", opacity: "70" },
  { name: "Data Science & AI", count: "6,100", width: "45%", opacity: "50" },
];

export default function PopularCategories() {
  return (
    <section className="bg-white p-8 rounded-[8px] border border-gray-200 shadow-[0_1px_3px_0_rgba(0,0,0,0.1)]">
      <div className="flex items-center justify-between mb-8">
        <div>
          <h2 className="text-lg font-bold text-gray-900">Popular Categories</h2>
          <p className="text-xs text-gray-500 font-medium mt-1">
            Enrollments by primary course category
          </p>
        </div>
        <button className="text-xs font-bold text-[#1A56DB] hover:bg-blue-50 px-3 py-1.5 rounded-lg transition-colors">
          Details
        </button>
      </div>

      <div className="space-y-5">
        {categories.map((cat) => (
          <div key={cat.name} className="space-y-2">
            <div className="flex justify-between text-xs font-bold">
              <span className="text-gray-700">{cat.name}</span>
              <span className="text-gray-900">{cat.count}</span>
            </div>
            <div className="w-full bg-gray-100 h-2.5 rounded-full">
              <div
                className="bg-[#1A56DB] h-full rounded-full transition-all duration-500"
                style={{
                  width: cat.width,
                  opacity: cat.opacity === "100" ? 1 : cat.opacity === "70" ? 0.7 : 0.5,
                }}
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
