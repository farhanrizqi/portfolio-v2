"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { Card } from "../ui/card";

// Set this to your actual WhatsApp number in international format, no
// leading +, e.g. "6281234567890" for an Indonesian number.
const WHATSAPP_NUMBER = "6289657514884";

export function Contact() {
  const [submitting, setSubmitting] = useState(false);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);

    const form = new FormData(e.currentTarget);
    const name = form.get("name")?.toString().trim() || "";
    const projectType = form.get("projectType")?.toString() || "";
    const budget = form.get("budget")?.toString() || "";
    const message = form.get("message")?.toString().trim() || "";

    const lines = [
      `Hi, I'm ${name || "..."}.`,
      projectType && `Project type: ${projectType}`,
      budget && `Budget range: ${budget}`,
      message && `\n${message}`,
    ].filter(Boolean);

    const text = encodeURIComponent(lines.join("\n"));
    const url = `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;

    window.open(url, "_blank", "noopener,noreferrer");
    setSubmitting(false);
  }

  return (
    <section
      id="contact"
      className="mx-auto max-w-5xl scroll-mt-20 px-6 py-20 "
    >
      <Card className="p-6 md:p-10 bg-accent border border-border">
        <div className="rounded-xl border border-border bg-card p-8 md:p-12">
          <p className="mb-2 text-sm font-medium uppercase tracking-widest text-muted-foreground">
            Contact
          </p>
          <h2 className="mb-3 max-w-lg font-display text-2xl font-semibold tracking-tight md:text-3xl">
            Have a project in mind? Let&apos;s talk about it.
          </h2>
          <p className="mb-8 text-sm text-muted-foreground">
            Usually reply within 24 hours.
          </p>

          <form className="grid gap-4 md:grid-cols-2" onSubmit={handleSubmit}>
            <input
              className="h-11 rounded-md border border-border bg-background px-4 text-sm outline-none focus:border-accent"
              placeholder="Your name"
              name="name"
              required
            />
            <select
              className="h-11 rounded-md border border-border bg-background px-4 text-sm text-muted-foreground outline-none focus:border-accent"
              name="projectType"
              defaultValue=""
              required
            >
              <option value="" disabled>
                Project type
              </option>
              <option>Landing Page</option>
              <option>Business Website</option>
              <option>Web Application</option>
              <option>Frontend Development</option>
              <option>Not sure yet</option>
            </select>
            <select
              className="h-11 rounded-md border border-border bg-background px-4 text-sm text-muted-foreground outline-none focus:border-accent md:col-span-2"
              name="budget"
              defaultValue=""
            >
              <option value="" disabled>
                Rough budget range
              </option>
              <option>Under Rp 3,000,000</option>
              <option>Rp 3,000,000 – Rp 10,000,000</option>
              <option>Rp 10,000,000+</option>
              <option>Not sure yet</option>
            </select>
            <textarea
              className="h-24 rounded-md border border-border bg-background px-4 py-3 text-sm outline-none focus:border-accent md:col-span-2"
              placeholder="Tell me a bit about your project"
              name="message"
            />
            <Button
              type="submit"
              size="lg"
              disabled={submitting}
              className="w-full bg-[#25D366] hover:opacity-90 md:col-span-2"
            >
              <MessageCircle className="size-4" />
              Continue on WhatsApp
            </Button>
          </form>
        </div>
      </Card>
    </section>
  );
}
