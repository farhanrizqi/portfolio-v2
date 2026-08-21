export function Footer() {
  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted-foreground md:flex-row">
        <p>© {new Date().getFullYear()} Farhan Rizqi Aminullah</p>
        <p>Built with Next.js, Tailwind CSS & shadcn/ui</p>
      </div>
    </footer>
  );
}
