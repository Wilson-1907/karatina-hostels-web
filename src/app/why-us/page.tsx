import { Shell } from "@/components/Shell";

export const metadata = { title: "Why us" };

export default function WhyUsPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800">Why us</p>
        <h1 className="mt-3 font-serif text-4xl text-emerald-950">Built for Kenyan hostels</h1>
        <ul className="mt-8 space-y-4 text-black/65">
          <li>Every listed hostel is reviewed before it goes public.</li>
          <li>Each hostel keeps its own branded page and login.</li>
          <li>Rent collection with live M-Pesa prompts — cancelled, failed, or successful with receipt code.</li>
          <li>Installable app so tenants and landlords open the hostel picker without searching Google.</li>
        </ul>
      </div>
    </Shell>
  );
}
