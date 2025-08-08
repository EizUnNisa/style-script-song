import { DashboardSidebar } from "@/components/DashboardSidebar";
import { MetricCard } from "@/components/MetricCard";
import { DashboardChart, DashboardLineChart } from "@/components/DashboardChart";
import { DashboardCalendar } from "@/components/DashboardCalendar";
import { DollarSign, Share2, Heart, Star, Menu } from "lucide-react";
import { useState } from "react";

const Index = () => {
  const [sidebarOpen, setSidebarOpen] = useState(true);

  return (
    <div className="min-h-screen bg-dashboard-main flex">
      {/* Mobile Menu Button */}
      <button
        onClick={() => setSidebarOpen(!sidebarOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-dashboard-card rounded-lg shadow-md"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Sidebar */}
      <div className={`${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 transition-transform duration-300 ease-in-out fixed lg:static z-40`}>
        <DashboardSidebar />
      </div>

      {/* Main Content */}
      <div className="flex-1 lg:ml-0">
        {/* Header */}
        <div className="bg-dashboard-card border-b border-border px-6 py-4">
          <div className="flex items-center justify-between">
            <h1 className="text-xl font-semibold text-dashboard-card-foreground">Dashboard User</h1>
            <div className="flex items-center gap-4">
              <span className="text-sm text-muted-foreground">John Doe</span>
            </div>
          </div>
        </div>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-8">
            <MetricCard
              title="Earning"
              value="$ 628"
              icon={DollarSign}
              color="orange"
            />
            <MetricCard
              title="Share"
              value="2434"
              icon={Share2}
              color="blue"
            />
            <MetricCard
              title="Likes"
              value="1259"
              icon={Heart}
              color="pink"
            />
            <MetricCard
              title="Rating"
              value="8.5"
              icon={Star}
              color="yellow"
            />
          </div>

          {/* Charts Section */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
            {/* Main Chart */}
            <div className="xl:col-span-2">
              <DashboardChart />
            </div>

            {/* Right Sidebar with Calendar */}
            <div className="space-y-6">
              <DashboardCalendar />
            </div>
          </div>

          {/* Bottom Chart */}
          <div className="mt-6">
            <DashboardLineChart />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
