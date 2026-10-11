import Link from 'next/link'

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-100 flex items-center justify-center px-6 mt-6">
            <div className="text-center">
                {/* 404 */}
                <h1 className="text-[120px] md:text-[180px] font-extrabold leading-none text-red-600 drop-shadow-sm">
                    404
                </h1>

                {/* Message */}
                <h2 className="mt-4 text-3xl md:text-4xl font-bold text-gray-800">
                    Page Not Found
                </h2>

                <p className="mt-4 max-w-md mx-auto text-gray-500 text-lg">
                    Oops! The page you’re looking for doesn’t exist or may have
                    been moved.
                </p>

                {/* Button */}
                <Link
                    href="/"
                    className="inline-block mt-8 rounded-lg bg-red-600 px-7 py-3 text-white font-semibold shadow-lg shadow-red-200 transition-all duration-300 hover:bg-red-700 hover:shadow-xl hover:-translate-y-0.5"
                >
                    ← Back to Home
                </Link>
            </div>
        </div>
    )
}

export default NotFound