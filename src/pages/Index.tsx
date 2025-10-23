import ServiceCard from "@/components/ServiceCard";
import { Activity } from "lucide-react";

const Index = () => {
  // Generate fake uptime data for last 24 hours (24 data points)
  const generateUptimeData = (baseUptime: number) => {
    return Array.from({ length: 24 }, () => {
      const random = Math.random();
      if (random > baseUptime) return 0;
      if (random > baseUptime - 0.1) return 0.5;
      return 1;
    });
  };

  const services = [
    {
      name: "Mail",
      status: "operational" as const,
      uptime: generateUptimeData(0.99),
    },
    {
      name: "Automation",
      status: "operational" as const,
      uptime: generateUptimeData(0.98),
    },
    {
      name: "Botnet",
      status: "degraded" as const,
      uptime: generateUptimeData(0.85),
    },
  ];

  return (
    <div className="min-h-screen bg-background bg-grid">
      {/* Overlay gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />

      <main className="relative container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <header className="mb-16 text-center space-y-6">
          <div className="relative inline-block">
            {/* ECG line animation behind title */}
            <div className="absolute inset-0 -inset-x-20 flex items-center justify-center opacity-20">
              <svg
                className="w-full h-24 animate-heartbeat"
                viewBox="0 0 1200 100"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,50 L300,50 L320,20 L340,80 L360,30 L380,70 L400,50 L500,50 L520,20 L540,80 L560,30 L580,70 L600,50 L700,50 L720,20 L740,80 L760,30 L780,70 L800,50 L1200,50"
                  stroke="hsl(var(--cyber))"
                  strokeWidth="2"
                  fill="none"
                  vectorEffect="non-scaling-stroke"
                />
              </svg>
            </div>
            
            <div className="relative inline-flex items-center justify-center gap-3 mb-4">
              <Activity className="w-8 h-8 text-[hsl(var(--cyber))] animate-pulse-glow" />
              <h1 className="text-6xl md:text-7xl font-bold tracking-wider glow-cyber text-[hsl(var(--cyber))]">
                SWARM
              </h1>
              <Activity className="w-8 h-8 text-[hsl(var(--cyber))] animate-pulse-glow" />
            </div>
          </div>
          
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <div className="h-[1px] w-16 bg-gradient-to-r from-transparent to-[hsl(var(--cyber))]" />
            <span className="text-sm uppercase tracking-widest">System Status Monitor</span>
            <div className="h-[1px] w-16 bg-gradient-to-l from-transparent to-[hsl(var(--cyber))]" />
          </div>
        </header>

        {/* Services Status List */}
        <section className="space-y-4" role="region" aria-label="Service status list">
          <h2 className="sr-only">Service Status</h2>
          {services.map((service) => (
            <ServiceCard
              key={service.name}
              name={service.name}
              status={service.status}
              uptime={service.uptime}
            />
          ))}
        </section>

        {/* Footer Info */}
        <footer className="mt-16 text-center">
          <p className="text-sm text-muted-foreground">
            <span className="inline-block w-2 h-2 bg-[hsl(var(--cyber))] rounded-full animate-pulse mr-2" />
            Monitoring active • Updates every 60s
          </p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
