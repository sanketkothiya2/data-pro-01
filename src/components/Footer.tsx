import { site } from "@/data/site";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/5 px-6 py-10 md:px-10">
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-4 text-sm text-ink-faint sm:flex-row">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Next.js, Tailwind &
          Motion.
        </p>
        <p className="font-mono">Windsor, ON · Designed in the dark, fueled by data.</p>
      </div>
    </footer>
  );
}
