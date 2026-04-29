import { createFileRoute } from "@tanstack/react-router";
import labVials from "@/assets/lab-vials.jpg";

export const Route = createFileRoute("/about")({
  head: () => ({
    meta: [
      { title: "About — Syon Biosciences" },
      {
        name: "description",
        content:
          "Syon Biosciences was founded by chemists, biologists, and clinicians who believe small molecule discovery still has its best decade ahead.",
      },
      { property: "og:title", content: "About — Syon Biosciences" },
      {
        property: "og:description",
        content: "The people, principles, and patient focus behind Syon Biosciences.",
      },
    ],
  }),
  component: AboutPage,
});

const team = [
  {
    name: "Dr. Helena Voss",
    role: "Co-founder & Chief Scientific Officer",
    bio: "Former Head of Medicinal Chemistry at a leading oncology biotech. 20+ years designing small molecules across kinases, phosphatases, and protein–protein interactions.",
  },
  {
    name: "Dr. Marcus Aaltonen",
    role: "Co-founder & Chief Executive Officer",
    bio: "Translational physician-scientist. Led early clinical development of three approved therapies in inflammation and rare disease before founding Syon.",
  },
  {
    name: "Dr. Priya Raman",
    role: "VP, Structural Biology",
    bio: "Cryo-EM and crystallography specialist. Built the structural platform that anchors Syon's lead-finding engine across all four programs.",
  },
  {
    name: "Dr. Theo Lambert",
    role: "VP, Translational Sciences",
    bio: "Pharmacologist focused on biomarker-driven trials. Integrates patient stratification into every program before lead optimization closes.",
  },
];

function AboutPage() {
  return (
    <>
      <section className="px-6 lg:px-10 pt-20 pb-16 md:pt-28">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-8">
            About
          </p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] text-foreground text-balance max-w-4xl">
            Founded on the belief that small molecules still matter most.
          </h1>
          <div className="mt-12 grid gap-12 md:grid-cols-12">
            <div className="md:col-span-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                Syon Biosciences was founded in 2023 by a team of chemists, biologists, and
                clinicians who had spent careers watching extraordinary biology fail to become
                medicine — almost always for the same reason. The molecule was wrong.
              </p>
            </div>
            <div className="md:col-span-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                We started Syon to close that gap. Not with a platform that promises everything,
                but with a discipline that promises one thing: every program we run will earn
                the right to the next stage on the merits of its molecule and the strength of
                its mechanism.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-24">
        <div className="mx-auto max-w-6xl grid gap-12 md:gap-20 md:grid-cols-12 items-center">
          <div className="md:col-span-5">
            <div className="aspect-[4/5] overflow-hidden rounded-sm bg-muted ring-1 ring-border">
              <img
                src={labVials}
                alt="Glass vials in the Syon laboratory"
                width={1024}
                height={1280}
                loading="lazy"
                className="size-full object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-7">
            <h2 className="font-display text-3xl md:text-4xl text-foreground text-balance">
              Our principles.
            </h2>
            <dl className="mt-10 space-y-8">
              {[
                ["Patients first", "We work backward from the patient. The clinic is the only meaningful endpoint."],
                ["Mechanism over momentum", "We will pause a program rather than advance one that has not earned the next step."],
                ["Build slowly, finish fast", "Discovery is patient. Development should not be."],
                ["No theatre", "Honest data, honest timelines, honest disagreement."],
              ].map(([t, d]) => (
                <div key={t} className="grid grid-cols-12 gap-4 border-t border-border pt-6">
                  <dt className="col-span-12 md:col-span-4 font-display text-xl text-foreground">
                    {t}
                  </dt>
                  <dd className="col-span-12 md:col-span-8 text-muted-foreground leading-relaxed">
                    {d}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      <section className="px-6 lg:px-10 py-24 border-t border-border">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs uppercase tracking-[0.28em] text-muted-foreground mb-8">
            Leadership
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground text-balance max-w-3xl">
            The people behind the molecules.
          </h2>
          <ul className="mt-16 grid gap-12 md:grid-cols-2">
            {team.map((m) => (
              <li key={m.name} className="border-t border-border pt-6">
                <div className="font-display text-2xl text-foreground">{m.name}</div>
                <div className="mt-1 text-xs uppercase tracking-[0.18em] text-muted-foreground">
                  {m.role}
                </div>
                <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{m.bio}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
