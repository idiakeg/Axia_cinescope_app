import { useFetch } from "../context/FetchProvider";

const SimilarMovies = ({ id, title, release_date, rating, image }) => {
    const { fetchMovieDetail, fetchTopCast } = useFetch();

    return (
        <div
            to={"/movie_detail"}
            className="block movie_card border rounded-[20px] overflow-hidden pb-3 w-[200px] md:w-[220px] shrink-0 cursor-pointer hover:scale-95 hover:shadow-md transition duration-200"
            onClick={() => {
                fetchMovieDetail(id);
                fetchTopCast(id);
            }}
        >
            <div className="movie_image h-[150px] md:h-[200px] bg-gray-400 relative">
                <img
                    src={`https://image.tmdb.org/t/p/w300${image}`}
                    alt=""
                    className="w-full h-full object-cover"
                />
            </div>
            <div className="px-3 py-1">
                <span className="block font-semibold text-center my-[3px] text-[14px] md:text-[16px] break-words leading-tight">
                    {title}
                </span>
                <span className="block text-[12px] md:text-[14px] text-center">
                    {release_date?.split("-")[0]}
                </span>
                <span className="block text-[12px] md:text-[14px] font-semibold text-right mt-[-22px] ">
                    <i className="ri-star-fill text-cream"></i>
                    {rating.toFixed(1)}
                </span>
            </div>
        </div>
    );
};

export default SimilarMovies;
