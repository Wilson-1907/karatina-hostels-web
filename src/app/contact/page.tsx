import { Shell } from "@/components/Shell";

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800">Contact</p>
        <h1 className="mt-3 font-serif text-4xl text-emerald-950">Talk to TechFlare</h1>
        <p className="mt-5 text-black/60">
          For listing your hostel or platform support, use the apply form or email your TechFlare contact.
        </p>
        <a href="/apply" className="mt-8 inline-block rounded-full bg-amber-700 px-5 py-3 text-sm font-semibold text-white">
          Apply to list
        </a>
      </div>
    </Shell>
  );
}
