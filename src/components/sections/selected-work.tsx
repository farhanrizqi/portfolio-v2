import Link from "next/link";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowUpRight } from "lucide-react";
import { projects as allProjects } from "@/lib/projects";

const projects = allProjects
  .filter((p) => p.type === "independent")
  .map((p) => ({
    tag: p.tag,
    title: p.title,
    desc: p.summary,
    href: `/work/${p.slug}`,
    image: p.image,
  }));

export function SelectedWork() {
  return (
    <section id="work" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Selected Work
          </p>
          <h2 className="font-display text-2xl font-semibold tracking-tight md:text-3xl">
            What I can build for you
          </h2>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-3">
        {projects.map((p) => (
          <Link key={p.title} href={p.href} className="group block">
            <Card className="h-full transition-shadow group-hover:shadow-md">
              <div className="relative h-40 bg-foreground/[0.04]">
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  className="object-cover"
                />
                <Badge variant="default" className="absolute left-3 top-3">
                  Concept Project
                </Badge>
              </div>
              <div className="p-5">
                <p className="mb-1 text-xs font-medium uppercase tracking-wide text-muted-foreground">
                  {p.tag}
                </p>
                <h3 className="mb-2 font-display text-base font-semibold leading-snug">
                  {p.title}
                </h3>
                <p className="text-sm text-muted-foreground">{p.desc}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  View case study <ArrowUpRight className="size-3.5" />
                </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
      <p className="mt-4 text-xs text-muted-foreground">
        Concept projects built to demonstrate capability — not commissioned client work.
      </p>
    </section>
  );
}
