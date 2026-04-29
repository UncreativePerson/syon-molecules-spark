import { createFileRoute } from "@tanstack/react-router";
import moleculeRender from "@/assets/molecule-render.jpg";

export const Route = createFileRoute("/science")({
  head: () => ({
    meta: [
      { title: "Science — Syon Biosciences" },
      {
        name: "description",
        content:
          "Our scientific platform integrates structural biology, computational chemistry, and translational pharmacology to design selective small molecules.",
      },
      { property: "og:title", content: "Science — Syon Biosciences" },
      {
        property: "og:description",
        content: "How Syon designs selective small molecules — from target to candidate.",
      },
    ],
  }),
  component: SciencePage,
});

const pillars = [
  {
    n: "01",
    title: "Mechanistic biology",
    body: "We invest deeply in understanding why a target matters in a specific patient context — using primary cells, patient-derived models, and quantitative target engagement before chemistry begins.",
  },
  {
    n: "02",
    title: "Structure-guided design",
    body: "Cryo-EM, X-ray crystallography, and physics-based simulations let us see binding sites the field has overlooked — and design selective ligands the field could not.",
  },
  {
    n: "03",
    title: "Medicinal chemistry",
    body: "Our chemists optimize for the properties that decide a drug's fate: selectivity, exposure, tissue distribution, and a safety margin earned in vivo, not assumed in silico.",
  },
  {
    n: "04",
    title: "Translational pharmacology",
    body: "Every program carries a translational plan from day one — biomarkers, PK/PD models, and patient-stratification strategies that survive contact with the clinic.",
  },
];

function SciencePage() {
  return (
    <>
      <section className="px-6 lg:px-10 pt-20 pb-16 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-8">
            Science
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-foreground text-balance max-w-4xl">
            A small molecule is an argument written in atoms.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Our platform is not a black box. It is a discipline — a sequence of questions we ask
            of every target, every series, every candidate, in the same order, every time.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-24">
        <div className="mx-auto max-w-6xl grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="aspect-square overflow-hidden rounded-sm bg-muted ring-1 ring-border md:sticky md:top-28">
              <img
                src={moleculeRender}
                alt="Small molecule visualization"
                width={1024}
                height={1024}
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <ul className="space-y-12">
              {pillars.map((p) => (
                <li key={p.n}>
                  <div className="flex items-baseline gap-6 mb-3">
                    <span className="font-display text-xl text-muted-foreground">{p.n}</span>
                    <h2 className="font-display text-2xl md:text-3xl text-foreground">
                      {p.title}
                    </h2>
                  </div>
                  <p className="text-base leading-relaxed text-muted-foreground md:pl-14">
                    {p.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-24 bg-secondary">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display text-3xl md:text-4xl text-foreground text-balance">
            What we will not do.
          </h2>
          <div className="mt-8 grid gap-6 md:grid-cols-2 text-sm leading-relaxed text-muted-foreground">
            <p>
              We will not advance a molecule because the screen was easy. We will not chase
              indications without a biomarker. We will not call a tool compound a drug.
            </p>
            <p>
              And we will not confuse activity in a dish with benefit in a patient. The clinic is
              the only meaningful endpoint, and our discovery work is built backward from it.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
