import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { getProjectBySlug, projects } from "@/lib/projects";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";

export function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) return {};
  return {
    title: project.title,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
      type: "article",
    },
  };
}

function Block({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="border-t border-border py-8 first:border-t-0 first:pt-0">
      <h2 className="mb-3 font-display text-sm font-semibold uppercase tracking-widest text-muted-foreground">
        {label}
      </h2>
      <div className="max-w-2xl text-foreground/90">{children}</div>
    </div>
  );
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = getProjectBySlug(slug);
  if (!project) notFound();

  return (
    <main className="flex-1">
      <div className="mx-auto max-w-3xl px-6 py-16">
        <Link
          href="/#work"
          className="mb-8 inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground"
        >
          <ArrowLeft className="size-3.5" /> Back to work
        </Link>

        <div className="mb-3 flex items-center gap-2">
          <Badge variant="outline">{project.tag}</Badge>
          {project.type === "independent" && (
            <Badge variant="default">Concept Project</Badge>
          )}
        </div>

        <h1 className="mb-4 font-display text-3xl font-semibold tracking-tight md:text-4xl">
          {project.title}
        </h1>
        <p className="mb-10 text-lg text-muted-foreground">{project.summary}</p>

        <div className="relative mb-10 h-64 overflow-hidden rounded-lg bg-foreground/[0.04]">
          <Image src={project.image} alt={project.title} fill className="object-cover" />
        </div>

        <Block label="Overview">
          <p>{project.overview}</p>
        </Block>
        <Block label="The Problem">
          <p>{project.problem}</p>
        </Block>
        <Block label="The Solution">
          <p>{project.solution}</p>
        </Block>
        <Block label="My Role">
          <p>{project.role}</p>
        </Block>
        <Block label="Key Features">
          <ul className="list-inside list-disc space-y-1">
            {project.keyFeatures.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </Block>
        <Block label="Technical Implementation">
          <p>{project.technicalImplementation}</p>
        </Block>
        <Block label="Challenges">
          <p>{project.challenges}</p>
        </Block>
        <Block label="Results / Impact">
          <p>{project.results}</p>
        </Block>
        <Block label="Technology">
          <div className="flex flex-wrap gap-2">
            {project.technology.map((t) => (
              <span
                key={t}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground"
              >
                {t}
              </span>
            ))}
          </div>
        </Block>
      </div>
    </main>
  );
}
