import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { ArrowUpRight } from "lucide-react";
import { projects as allProjects } from "@/lib/projects";

const roles = allProjects
  .filter((p) => p.type === "professional")
  .map((p) => ({
    title: p.title,
    subtitle: p.tag,
    desc: p.summary,
    stack: p.technology.slice(0, 3),
    href: `/work/${p.slug}`,
    image: p.image,
  }));

export function ProfessionalExperience() {
  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Professional Experience
      </p>
      <h2 className="mb-10 font-display text-2xl font-semibold tracking-tight md:text-3xl">
        Proof I can handle serious production systems
      </h2>

      <div className="grid gap-6 md:grid-cols-2">
        {roles.map((r) => (
          <Link key={r.title} href={r.href} className="group block">
            <Card className="h-full p-6 transition-shadow group-hover:shadow-md">
              <div className="relative mb-4 h-32 overflow-hidden rounded-md bg-foreground/[0.04]">
                <Image src={r.image} alt={r.title} fill className="object-cover" />
              </div>
              <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                {r.subtitle}
              </p>
              <h3 className="mb-2 font-display text-lg font-semibold">{r.title}</h3>
              <p className="mb-4 text-sm text-muted-foreground">{r.desc}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {r.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-full border border-border px-2.5 py-0.5 text-xs text-muted-foreground"
                  >
                    {s}
                  </span>
                ))}
              </div>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-accent">
                Read case study <ArrowUpRight className="size-3.5" />
              </span>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
