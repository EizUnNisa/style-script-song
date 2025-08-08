import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, LineChart, Line, Area, AreaChart } from "recharts";

const barData = [
  { month: "Jan", lorem: 35, dolor: 25 },
  { month: "Feb", lorem: 45, dolor: 35 },
  { month: "Mar", lorem: 55, dolor: 45 },
  { month: "Apr", lorem: 40, dolor: 30 },
  { month: "May", lorem: 65, dolor: 55 },
  { month: "Jun", lorem: 50, dolor: 40 },
  { month: "Jul", lorem: 70, dolor: 60 },
  { month: "Aug", lorem: 45, dolor: 35 },
  { month: "Sep", lorem: 60, dolor: 50 },
  { month: "Oct", lorem: 55, dolor: 45 },
  { month: "Nov", lorem: 50, dolor: 40 },
  { month: "Dec", lorem: 65, dolor: 55 },
];

const lineData = [
  { month: "Jan", value: 30 },
  { month: "Feb", value: 45 },
  { month: "Mar", value: 35 },
  { month: "Apr", value: 55 },
  { month: "May", value: 45 },
  { month: "Jun", value: 65 },
  { month: "Jul", value: 55 },
  { month: "Aug", value: 70 },
  { month: "Sep", value: 60 },
  { month: "Oct", value: 75 },
  { month: "Nov", value: 65 },
  { month: "Dec", value: 80 },
];

export const DashboardChart = () => {
  return (
    <div className="bg-dashboard-card rounded-xl p-6 shadow-sm border border-border">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-dashboard-card-foreground">Result</h3>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-brand-orange rounded-full"></div>
            <span className="text-sm text-muted-foreground">Lorem Ipsum</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 bg-dashboard-sidebar rounded-full"></div>
            <span className="text-sm text-muted-foreground">Dolor Amet</span>
          </div>
        </div>
      </div>
      
      <div className="h-64">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={barData} barCategoryGap="20%">
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis hide />
            <Bar dataKey="lorem" fill="hsl(var(--brand-orange))" radius={[4, 4, 0, 0]} />
            <Bar dataKey="dolor" fill="hsl(var(--dashboard-sidebar))" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export const DashboardLineChart = () => {
  return (
    <div className="bg-dashboard-card rounded-xl p-6 shadow-sm border border-border">
      <div className="h-48">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={lineData}>
            <XAxis 
              dataKey="month" 
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: 'hsl(var(--muted-foreground))' }}
            />
            <YAxis hide />
            <Area 
              type="monotone" 
              dataKey="value" 
              stroke="hsl(var(--brand-orange))" 
              fill="hsl(var(--brand-orange))"
              fillOpacity={0.1}
              strokeWidth={3}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};