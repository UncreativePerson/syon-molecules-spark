import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — Syon Biosciences" },
      {
        name: "description",
        content:
          "Get in touch with Syon Biosciences about partnerships, investment, or careers in small molecule drug development.",
      },
      { property: "og:title", content: "Contact — Syon Biosciences" },
      {
        property: "og:description",
        content: "Partnerships, investment, and careers at Syon Biosciences.",
      },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  const [sent, setSent] = useState(false);

  return (
    <>
      <section className="px-6 lg:px-10 pt-20 pb-16 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-8">
            Contact
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-foreground text-balance max-w-4xl">
            Let's talk about the work.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            We respond to every serious inquiry — partnerships, investment, scientific
            collaboration, and careers. If your message belongs in front of our team, it will
            reach them.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-32">
        <div className="mx-auto max-w-6xl grid gap-16 md:grid-cols-12">
          <div className="md:col-span-4 space-y-10 text-sm">
            {[
              ["Partnerships", "partnerships@syonbio.com"],
              ["Investors", "investors@syonbio.com"],
              ["Careers", "careers@syonbio.com"],
              ["Press", "press@syonbio.com"],
            ].map(([k, v]) => (
              <div key={k} className="border-t border-border pt-4">
                <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">{k}</div>
                <a
                  href={`mailto:${v}`}
                  className="mt-2 block font-display text-xl text-foreground hover:underline underline-offset-4"
                >
                  {v}
                </a>
              </div>
            ))}
            <div className="border-t border-border pt-4">
              <div className="text-xs uppercase tracking-[0.18em] text-muted-foreground">
                Headquarters
              </div>
              <p className="mt-2 leading-relaxed text-foreground">
                One Kendall Square<br />Cambridge, MA 02139<br />United States
              </p>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setSent(true);
            }}
            className="md:col-span-8 space-y-8"
          >
            <div className="grid gap-8 md:grid-cols-2">
              <Field label="Name" name="name" required />
              <Field label="Organization" name="org" />
              <Field label="Email" name="email" type="email" required />
              <Field label="Subject" name="subject" />
            </div>
            <div>
              <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
                Message
              </label>
              <textarea
                name="message"
                rows={6}
                required
                className="w-full bg-transparent border-b border-foreground/30 focus:border-foreground outline-none py-2 text-foreground placeholder:text-muted-foreground/60 resize-none transition-colors"
              />
            </div>
            <div className="flex items-center gap-6">
              <button
                type="submit"
                className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-accent transition-colors disabled:opacity-50"
                disabled={sent}
              >
                {sent ? "Message received" : "Send message"}
              </button>
              {sent && (
                <p className="text-sm text-muted-foreground">
                  Thank you — we'll be in touch shortly.
                </p>
              )}
            </div>
          </form>
        </div>
      </section>
    </>
  );
}

function Field({
  label,
  name,
  type = "text",
  required,
}: {
  label: string;
  name: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-xs uppercase tracking-[0.18em] text-muted-foreground mb-3">
        {label}
        {required && <span className="text-foreground/50"> *</span>}
      </label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full bg-transparent border-b border-foreground/30 focus:border-foreground outline-none py-2 text-foreground transition-colors"
      />
    </div>
  );
}
