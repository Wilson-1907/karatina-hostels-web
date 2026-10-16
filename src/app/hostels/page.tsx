import Link from "next/link";
import { Shell } from "@/components/Shell";
import { fetchHostels } from "@/lib/api";

export const dynamic = "force-dynamic";
export const metadata = { title: "Hostels we have" };

type Props = { searchParams: Promise<{ town?: string }> };

export default async function HostelsPage({ searchParams }: Props) {
  const sp = await searchParams;
  let towns: string[] = [];
  let hostels: Awaited<ReturnType<typeof fetchHostels>>["hostels"] = [];
  let error: string | null = null;

  try {
    const data = await fetchHostels({ town: sp.town });
    towns = data.towns;
    hostels = data.hostels;
  } catch {
    error = "Could not reach the backend API. Set NEXT_PUBLIC_API_URL to your Render URL.";
  }

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800">Hostels we have</p>
        <h1 className="mt-3 font-serif text-4xl text-emerald-950 md:text-5xl">Confirmed hostels</h1>
        <p className="mt-4 max-w-2xl text-black/60">
          Every hostel below is approved. Open a page for rent, vacancies, and contact — then log in after you move in.
        </p>

        {towns.length > 0 ? (
          <div className="mt-6 flex flex-wrap gap-2">
            <Link
              href="/hostels"
              className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                !sp.town ? "border-amber-700 bg-amber-50 text-amber-900" : "border-black/15 text-black/50"
              }`}
            >
              All towns
            </Link>
            {towns.map((town) => (
              <Link
                key={town}
                href={`/hostels?town=${encodeURIComponent(town)}`}
                className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${
                  sp.town?.toLowerCase() === town.toLowerCase()
                    ? "border-amber-700 bg-amber-50 text-amber-900"
                    : "border-black/15 text-black/50"
                }`}
              >
                {town}
              </Link>
            ))}
          </div>
        ) : null}

        {error ? <p className="mt-8 text-sm text-red-700">{error}</p> : null}

        <ul className="mt-10 divide-y divide-black/10 border-y border-black/10">
          {hostels.map((h) => (
            <li key={h.id} className="flex flex-wrap items-center justify-between gap-4 py-6">
              <div>
                <Link href={`/hostels/${h.slug}`} className="font-serif text-2xl text-emerald-950">
                  {h.name}
                </Link>
                <p className="mt-1 text-sm text-black/55">
                  {h.town}
                  {h.neighborhood ? ` · ${h.neighborhood}` : ""} · KSh {h.defaultRent.toLocaleString("en-KE")}/mo ·{" "}
                  {h.vacant} vacant of {h.units}
                </p>
              </div>
              <Link href={`/hostels/${h.slug}`} className="rounded-full border border-black/15 px-4 py-2 text-sm font-semibold">
                View hostel
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </Shell>
  );
}
