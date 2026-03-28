import Sidebar from "@/components/(admin)/Sidebar";
import TopHeader from "@/components/(admin)/TopHeader";
import StatsRow from "@/components/(admin)/StatsRow";
import RevenueChart from "@/components/(admin)/RevenueChart";
import PopularCategories from "@/components/(admin)/PopularCategories";
import PendingSessions from "@/components/(admin)/PendingSessions";
import CourseQueue from "@/components/(admin)/CourseQueue";
import ScheduleConflicts from "@/components/(admin)/ScheduleConflicts";
import PlatformPerformance from "@/components/(admin)/PlatformPerformance";

export default function DashboardPage() {
  return (
    <div className="flex bg-[#F8F9FA] min-h-screen">
      <Sidebar />

      <div className="flex-1 ml-64 min-h-screen">
        <TopHeader />

        <main className="p-8 max-w-[1600px] mx-auto">
          <StatsRow />

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column */}
            <div className="lg:col-span-2 space-y-8">
              <RevenueChart />
              <PopularCategories />
              <PendingSessions />
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <CourseQueue />
              <ScheduleConflicts />
              <PlatformPerformance />
            </div>
          </div>

          <footer className="mt-16 py-8 text-center text-[11px] font-medium text-gray-400 border-t border-gray-100 tracking-wide">
            © 2023 LEARNHUB PLATFORM ADMIN. ALL RIGHTS RESERVED.
          </footer>
        </main>
      </div>
    </div>
  );
}
