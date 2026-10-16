import { Shell } from "@/components/Shell";

export const metadata = { title: "Who we are" };

export default function AboutPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800">Who we are</p>
        <h1 className="mt-3 font-serif text-4xl text-emerald-950 md:text-5xl">TechFlare Solutions</h1>
        <p className="mt-5 text-lg text-black/60">
          We build TechFlare Accommodation — a public site for finding confirmed hostels, and private portals for
          collecting rent with M-Pesa.
        </p>
      </div>
    </Shell>
  );
}
