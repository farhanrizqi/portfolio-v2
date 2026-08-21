import { Card } from "@/components/ui/card";
import { LayoutPanelTop, Building2, LayoutDashboard, Code2 } from "lucide-react";

const services = [
  {
    num: "01",
    icon: LayoutPanelTop,
    title: "Landing Pages",
    desc: "For products, services, campaigns, and promotions — built for clear CTAs, fast loading, and strong first impressions.",
  },
  {
    num: "02",
    icon: Building2,
    title: "Business Websites",
    desc: "Home, About, Services, Products, Gallery, Contact — a professional online presence for small businesses and local brands.",
  },
  {
    num: "03",
    icon: LayoutDashboard,
    title: "Web Applications",
    desc: "CMS, admin dashboards, internal tools, task management, and reporting systems for businesses that need more than a static site.",
  },
  {
    num: "04",
    icon: Code2,
    title: "Frontend Development",
    desc: "For teams with a backend, API, or design already in place — I build the frontend on top: React, TypeScript, and REST integration.",
  },
];

export function Services() {
  return (
    <section id="services" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Services
      </p>
      <h2 className="mb-10 font-display text-2xl font-semibold tracking-tight md:text-3xl">
        What I can do for you
      </h2>

      <div className="grid gap-5 sm:grid-cols-2">
        {services.map((s) => (
          <Card key={s.num} className="p-6 transition-shadow hover:shadow-md">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex size-10 items-center justify-center rounded-md bg-accent/10 text-accent">
                <s.icon className="size-5" />
              </div>
              <span className="text-xs text-muted-foreground">{s.num}</span>
            </div>
            <h3 className="mb-2 font-display text-lg font-semibold">{s.title}</h3>
            <p className="text-sm text-muted-foreground">{s.desc}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}
