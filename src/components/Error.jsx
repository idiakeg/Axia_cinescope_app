const ErrorComponent = ({ error }) => {
    return (
        <div className="flex items-center justify-center mt-[80px] min-h-[calc(100dvh-80px)] py-5 pb-10">
            <div className="text-center p-8 bg-white rounded-lg shadow-xl border-t-4 border-red-500">
                <p className="text-xl font-bold text-gray-800">
                    Connection Error
                </p>
                <p className="text-gray-600 mt-2">{error}</p>
                <button
                    onClick={() => window.location.reload()}
                    className="mt-4 px-4 py-2 bg-[#5ba4a4] text-white rounded hover:bg-[#2b3939] transition-colors"
                >
                    Try Again
                </button>
            </div>
        </div>
    );
};

export default ErrorComponent;
