import Link from "next/link";
import { Shell } from "@/components/Shell";
import { fetchHostels } from "@/lib/api";

export const dynamic = "force-dynamic";

export default async function HomePage() {
  let hostels: Awaited<ReturnType<typeof fetchHostels>>["hostels"] = [];
  try {
    const data = await fetchHostels();
    hostels = data.hostels.slice(0, 6);
  } catch {
    hostels = [];
  }

  return (
    <Shell>
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-24">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800">TechFlare Solutions</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl text-emerald-950 md:text-6xl">
          Rooms for students. Calm control for landlords.
        </h1>
        <p className="mt-5 max-w-xl text-lg text-black/60">
          Browse confirmed hostels, open each hostel’s own page, then log in on the app or web after you move in.
        </p>
        <div className="mt-8 flex flex-wrap gap-3">
          <Link href="/hostels" className="rounded-full bg-emerald-900 px-5 py-3 text-sm font-semibold text-white">
            Hostels we have
          </Link>
          <Link href="/about" className="rounded-full border border-black/15 px-5 py-3 text-sm font-semibold">
            Who we are
          </Link>
        </div>
      </section>

      <section className="border-t border-black/10 bg-white/50 py-14">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="font-serif text-3xl text-emerald-950">Featured hostels</h2>
          {hostels.length === 0 ? (
            <p className="mt-4 text-black/50">
              Connect <code className="text-sm">NEXT_PUBLIC_API_URL</code> to the Render backend to load listings.
            </p>
          ) : (
            <ul className="mt-8 grid gap-4 md:grid-cols-3">
              {hostels.map((h) => (
                <li key={h.id} className="rounded-2xl border border-black/10 bg-white p-5">
                  <Link href={`/hostels/${h.slug}`}>
                    <p className="font-serif text-xl text-emerald-950">{h.name}</p>
                    <p className="mt-1 text-sm text-black/55">
                      {h.town} · KSh {h.defaultRent.toLocaleString("en-KE")}/mo · {h.vacant} vacant
                    </p>
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
      </section>
    </Shell>
  );
}
