import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface ServiceCardProps {
  name: string;
  status: "operational" | "degraded" | "down";
  uptime: number[];
}

const ServiceCard = ({ name, status, uptime }: ServiceCardProps) => {
  const statusConfig = {
    operational: {
      label: "Operational",
      color: "bg-[hsl(var(--success))]",
      badge: "bg-[hsl(var(--success))]/20 text-[hsl(var(--success))] border-[hsl(var(--success))]/50",
    },
    degraded: {
      label: "Degraded",
      color: "bg-[hsl(var(--warning))]",
      badge: "bg-[hsl(var(--warning))]/20 text-[hsl(var(--warning))] border-[hsl(var(--warning))]/50",
    },
    down: {
      label: "Down",
      color: "bg-[hsl(var(--error))]",
      badge: "bg-[hsl(var(--error))]/20 text-[hsl(var(--error))] border-[hsl(var(--error))]/50",
    },
  };

  const config = statusConfig[status];

  return (
    <Card className="relative overflow-hidden border-[hsl(var(--border))] bg-card hover:border-cyber transition-all duration-300 group">
      {/* Heartbeat animation background */}
      <div className="absolute inset-0 opacity-10">
        <svg
          className="w-full h-full animate-heartbeat"
          viewBox="0 0 1000 100"
          preserveAspectRatio="none"
        >
          <path
            d="M0,50 L200,50 L220,20 L240,80 L260,30 L280,70 L300,50 L1000,50"
            stroke="hsl(var(--cyber))"
            strokeWidth="2"
            fill="none"
            vectorEffect="non-scaling-stroke"
          />
        </svg>
      </div>

      {/* Scan line effect */}
      <div className="absolute inset-0 opacity-0 group-hover:opacity-20 pointer-events-none">
        <div className="w-full h-[2px] bg-gradient-to-r from-transparent via-[hsl(var(--cyber))] to-transparent animate-scan" />
      </div>

      <div className="relative p-6 space-y-4">
        <div className="flex items-center justify-between">
          <h3 className="text-xl font-semibold tracking-wide uppercase text-foreground">
            {name}
          </h3>
          <Badge variant="outline" className={config.badge}>
            {config.label}
          </Badge>
        </div>

        {/* Status bar for last 24 hours */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-sm text-muted-foreground">
            <span>Last 24 hours</span>
            <span className="text-[hsl(var(--cyber))]">
              {(uptime.filter((v) => v === 1).length / uptime.length * 100).toFixed(1)}% uptime
            </span>
          </div>
          <div className="flex gap-[2px] h-10">
            {uptime.map((value, index) => (
              <div
                key={index}
                className="flex-1 rounded-[1px] transition-all duration-200 hover:opacity-80"
                style={{
                  backgroundColor:
                    value === 1
                      ? "hsl(var(--success))"
                      : value === 0.5
                      ? "hsl(var(--warning))"
                      : "hsl(var(--error))",
                  opacity: 0.7 + value * 0.3,
                }}
                title={`${(value * 100).toFixed(0)}% uptime`}
              />
            ))}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default ServiceCard;
