const HomepageLoading = () => {
    return (
        <div className="mt-[80px] min-h-[calc(100dvh-80px)] py-5 pb-10">
            <div className="container skeleton_container space-y-8 mx-auto w-[92%] md:w-[90%] max-w-[1240px]">
                <div className="w-full h-[300px] rounded-2xl bg-gray-300 relative overflow-hidden animate-pulseSoft">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent bg-[length:200%_100%] animate-shimmer"></div>
                </div>

                {/* Genre pill loading */}
                <div className="flex flex-wrap gap-3 mt-6 animate-pulseSoft">
                    {Array(6)
                        .fill()
                        .map((_, i) => (
                            <div
                                key={i}
                                className="h-8 w-24 rounded-full bg-gray-300 relative overflow-hidden"
                            >
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent bg-[length:200%_100%] animate-shimmer"></div>
                            </div>
                        ))}
                </div>

                {/* movie card loading */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
                    {Array(8)
                        .fill()
                        .map((_, i) => (
                            <div key={i} className="space-y-3">
                                <div className="h-[220px] rounded-xl bg-gray-300 relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer bg-[length:200%_100%]"></div>
                                </div>

                                <div className="h-4 w-3/4 bg-gray-300 rounded relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                                </div>

                                <div className="h-4 w-1/3 bg-gray-300 rounded relative overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer"></div>
                                </div>
                            </div>
                        ))}
                </div>
            </div>
        </div>
    );
};

export default HomepageLoading;
