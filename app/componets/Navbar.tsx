import Link from "next/link";

export default function Navbar() {
    return (
        <nav className="border-b bg-white">
            <div className="mx-auto flex h-16 max-w-7x1 items-center justify-between px-6">
                <Link href="/" className="text-2x1 font-bold text-blue-600">
                    StudyFlow
                </Link>

                <div className="flex items-center gap-8">
                    <link href="/">Home</link>
                    <link href="/todo">Todo</link>
                    <link href="/history">History</link>
                    <link href="/about">About</link>
                </div>

                <button className="rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 trasition">
                    Login
                </button>
            </div>
        </nav>
    );
}