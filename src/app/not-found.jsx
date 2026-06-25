import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4">
            <div className="text-center max-w-lg">
                <h1 className="text-8xl font-extrabold text-emerald-600 mb-4">
                    404
                </h1>

                <h2 className="text-3xl font-bold text-slate-800 mb-3">
                    Page Not Found
                </h2>

                <p className="text-slate-600 mb-8">
                    Sorry, the page or property you are looking for does not exist
                    or may have been removed.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link
                        href="/"
                        className="px-6 py-3 bg-emerald-600 text-white rounded-xl font-medium hover:bg-emerald-700 transition"
                    >
                        Back To Home
                    </Link>

                    <Link
                        href="/allProperty"
                        className="px-6 py-3 border border-slate-300 rounded-xl font-medium hover:bg-slate-100 transition"
                    >
                        Browse Properties
                    </Link>
                </div>
            </div>
        </div>
    );
}