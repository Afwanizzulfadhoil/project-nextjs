import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-b bg-white">
            <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
                <Link href="/" className="text-2xl font-bold text-blue-600">
                    StudyFlow
                </Link>

                <div className="flex items-center gap-8">
                    <Link href="/">Home</Link>
                    <Link href="/todo">Todo</Link>
                    <Link href="/history">History</Link>
                    <Link href="/about">About</Link>
                </div>

                <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 transition">
                    Login
                </button>
            </div>
        </nav>
    );
}
