const API_URL = (process.env.NEXT_PUBLIC_API_URL || "http://localhost:3002").replace(/\/$/, "");

export type PublicHostel = {
  id: string;
  name: string;
  slug: string;
  town: string;
  neighborhood: string | null;
  location: string | null;
  shortDescription: string | null;
  defaultRent: number;
  brandTheme: string;
  contactPublic: boolean;
  photo: { url: string; alt: string | null } | null;
  landlord: { name: string; phone: string } | null;
  units: number;
  vacant: number;
  occupied: number;
};

export type HostelDetail = {
  id: string;
  name: string;
  slug: string;
  town: string;
  neighborhood: string | null;
  location: string | null;
  description: string | null;
  shortDescription: string | null;
  defaultRent: number;
  brandTheme: string;
  mapsUrl: string | null;
  mapsEmbedUrl: string | null;
  contactPublic: boolean;
  photos: { url: string; alt: string | null; sortOrder: number }[];
  landlord: { name: string; phone: string } | null;
  vacant: number;
  total: number;
  loginUrl: string;
  mobilePickerPath: string;
};

export function apiBase() {
  return API_URL;
}

export async function fetchHostels(params?: { town?: string; q?: string }) {
  const qs = new URLSearchParams();
  if (params?.town) qs.set("town", params.town);
  if (params?.q) qs.set("q", params.q);
  const url = `${API_URL}/api/public/hostels${qs.toString() ? `?${qs}` : ""}`;
  const res = await fetch(url, { next: { revalidate: 60 } });
  if (!res.ok) throw new Error(`Hostels API ${res.status}`);
  return res.json() as Promise<{ towns: string[]; hostels: PublicHostel[] }>;
}

export async function fetchHostel(slug: string) {
  const res = await fetch(`${API_URL}/api/public/hostels/${slug}`, {
    next: { revalidate: 60 },
  });
  if (res.status === 404) return null;
  if (!res.ok) throw new Error(`Hostel API ${res.status}`);
  return res.json() as Promise<HostelDetail>;
}

export function backendUrl(path: string) {
  return `${API_URL}${path.startsWith("/") ? path : `/${path}`}`;
}
