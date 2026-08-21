import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUpRight } from "lucide-react";

export function Hero() {
  return (
    <section className="mx-auto flex min-h-[80vh] max-w-5xl flex-col justify-center px-6 pb-16 pt-20 md:min-h-[85vh] md:pt-28">
      <p className="mb-5 text-sm font-medium uppercase tracking-widest text-muted-foreground">
        Frontend Developer
      </p>
      <h1 className="max-w-3xl font-display text-4xl font-semibold leading-[1.1] tracking-tight md:text-6xl">
        I build modern digital experiences for businesses and individuals.
      </h1>
      <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
        From landing pages to production-grade web applications — I turn business
        requirements into fast, clean, dependable frontends.
      </p>
      <div className="mt-9 flex flex-wrap gap-3">
        <Button size="lg" asChild>
          <Link href="#work">
            View My Work <ArrowUpRight className="size-4" />
          </Link>
        </Button>
        <Button size="lg" variant="outline" asChild>
          <Link href="#contact">Let&apos;s Work Together</Link>
        </Button>
      </div>
    </section>
  );
}
