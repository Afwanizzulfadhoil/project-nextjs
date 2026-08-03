import Navbar from "./components/Navbar";

export default function Page() {
	return (
		<main>
			<Navbar />

			<section className="p-6">
				<h1 className="text-3xl font-bold">Welcome to StudyFlow</h1>
				<p className="mt-4 text-gray-700">This is the homepage. Navbar should appear above.</p>
			</section>
		</main>
	);
}

