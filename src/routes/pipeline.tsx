import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/pipeline")({
  head: () => ({
    meta: [
      { title: "Pipeline — Syon Biosciences" },
      {
        name: "description",
        content:
          "Syon's small molecule pipeline spans oncology, neuroinflammation, and rare metabolic disease — from discovery through IND-enabling studies.",
      },
      { property: "og:title", content: "Pipeline — Syon Biosciences" },
      {
        property: "og:description",
        content: "Programs in oncology, neuroinflammation, and rare metabolic disease.",
      },
    ],
  }),
  component: PipelinePage,
});

type Stage = "Discovery" | "Lead Opt." | "IND-Enabling" | "Phase 1";
const stages: Stage[] = ["Discovery", "Lead Opt.", "IND-Enabling", "Phase 1"];

const programs: Array<{
  code: string;
  target: string;
  area: string;
  indication: string;
  stage: Stage;
}> = [
  {
    code: "SYN-104",
    target: "Allosteric SHP2",
    area: "Oncology",
    indication: "RAS-driven solid tumors",
    stage: "IND-Enabling",
  },
  {
    code: "SYN-218",
    target: "Selective TYK2 JH2",
    area: "Neuroinflammation",
    indication: "Progressive MS",
    stage: "Lead Opt.",
  },
  {
    code: "SYN-330",
    target: "GCase chaperone",
    area: "Rare metabolic",
    indication: "Gaucher / GBA-PD",
    stage: "Lead Opt.",
  },
  {
    code: "SYN-441",
    target: "Brain-penetrant LRRK2",
    area: "Neuroinflammation",
    indication: "Parkinson's disease",
    stage: "Discovery",
  },
];

function StageBar({ stage }: { stage: Stage }) {
  const idx = stages.indexOf(stage);
  return (
    <div className="grid grid-cols-4 gap-1">
      {stages.map((s, i) => (
        <div key={s} className="space-y-2">
          <div
            className={`h-1.5 rounded-full ${
              i <= idx ? "bg-foreground" : "bg-foreground/15"
            }`}
          />
          <div
            className={`text-[10px] uppercase tracking-[0.14em] ${
              i === idx ? "text-foreground font-medium" : "text-muted-foreground"
            }`}
          >
            {s}
          </div>
        </div>
      ))}
    </div>
  );
}

function PipelinePage() {
  return (
    <>
      <section className="px-6 lg:px-10 pt-20 pb-16 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-8">
            Pipeline
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-foreground text-balance max-w-4xl">
            Four programs. One discipline.
          </h1>
          <p className="mt-8 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Every Syon program is built on a falsifiable hypothesis, a tractable target, and a
            patient population we can identify before we ever dose. Below is where each
            stands today.
          </p>
        </div>
      </section>

      <section className="px-6 lg:px-10 pb-32">
        <div className="mx-auto max-w-6xl">
          <div className="hairline mb-2" />
          <div className="grid grid-cols-12 gap-4 px-1 py-4 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
            <div className="col-span-2">Program</div>
            <div className="col-span-3">Target</div>
            <div className="col-span-3">Indication</div>
            <div className="col-span-4">Stage</div>
          </div>
          <ul className="divide-y divide-border border-y border-border">
            {programs.map((p) => (
              <li
                key={p.code}
                className="grid grid-cols-12 gap-4 items-center px-1 py-8 hover:bg-secondary/40 transition-colors"
              >
                <div className="col-span-12 md:col-span-2">
                  <div className="font-display text-2xl text-foreground">{p.code}</div>
                  <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground mt-1">
                    {p.area}
                  </div>
                </div>
                <div className="col-span-6 md:col-span-3 text-sm text-foreground">
                  {p.target}
                </div>
                <div className="col-span-6 md:col-span-3 text-sm text-muted-foreground">
                  {p.indication}
                </div>
                <div className="col-span-12 md:col-span-4">
                  <StageBar stage={p.stage} />
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-8 text-xs text-muted-foreground max-w-2xl leading-relaxed">
            Programs and stages reflect Syon's internal assessment as of the current quarter.
            Forward-looking statements are subject to scientific and regulatory risk.
          </p>
        </div>
      </section>
    </>
  );
}
