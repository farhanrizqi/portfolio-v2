import Link from "next/link";
import { Button } from "@/components/ui/button";

const links = [
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#services", label: "Services" },
  { href: "#about", label: "About" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur">
      <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
        <Link href="#" className="font-display text-sm font-semibold tracking-tight">
          Farhan Rizqi
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </Link>
          ))}
        </nav>
        <Button size="sm" asChild>
          <Link href="#contact">Let&apos;s Talk</Link>
        </Button>
      </div>
    </header>
  );
}
