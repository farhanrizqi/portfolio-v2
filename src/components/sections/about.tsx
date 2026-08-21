import { Card } from "@/components/ui/card";

export function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20">
      <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        About
      </p>
      <Card className="p-6 md:p-10">
        <div className="grid gap-10 md:grid-cols-[200px_1fr] md:items-start">
          <div className="aspect-square w-40 rounded-lg bg-[url(/images/farhan1.webp)] bg-cover bg-center md:w-full" />
          <div className="max-w-xl">
            <h2 className="mb-4 font-display text-2xl font-semibold tracking-tight md:text-3xl">
              Hi, I&apos;m Farhan.
            </h2>
            <p className="mb-4 text-muted-foreground">
              I&apos;m a frontend developer with professional experience building complex,
              production-scale systems — task management platforms, enterprise treasury
              tools, dashboards used by real teams every day.
            </p>
            <p className="text-muted-foreground">
              Alongside that, I take on smaller, independent projects for businesses and
              individuals who need a landing page, a business website, or a modern web
              application — and want it built well the first time.
            </p>
          </div>
        </div>
      </Card>
    </section>
  );
}
