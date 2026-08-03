import Link from "next/link";

type AdsProps = {
    title?: string;
    description?: string;
    link?: string;
    cta?: string;
};

export default function Ads({
    title = "Iklan Spesial",
    description = "Temukan promo, produk, atau layanan terbaik dari mitra kami.",
    link = "https://example.com",
    cta = "Lihat Sekarang",
}: AdsProps) {
    return (
        <aside className="w-full rounded-2xl border border-amber-200 bg-gradient-to-br from-amber-50 to-orange-100 p-5 shadow-sm lg:sticky lg:top-6">
            <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-amber-700">
                Sponsored
            </p>
            <h2 className="mt-2 text-lg font-bold text-slate-900">{title}</h2>
            <p className="mt-2 text-sm leading-6 text-slate-700">{description}</p>
            <Link
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-flex items-center rounded-full bg-slate-900 px-4 py-2 text-sm font-medium text-white transition hover:bg-slate-700"
            >
                {cta}
            </Link>
        </aside>
    );
}