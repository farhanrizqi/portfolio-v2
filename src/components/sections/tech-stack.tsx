const stack = [
  "React",
  "TypeScript",
  "JavaScript",
  "Redux Toolkit",
  "React Query",
  "Tailwind CSS",
  "REST API",
];

export function TechStack() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-16">
      <p className="mb-5 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Tech Stack
      </p>
      <div className="flex flex-wrap gap-2.5">
        {stack.map((t) => (
          <span
            key={t}
            className="rounded-full border border-border px-4 py-1.5 text-sm text-foreground"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}
