import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  title: string;
  value: string;
  icon: LucideIcon;
  color?: "orange" | "blue" | "pink" | "yellow";
}

export const MetricCard = ({ title, value, icon: Icon, color = "orange" }: MetricCardProps) => {
  const colorStyles = {
    orange: "text-brand-orange",
    blue: "text-brand-blue",
    pink: "text-pink-500",
    yellow: "text-yellow-500",
  };

  return (
    <div className="bg-dashboard-card rounded-xl p-6 shadow-sm border border-border hover:shadow-md transition-shadow duration-200">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-muted-foreground text-sm font-medium mb-1">{title}</p>
          <p className="text-2xl font-bold text-dashboard-card-foreground">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${colorStyles[color]} bg-current/10`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
    </div>
  );
};