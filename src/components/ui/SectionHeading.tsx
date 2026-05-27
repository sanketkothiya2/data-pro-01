import Reveal from "./Reveal";

export default function SectionHeading({
  index,
  kicker,
  title,
}: {
  index: string;
  kicker: string;
  title: string;
}) {
  return (
    <div className="mb-12 md:mb-16">
      <Reveal className="flex items-center gap-3 font-mono text-sm text-honey">
        <span className="text-amber">{index}</span>
        <span className="h-px w-10 bg-honey/50" />
        {kicker}
      </Reveal>
      <Reveal delay={0.05}>
        <h2 className="mt-3 font-display text-4xl font-bold tracking-tight md:text-6xl">
          {title}
        </h2>
      </Reveal>
    </div>
  );
}
