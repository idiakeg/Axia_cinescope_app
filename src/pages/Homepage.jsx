import { Link } from "react-router-dom";
// import test_bg from "../assets/blog921b2d4013-4f56-409c-9c73-e9c2fdd36d5a.jpg";
import GenrePill from "../components/GenrePill";
import { useFetch } from "../context/FetchProvider";
import getGenre from "../utils/getGenre";
import GenreList from "../components/GenreList";
import TrendingMovies from "../components/TrendingMovies";

const Homepage = () => {
    const { movieGenre, trendingMovies, fetchMovieDetail, fetchTopCast } =
        useFetch();
    const [highlightMovie, ...remainingMovies] = trendingMovies.results || [];
    const genreList = getGenre(highlightMovie, movieGenre);

    console.log("highlight movies: ", highlightMovie);

    return (
        <div className="mt-[80px] min-h-[calc(100dvh-80px)] py-5 pb-10">
            <div className="container space-y-8 mx-auto w-[95%] md:w-[90%] max-w-[1240px]">
                <div
                    className="hero_section h-[300px] md:h-[350px] rounded-tl-[30px] rounded-bl-[30px] bg-no-repeat bg-center bg-cover flex flex-col gap-5 justify-center px-5 md:px-10 font-Comic text-white"
                    style={{
                        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0.7) 30%, rgba(0,0,0,0) 60%),
      url(https://image.tmdb.org/t/p/w1280${highlightMovie?.backdrop_path})`,
                    }}
                >
                    <h1 className="upper md:text-[45px] font-bold font-Comic leading-tight">
                        {highlightMovie?.original_title}
                    </h1>
                    <div className="genre_and_rating text-[15px] md:text-[20px] flex flex-wrap gap-y-2 gap-x-3">
                        {genreList?.map((item, index) => (
                            <GenreList key={index} genreListName={item} />
                        ))}
                        <span className="inline-flex rating rounded-[50%] w-[35px] h-[35px] md:w-[50px] md:h-[50px] bg-red-400 font-semibold upper items-center justify-center text-[17px] md:text-[25px]">
                            {highlightMovie?.vote_average.toFixed(1)}
                        </span>
                    </div>
                    <Link
                        to={"/movie_detail"}
                        className="w-fit capitalize py-1 px-5 text-[15px] md:text-[20px] font-medium bg-green-400 rounded-[30px] btn_hover"
                        onClick={() => {
                            fetchMovieDetail(highlightMovie?.id);
                            fetchTopCast(highlightMovie?.id);
                        }}
                    >
                        View Details
                    </Link>
                </div>
                <div className="genre_pill flex flex-wrap gap-y-2 gap-4 text-white">
                    {movieGenre?.map(({ id, name }) => (
                        <GenrePill key={id} genre_name={name} />
                    ))}
                </div>
                <div className="trending_movies">
                    {remainingMovies?.map(
                        ({
                            id,
                            original_title,
                            release_date,
                            vote_average,
                            backdrop_path,
                        }) => (
                            <TrendingMovies
                                id={id}
                                key={id}
                                title={original_title}
                                release_date={release_date}
                                rating={vote_average}
                                image={backdrop_path}
                            />
                        )
                    )}
                </div>
            </div>
        </div>
    );
};

export default Homepage;
