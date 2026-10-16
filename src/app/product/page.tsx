import { Shell } from "@/components/Shell";

export const metadata = { title: "What we do" };

export default function ProductPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800">What we do</p>
        <h1 className="mt-3 max-w-3xl font-serif text-4xl text-emerald-950 md:text-5xl">
          Rooms online. Rent under control.
        </h1>
        <p className="mt-5 max-w-2xl text-lg text-black/60">
          Students find confirmed hostels. Landlords run houses, tenants, SMS, and M-Pesa from one portal.
        </p>

        <section id="services" className="mt-16 scroll-mt-24">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800">Services we offer</p>
          <ul className="mt-6 grid gap-4 md:grid-cols-3">
            {[
              {
                title: "Hostel discovery",
                text: "Directory of confirmed hostels — filter by town, open each hostel’s page, call or WhatsApp.",
              },
              {
                title: "Landlord operations",
                text: "Houses, tenants, balances, reminders, cash or M-Pesa, receipts.",
              },
              {
                title: "Tenant pay & stay",
                text: "Pay rent on the phone, keep receipts, raise maintenance after you move in.",
              },
            ].map((item) => (
              <li key={item.title} className="rounded-2xl border border-black/10 bg-white p-5">
                <h2 className="font-semibold text-emerald-950">{item.title}</h2>
                <p className="mt-2 text-sm text-black/55">{item.text}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </Shell>
  );
}
