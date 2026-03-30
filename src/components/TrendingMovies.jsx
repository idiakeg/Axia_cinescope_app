import { Link } from "react-router-dom";
import { useFetch } from "../context/FetchProvider";

const TrendingMovies = ({ id, title, release_date, rating, image }) => {
    const { fetchMovieDetail, fetchTopCast } = useFetch();
    return (
        <Link
            onClick={() => {
                fetchMovieDetail(id);
                fetchTopCast(id);
            }}
            to={"/movie_detail"}
            className="block movie_card  border rounded-[20px] overflow-hidden pb-3 hover:-translate-y-1 transition-transform duration-200 hover:shadow-lg hover:scale-105"
        >
            <div className="movie_image h-[200px] md:h-[220px] bg-gray-400 relative">
                <img
                    src={`https://image.tmdb.org/t/p/w300${image}`}
                    alt=""
                    className="w-full h-full object-cover"
                />
                <i className="ri-heart-line cursor-pointer absolute bottom-0 right-[10px] text-[25px] font-thin text-white"></i>
            </div>
            <div className="px-3 py-1">
                <span className="block font-semibold text-center my-[3px] break-words leading-tight">
                    {title}
                </span>
                <span className="block text-[14px] text-center">
                    {release_date?.split("-")[0]}
                </span>
                <span className="block text-[14px] font-semibold text-right mt-[-22px] ">
                    <i className="ri-star-fill text-cream"></i>{" "}
                    {rating.toFixed(1)}
                </span>
            </div>
        </Link>
    );
};

export default TrendingMovies;
