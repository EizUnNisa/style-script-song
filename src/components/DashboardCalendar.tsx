import { Calendar } from "@/components/ui/calendar";
import { useState } from "react";
import { Button } from "@/components/ui/button";

export const DashboardCalendar = () => {
  const [date, setDate] = useState<Date | undefined>(new Date());

  return (
    <div className="bg-dashboard-card rounded-xl p-6 shadow-sm border border-border">
      {/* Progress Ring */}
      <div className="flex items-center justify-center mb-6">
        <div className="relative w-24 h-24">
          <svg className="w-24 h-24 transform -rotate-90" viewBox="0 0 36 36">
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="hsl(var(--muted))"
              strokeWidth="2"
            />
            <path
              d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
              fill="none"
              stroke="hsl(var(--brand-orange))"
              strokeWidth="2"
              strokeDasharray="45, 100"
              strokeLinecap="round"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <span className="text-xl font-bold text-dashboard-card-foreground">45%</span>
          </div>
        </div>
      </div>

      {/* Calendar */}
      <div className="mb-4">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="w-full"
          classNames={{
            months: "flex w-full flex-col sm:flex-row space-y-4 sm:space-x-4 sm:space-y-0 flex-1",
            month: "space-y-4 w-full flex flex-col",
            table: "w-full h-full border-collapse space-y-1",
            head_row: "",
            head_cell: "text-muted-foreground rounded-md w-8 font-normal text-[0.8rem]",
            row: "flex w-full mt-2",
            cell: "relative p-0 text-center text-sm focus-within:relative focus-within:z-20 [&:has([aria-selected])]:bg-accent [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected].day-range-end)]:rounded-r-md",
            day: "h-8 w-8 p-0 font-normal aria-selected:opacity-100 rounded-md hover:bg-accent hover:text-accent-foreground",
            day_range_end: "day-range-end",
            day_selected: "bg-brand-orange text-primary-foreground hover:bg-brand-orange hover:text-primary-foreground focus:bg-brand-orange focus:text-primary-foreground",
            day_today: "bg-accent text-accent-foreground",
            day_outside: "day-outside text-muted-foreground opacity-50 aria-selected:bg-accent/50 aria-selected:text-muted-foreground aria-selected:opacity-30",
            day_disabled: "text-muted-foreground opacity-50",
            day_range_middle: "aria-selected:bg-accent aria-selected:text-accent-foreground",
            day_hidden: "invisible",
          }}
        />
      </div>

      {/* Action Button */}
      <Button className="w-full bg-brand-orange hover:bg-brand-orange-light text-white">
        Check Now
      </Button>

      {/* Quick Info */}
      <div className="mt-4 space-y-2">
        <div className="text-sm text-muted-foreground">Lorem Ipsum</div>
        <div className="text-sm text-muted-foreground">Lorem Ipsum</div>
        <div className="text-sm text-muted-foreground">Lorem Ipsum</div>
      </div>
    </div>
  );
};