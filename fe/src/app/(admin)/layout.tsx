import Sidebar from "@/components/(admin)/Sidebar";
import TopHeader from "@/components/(admin)/TopHeader";
import Script from "next/script";
export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className="flex bg-[#F8F9FA] min-h-screen">
            <Sidebar/>
            <div className="flex-1 ml-64 min-h-screen">
                <TopHeader/>
                <main className="p-8 space-y-6 bg-gray-50 min-h-screen">
                    {children}
                </main>
            </div>
        </div>
    )
                                    }