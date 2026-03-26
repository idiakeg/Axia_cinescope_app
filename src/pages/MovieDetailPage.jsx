import { Link, useNavigate } from "react-router-dom";
import movie_banner from "../assets/blog921b2d4013-4f56-409c-9c73-e9c2fdd36d5a.jpg";

const MovieDetailPage = () => {
    const navigate = useNavigate();

    return (
        <div className="mt-[80px] min-h-[calc(100dvh-80px)] py-5 pb-10">
            <div className="movie_detail_container container mx-auto w-[95%] md:w-[90%] max-w-[1240px] space-y-4 md:space-y-10">
                <Link
                    onClick={() => navigate(-1)}
                    className="border border-green-300 py-1 px-[6px] rounded-[50%] hover:bg-green-300 hover:text-white transition-all duration-200"
                >
                    <i className="ri-arrow-left-line text-[20px]"></i>
                </Link>
                {/* movie banner */}
                <div className="movie_banner h-[250px]">
                    <img
                        src={movie_banner}
                        alt="movie banner"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* movie detail */}
                <div className="movie_full_detail flex gap-4 md:gap-[40px] flex-col lg:flex-row">
                    <div className="movie_image lg:w-[30%] lg:rounded-[30px] h-[200px] lg:h-auto w-full overflow-hidden rounded-xl">
                        <img
                            src={movie_banner}
                            alt="movie banner"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="movie_details_proper font-Comic flex-1 space-y-2 md:space-y-3 overflow-x-auto">
                        <h1 className="upper text-[20px] md:text-[30px] font-semibold">
                            DUNE: PART TWO
                        </h1>
                        <p className="capitalize  italic">
                            long live the fighters
                        </p>
                        <div className="movie_detail_pills flex gap-3 items-center flex-wrap gap-y-2">
                            <span className="movie_rating px-[6px] py-1 text-[13px] md:text-[16px] md:px-3 md:py-[3px] rounded-[20px] bg-[#8B5E3C] text-white">
                                <i className="ri-star-line mr-[2px] md:mr-2 text-cream"></i>
                                8.9/10
                            </span>
                            <span className="movie_calendar px-[6px] py-1 text-[13px] md:text-[16px] md:px-3 md:py-[3px] rounded-[20px] bg-[#8B5E3C] text-white">
                                <i className="ri-calendar-2-line mr-[2px] md:text-[16px] md:mr-2"></i>
                                2024
                            </span>
                            <span className="movie_running_time px-[6px] py-1 text-[13px] md:text-[16px] md:px-3 md:py-[3px] rounded-[20px] bg-[#8B5E3C] text-white">
                                <i className="ri-time-line mr-[2px] md:mr-2"></i>
                                3h 46m
                            </span>
                            <span className="movie_running_time px-[6px] py-1 text-[13px] md:text-[16px] md:px-3 md:py-[3px] rounded-[20px] bg-[#8B5E3C] text-white">
                                <i className="ri-user-fill mr-[2px] md:mr-2"></i>
                                250K votes
                            </span>
                        </div>
                        <p className="text-justify text-[12px] md:text-[14px]">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ipsum perspiciatis dolores vitae consectetur
                            quam quas eaque, quos suscipit delectus illo.
                        </p>
                        <button className="border border-red-300 px-3 md:px-4 py-1 rounded-[20px] flex items-center bg-red-400 text-white btn_hover hover:shadow-md text-[14px] md:text-[16px]">
                            <i className="ri-heart-fill mr-[2px] md:mr-2"></i>
                            Add to Watchlist
                        </button>
                        <div className="top_cast">
                            <h2 className="font-semibold mb-2">Top Cast</h2>
                            <div className="top_cast_container flex gap-4 overflow-x-auto">
                                {Array.from({ length: 8 }).map(
                                    (item, index) => (
                                        <>
                                            <div className="top_cast_card">
                                                <div className="cast_card w-[150px] flex flex-col items-center leading-tight">
                                                    <div className="w-[75px] md:w-[100px] h-[75px] md:h-[100px] rounded-[50%] overflow-hidden mb-2">
                                                        <img
                                                            src={movie_banner}
                                                            alt="cast member"
                                                            className="w-full h-full object-cover"
                                                        />
                                                    </div>
                                                    <span className="actor_name capitalize text-[13px] md:text-[16px] font-[600]">
                                                        Chris hemsworth
                                                    </span>
                                                    <span className="actor_character text-[11px] md:text-[15px]">
                                                        as Thor
                                                    </span>
                                                </div>
                                            </div>
                                        </>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </div>
                {/* similar movies */}
                <div className="similar_movies">
                    <h3 className="mb-3 font-semibold capitalize">
                        Similar movies
                    </h3>
                    <div className="similar_movie_card_container overflow-x-auto flex gap-3">
                        {Array.from({ length: 9 }).map((item, index) => (
                            <>
                                {" "}
                                <div
                                    to={"/movie_detail"}
                                    className="block movie_card border rounded-[20px] overflow-hidden pb-3 w-[200px] md:w-[220px] shrink-0"
                                >
                                    <div className="movie_image h-[150px] md:h-[200px] bg-gray-400 relative">
                                        <img
                                            src={movie_banner}
                                            alt=""
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="px-3 py-1">
                                        <span className="block font-semibold text-center my-[3px] text-[14px] md:text-[16px] break-words leading-tight">
                                            Inception
                                        </span>
                                        <span className="block text-[12px] md:text-[14px] text-center">
                                            2010
                                        </span>
                                        <span className="block text-[12px] md:text-[14px] font-semibold text-right mt-[-22px] ">
                                            <i className="ri-star-fill text-cream"></i>{" "}
                                            8.8
                                        </span>
                                    </div>
                                </div>
                            </>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailPage;
