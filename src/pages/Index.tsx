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
      {/* Hexagonal pattern overlay */}
      <div className="fixed inset-0 bg-hex-pattern opacity-20 pointer-events-none" />
      
      {/* Network mesh overlay */}
      <div className="fixed inset-0 bg-network-mesh opacity-30 pointer-events-none" />
      
      {/* Scanlines effect */}
      <div className="fixed inset-0 bg-scanlines opacity-10 pointer-events-none" />
      
      {/* Animated data streams */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-[hsl(var(--cyber))] to-transparent opacity-30 animate-data-stream-1" />
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-[hsl(var(--cyber))] to-transparent opacity-30 animate-data-stream-2" />
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-[hsl(var(--cyber))] to-transparent opacity-30 animate-data-stream-3" />
      </div>
      
      {/* Floating particles */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-[hsl(var(--cyber))] rounded-full opacity-40 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${15 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>
      
      {/* Overlay gradient */}
      <div className="fixed inset-0 bg-gradient-to-b from-background via-background/95 to-background pointer-events-none" />
      
      {/* Corner brackets UI */}
      <div className="fixed top-4 left-4 w-16 h-16 border-l-2 border-t-2 border-[hsl(var(--cyber))] opacity-50 pointer-events-none" />
      <div className="fixed top-4 right-4 w-16 h-16 border-r-2 border-t-2 border-[hsl(var(--cyber))] opacity-50 pointer-events-none" />
      <div className="fixed bottom-4 left-4 w-16 h-16 border-l-2 border-b-2 border-[hsl(var(--cyber))] opacity-50 pointer-events-none" />
      <div className="fixed bottom-4 right-4 w-16 h-16 border-r-2 border-b-2 border-[hsl(var(--cyber))] opacity-50 pointer-events-none" />
      
      {/* Terminal-style timestamp */}
      <div className="fixed top-6 left-24 text-xs text-[hsl(var(--cyber))] opacity-60 font-mono pointer-events-none">
        [{new Date().toISOString().split('T')[0]}]
      </div>
      <div className="fixed top-6 right-24 text-xs text-[hsl(var(--cyber))] opacity-60 font-mono pointer-events-none">
        [SECURE-CONNECTION]
      </div>

      <main className="relative container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <header className="mb-16 text-center space-y-6">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Activity className="w-8 h-8 text-[hsl(var(--cyber))] animate-pulse-glow" />
            <h1 className="text-6xl md:text-7xl font-bold tracking-wider glow-cyber text-[hsl(var(--cyber))]">
              SWARM
            </h1>
            <Activity className="w-8 h-8 text-[hsl(var(--cyber))] animate-pulse-glow" />
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
