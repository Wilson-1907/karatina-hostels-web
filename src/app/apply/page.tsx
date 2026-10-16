import { Shell } from "@/components/Shell";
import { backendUrl } from "@/lib/api";

export const metadata = { title: "Apply" };

export default function ApplyPage() {
  return (
    <Shell>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <p className="text-xs font-bold uppercase tracking-[0.2em] text-amber-800">Landlords</p>
        <h1 className="mt-3 font-serif text-4xl text-emerald-950">List your hostel</h1>
        <p className="mt-5 text-black/60">
          Applications are reviewed on the backend admin. Continue on the secure apply form:
        </p>
        <a
          href={backendUrl("/apply")}
          className="mt-8 inline-block rounded-full bg-emerald-900 px-5 py-3 text-sm font-semibold text-white"
        >
          Open apply form
        </a>
      </div>
    </Shell>
  );
}
