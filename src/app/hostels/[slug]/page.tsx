import Link from "next/link";
import { notFound } from "next/navigation";
import { Shell } from "@/components/Shell";
import { backendUrl, fetchHostel } from "@/lib/api";

export const dynamic = "force-dynamic";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const hostel = await fetchHostel(slug).catch(() => null);
  return { title: hostel?.name ?? "Hostel" };
}

export default async function HostelPage({ params }: Props) {
  const { slug } = await params;
  const hostel = await fetchHostel(slug).catch(() => null);
  if (!hostel) notFound();

  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800">{hostel.town}</p>
        <h1 className="mt-3 font-serif text-4xl text-emerald-950 md:text-5xl">{hostel.name}</h1>
        <p className="mt-4 max-w-2xl text-lg text-black/60">
          {hostel.shortDescription || hostel.description || `Hostel in ${hostel.town}.`}
        </p>
        <p className="mt-3 text-sm font-semibold text-emerald-900">
          From KSh {hostel.defaultRent.toLocaleString("en-KE")}/mo · {hostel.vacant} vacant of {hostel.total}
        </p>

        {hostel.photos.length > 0 ? (
          <div className="mt-10 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {hostel.photos.map((p) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={p.url}
                src={p.url.startsWith("http") ? p.url : backendUrl(p.url)}
                alt={p.alt || hostel.name}
                className="aspect-[4/3] w-full rounded-xl object-cover"
              />
            ))}
          </div>
        ) : null}

        {hostel.description ? (
          <p className="mt-10 max-w-3xl whitespace-pre-wrap text-black/65">{hostel.description}</p>
        ) : null}

        <div className="mt-10 flex flex-wrap gap-3">
          <a
            href={backendUrl(hostel.loginUrl)}
            className="rounded-full bg-emerald-900 px-5 py-3 text-sm font-semibold text-white"
          >
            Log in to this hostel
          </a>
          <Link href="/hostels" className="rounded-full border border-black/15 px-5 py-3 text-sm font-semibold">
            All hostels
          </Link>
          {hostel.landlord?.phone ? (
            <a
              href={`tel:${hostel.landlord.phone}`}
              className="rounded-full border border-black/15 px-5 py-3 text-sm font-semibold"
            >
              Call {hostel.landlord.name}
            </a>
          ) : null}
        </div>
      </div>
    </Shell>
  );
}
