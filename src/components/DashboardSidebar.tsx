import { Home, FileText, MessageSquare, Bell, MapPin, BarChart3, User } from "lucide-react";
import { cn } from "@/lib/utils";

const sidebarItems = [
  { icon: Home, label: "Home", active: true },
  { icon: FileText, label: "File" },
  { icon: MessageSquare, label: "Messages" },
  { icon: Bell, label: "Notification" },
  { icon: MapPin, label: "Location" },
  { icon: BarChart3, label: "Graph" },
];

export const DashboardSidebar = () => {
  return (
    <div className="w-64 bg-dashboard-sidebar min-h-screen p-6">
      {/* User Profile */}
      <div className="flex items-center gap-3 mb-8">
        <div className="w-10 h-10 bg-brand-orange rounded-full flex items-center justify-center">
          <User className="w-5 h-5 text-white" />
        </div>
        <div>
          <h3 className="text-dashboard-sidebar-foreground font-semibold text-sm">JOHN DON</h3>
          <p className="text-dashboard-sidebar-foreground/70 text-xs">john@example.com</p>
        </div>
      </div>

      {/* Navigation */}
      <nav className="space-y-1">
        {sidebarItems.map((item, index) => (
          <button
            key={index}
            className={cn(
              "w-full flex items-center gap-3 px-3 py-3 rounded-lg text-left transition-all duration-200",
              item.active
                ? "bg-brand-orange text-white shadow-glow"
                : "text-dashboard-sidebar-foreground/80 hover:bg-dashboard-sidebar-foreground/10 hover:text-dashboard-sidebar-foreground"
            )}
          >
            <item.icon className="w-5 h-5" />
            <span className="text-sm font-medium">{item.label}</span>
          </button>
        ))}
      </nav>
    </div>
  );
};