import { Link, useNavigate } from "react-router-dom";
import { useFetch } from "../context/FetchProvider";
import formatRuntime from "../utils/getRunTIme";
import TopCast from "../components/TopCast";
import SimilarMovies from "../components/SimilarMovies";

const MovieDetailPage = () => {
    const navigate = useNavigate();
    const { movieDetail, topCast, similarMovies } = useFetch();

    const runTime = formatRuntime(movieDetail?.runtime);

    console.log("movie detail from movie details page: ", movieDetail);

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
                <div className="movie_banner h-[450px]">
                    <img
                        src={`https://image.tmdb.org/t/p/w1280${movieDetail?.backdrop_path}`}
                        alt="movie banner"
                        className="w-full h-full object-cover"
                    />
                </div>
                {/* movie detail */}
                <div className="movie_full_detail flex gap-4 md:gap-[40px] flex-col lg:flex-row">
                    <div className="movie_image lg:w-[30%] lg:rounded-[30px] h-[200px] lg:h-auto w-full overflow-hidden rounded-xl">
                        <img
                            src={`https://image.tmdb.org/t/p/w1280${movieDetail?.poster_path}`}
                            alt="movie banner"
                            className="w-full h-full object-cover"
                        />
                    </div>
                    <div className="movie_details_proper font-Comic flex-1 space-y-2 md:space-y-3 overflow-x-auto">
                        <h1 className="upper text-[20px] md:text-[30px] font-semibold">
                            {movieDetail?.original_title}
                        </h1>
                        {/* <p className="capitalize  italic">
                            long live the fighters
                        </p> */}
                        <div className="movie_detail_pills flex gap-3 items-center flex-wrap gap-y-2">
                            <span className="movie_rating px-[6px] py-1 text-[13px] md:text-[16px] md:px-3 md:py-[3px] rounded-[20px] bg-[#8B5E3C] text-white">
                                <i className="ri-star-line mr-[2px] md:mr-2 text-cream"></i>
                                {movieDetail?.vote_average?.toFixed(1)}/10
                            </span>
                            <span className="movie_calendar px-[6px] py-1 text-[13px] md:text-[16px] md:px-3 md:py-[3px] rounded-[20px] bg-[#8B5E3C] text-white">
                                <i className="ri-calendar-2-line mr-[2px] md:text-[16px] md:mr-2"></i>
                                {movieDetail?.release_date?.split("-")[0]}
                            </span>
                            <span className="movie_running_time px-[6px] py-1 text-[13px] md:text-[16px] md:px-3 md:py-[3px] rounded-[20px] bg-[#8B5E3C] text-white">
                                <i className="ri-time-line mr-[2px] md:mr-2"></i>
                                {runTime}
                            </span>
                            <span className="movie_running_time px-[6px] py-1 text-[13px] md:text-[16px] md:px-3 md:py-[3px] rounded-[20px] bg-[#8B5E3C] text-white">
                                <i className="ri-user-fill mr-[2px] md:mr-2"></i>
                                {movieDetail?.vote_count} votes
                            </span>
                        </div>
                        <p className="text-justify text-[12px] md:text-[14px]">
                            {movieDetail.overview}
                        </p>
                        <button className="border border-red-300 px-3 md:px-4 py-1 rounded-[20px] flex items-center bg-red-400 text-white btn_hover hover:shadow-md text-[14px] md:text-[16px]">
                            <i className="ri-heart-fill mr-[2px] md:mr-2"></i>
                            Add to Watchlist
                        </button>
                        {/* top cast */}
                        <div className="top_cast">
                            <h2 className="font-semibold mb-2">Top Cast</h2>
                            <div className="top_cast_container flex gap-4 overflow-x-auto">
                                {topCast?.map(
                                    ({
                                        cast_id,
                                        profile_path,
                                        original_name,
                                        character,
                                    }) => (
                                        <TopCast
                                            key={cast_id}
                                            image={profile_path}
                                            cast_name={original_name}
                                            character={character}
                                        />
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
                        {similarMovies?.map(
                            ({
                                id,
                                original_title,
                                release_date,
                                vote_average,
                                poster_path,
                            }) => (
                                <SimilarMovies
                                    id={id}
                                    key={id}
                                    title={original_title}
                                    release_date={release_date}
                                    rating={vote_average}
                                    image={poster_path}
                                />
                            )
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MovieDetailPage;
