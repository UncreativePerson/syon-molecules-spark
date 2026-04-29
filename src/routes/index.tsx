import { createFileRoute, Link } from "@tanstack/react-router";
import heroArt from "@/assets/molecular-hero.jpg";
import moleculeRender from "@/assets/molecule-render.jpg";
import labVials from "@/assets/lab-vials.jpg";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Syon Biosciences — Precision at the Molecular Scale" },
      {
        name: "description",
        content:
          "Syon Biosciences develops novel small molecule therapeutics for diseases of high unmet need.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      {/* HERO */}
      <section className="relative px-6 lg:px-10 pt-20 pb-32 md:pt-32 md:pb-40">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-10">
            <span className="inline-block size-1.5 rounded-full bg-foreground align-middle mr-3" />
            Pioneering small molecule therapeutics
          </p>
          <h1 className="font-display text-balance text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.02] text-foreground">
            Precision at the<br className="hidden sm:block" /> molecular scale.
          </h1>
          <div className="mt-12 grid gap-12 md:grid-cols-12 items-end">
            <p className="md:col-span-6 md:col-start-7 text-lg leading-relaxed text-muted-foreground max-w-xl">
              Syon Biosciences designs novel small molecule therapeutics rooted in mechanistic
              biology and rigorous medicinal chemistry — translating complex science into medicines
              for diseases that demand a deeper answer.
            </p>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-4">
            <Link
              to="/pipeline"
              className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-accent transition-colors"
            >
              Explore the pipeline
            </Link>
            <Link
              to="/science"
              className="inline-flex items-center px-2 py-3 text-sm font-medium text-foreground border-b border-foreground/30 hover:border-foreground transition-colors"
            >
              Our science →
            </Link>
          </div>
        </div>
      </section>

      {/* DIVIDER METRICS */}
      <section className="border-y border-border">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {[
            { k: "4", v: "Programs in development" },
            { k: "12+", v: "Validated targets screened" },
            { k: "2027", v: "First IND-enabling studies" },
            { k: "Boston · Basel", v: "Research footprint" },
          ].map((m) => (
            <div key={m.v} className="px-6 py-10 first:pl-0 last:pr-0">
              <div className="font-display text-3xl md:text-4xl text-foreground">{m.k}</div>
              <div className="mt-2 text-xs uppercase tracking-[0.16em] text-muted-foreground">
                {m.v}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 1 — image left, copy right */}
      <section className="px-6 lg:px-10 py-32">
        <div className="mx-auto max-w-7xl grid gap-16 md:gap-24 md:grid-cols-12 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted ring-1 ring-border">
              <img
                src={moleculeRender}
                alt="Abstract rendering of a small molecule"
                width={1024}
                height={1280}
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Fig. 01 — Lead candidate, SYN-104
            </p>
          </div>
          <div className="md:col-span-6 md:col-start-7">
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-6">
              Our approach
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] text-foreground text-balance">
              Mechanism first.<br />Molecule next.
            </h2>
            <p className="mt-8 text-base md:text-lg leading-relaxed text-muted-foreground">
              We start where biology breaks. Each program begins with a precise, falsifiable
              hypothesis about a disease pathway — and only then do we engineer the chemistry to
              act on it. The result: small molecules with a clear reason to exist, and a clear
              reason to work.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2 text-sm">
              {[
                "Structure-guided medicinal chemistry",
                "Quantitative target engagement",
                "Translational pharmacology",
                "Patient-anchored biomarkers",
              ].map((p) => (
                <li key={p} className="flex gap-3 items-start text-foreground">
                  <span className="mt-1.5 size-1.5 rounded-full bg-foreground shrink-0" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* PULL QUOTE */}
      <section className="px-6 lg:px-10 py-24 bg-secondary">
        <div className="mx-auto max-w-4xl text-center">
          <p className="font-display text-3xl md:text-4xl lg:text-5xl leading-[1.2] text-balance text-foreground">
            “The hardest medicines are the ones the body almost makes itself —
            small, selective, and patient enough to wait for the right cell.”
          </p>
          <p className="mt-8 text-xs uppercase tracking-[0.22em] text-muted-foreground">
            Dr. Helena Voss · Chief Scientific Officer
          </p>
        </div>
      </section>

      {/* SECTION 2 — copy left, image right */}
      <section className="px-6 lg:px-10 py-32">
        <div className="mx-auto max-w-7xl grid gap-16 md:gap-24 md:grid-cols-12 items-center">
          <div className="md:col-span-6">
            <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-6">
              Therapeutic focus
            </p>
            <h2 className="font-display text-4xl md:text-5xl leading-[1.1] text-foreground text-balance">
              Where small molecules still do<br />what biologics cannot.
            </h2>
            <p className="mt-8 text-base md:text-lg leading-relaxed text-muted-foreground">
              Our programs concentrate on intracellular targets in oncology, neuroinflammation,
              and rare metabolic disease — places where reaching inside the cell, crossing
              membranes, and dosing orally remain the difference between a discovery and a
              medicine.
            </p>
            <div className="mt-10">
              <Link
                to="/pipeline"
                className="text-sm font-medium text-foreground border-b border-foreground/30 hover:border-foreground transition-colors pb-1"
              >
                See the pipeline →
              </Link>
            </div>
          </div>
          <div className="md:col-span-5 md:col-start-8">
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted ring-1 ring-border">
              <img
                src={labVials}
                alt="Laboratory glass vials"
                width={1024}
                height={1280}
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
            <p className="mt-3 text-xs uppercase tracking-[0.18em] text-muted-foreground">
              Fig. 02 — Process chemistry, Cambridge
            </p>
          </div>
        </div>
      </section>

      {/* CLOSING BAND */}
      <section className="relative px-6 lg:px-10 py-32 border-t border-border">
        <div className="absolute inset-0 -z-10 opacity-[0.06] pointer-events-none">
          <img
            src={heroArt}
            alt=""
            aria-hidden="true"
            width={1536}
            height={1152}
            loading="lazy"
            className="size-full object-cover"
          />
        </div>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl leading-[1.1] text-foreground text-balance">
            We are building medicines for the next decade — not the next quarter.
          </h2>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Link
              to="/about"
              className="inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background hover:bg-accent transition-colors"
            >
              About Syon
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center rounded-full border border-foreground px-6 py-3 text-sm font-medium text-foreground hover:bg-foreground hover:text-background transition-colors"
            >
              Partner with us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
