const Loading = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-rose-100 flex items-center justify-center">
            <div className="flex flex-col items-center">
                {/* Spinner */}
                <div className="relative w-16 h-16">
                    <div className="absolute inset-0 rounded-full border-4 border-red-100"></div>
                    <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-red-600 animate-spin"></div>
                </div>

                {/* Loading Text */}
                <h2 className="mt-6 text-xl font-semibold text-red-700">
                    Loading...
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                    Please wait a moment
                </p>
            </div>
        </div>
    )
}

export default Loading