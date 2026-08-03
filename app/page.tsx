import Ads from "./components/Ads";

export default function Page() {
	return (
		<main className="min-h-screen bg-slate-50 px-4 py-8 sm:px-6 lg:px-8">
			<div className="mx-auto flex max-w-6xl flex-col gap-6 lg:flex-row">
				<section className="flex-1 rounded-3xl bg-white p-6 shadow-sm">
					<h1 className="text-3xl font-bold text-slate-900">Welcome to StudyFlow</h1>
					<p className="mt-4 text-gray-700">
						This is the homepage. Navbar should appear above, and the ad box appears on the side as a highlighted section.
					</p>
				</section>

				<div className="w-full lg:max-w-sm">
					<Ads
						title="Belajar lebih cepat"
						description="Dapatkan akses ke materi, tips, dan sumber belajar terbaik untuk mendukung perjalananmu."
						link="https://example.com"
						cta="Cek Sekarang"
					/>
				</div>
			</div>
		</main>
	);
}

