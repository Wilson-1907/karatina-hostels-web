import Link from "next/link";
import { backendUrl } from "@/lib/api";

const NAV = [
  { href: "/about", label: "Who we are" },
  { href: "/product", label: "What we do" },
  { href: "/product#services", label: "Services" },
  { href: "/why-us", label: "Why us" },
  { href: "/hostels", label: "Hostels" },
  { href: "/contact", label: "Contact" },
];

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f7f4ef] text-[#1a1a1a]">
      <header className="sticky top-0 z-20 border-b border-black/10 bg-[#f7f4ef]/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-4 py-3">
          <Link href="/">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-amber-800">
              TechFlare Solutions
            </p>
            <p className="font-serif text-xl text-emerald-950 md:text-2xl">TechFlare Accommodation</p>
          </Link>
          <nav className="flex flex-wrap items-center gap-1 text-sm font-semibold">
            {NAV.map((item) => (
              <Link key={item.href} href={item.href} className="rounded-full px-2.5 py-2 hover:bg-black/5">
                {item.label}
              </Link>
            ))}
            <a
              href={backendUrl("/m")}
              className="ml-1 rounded-full bg-emerald-900 px-3 py-2 text-sm text-white"
            >
              Log in
            </a>
            <Link href="/apply" className="rounded-full bg-amber-700 px-3 py-2 text-sm text-white">
              Get started
            </Link>
          </nav>
        </div>
      </header>
      <main>{children}</main>
      <footer className="mt-16 border-t border-black/10 py-12">
        <div className="mx-auto grid max-w-6xl gap-8 px-4 md:grid-cols-3">
          <div>
            <p className="font-serif text-2xl text-emerald-950">TechFlare Accommodation</p>
            <p className="mt-2 max-w-sm text-sm text-black/60">
              Confirmed hostels online. Rent with M-Pesa after you move in.
            </p>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-black/50">Explore</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><Link href="/about">Who we are</Link></li>
              <li><Link href="/hostels">Hostels we have</Link></li>
              <li><Link href="/apply">List your hostel</Link></li>
            </ul>
          </div>
          <div>
            <p className="text-xs font-bold uppercase tracking-wide text-black/50">Accounts</p>
            <ul className="mt-3 space-y-2 text-sm">
              <li><a href={backendUrl("/m")}>Select hostel &amp; log in</a></li>
              <li><a href={backendUrl("/admin")}>Platform admin</a></li>
            </ul>
          </div>
        </div>
      </footer>
    </div>
  );
}
