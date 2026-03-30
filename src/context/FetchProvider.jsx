import { useContext, useState, createContext, useEffect } from "react";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const FetchContext = createContext();

const FetchProvider = ({ children }) => {
    const [trendingMovies, setTrendingMovies] = useState(
        JSON.parse(localStorage.getItem("trending_movies")) || []
    );
    const [movieGenre, setMovieGenre] = useState(() => {
        JSON.parse(localStorage.getItem("movie_genre")) || [];
    });
    const [movieDetail, setMovieDetail] = useState(null);
    const [topCast, setTopCast] = useState(null);
    const [similarMovies, setSimilarMovies] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetchTrendingMovie();
        fetchMovieGenre();
    }, []);

    // ====> Fetch trending movies
    const fetchTrendingMovie = async () => {
        try {
            // only show loading data if there is no movie in the localstorage
            if (trendingMovies.length === 0) setIsLoading(true);
            const response = await fetch(
                `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=en-US`
            );
            if (!response.ok) {
                throw new Error("Failed to fetch jobs.");
            }
            const result = await response.json();

            console.log("trending movies: ", result);
            setTrendingMovies(result.results);
            localStorage.setItem(
                "trending_movies",
                JSON.stringify(result.results)
            );
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    // ====> Fetch movie genre
    const fetchMovieGenre = async () => {
        try {
            // only show loading data if there is no movie in the localstorage
            if (movieGenre.length === 0) setIsLoading(true);
            const response = await fetch(
                `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
            );
            if (!response.ok) {
                throw new Error("Failed to get Genre.");
            }
            const result = await response.json();
            setMovieGenre(result.genres);
            console.log(result.genres);
            localStorage.setItem("movie_genre", JSON.stringify(result.genres));
        } catch (error) {
            setError(error);
        } finally {
            setIsLoading(false);
        }
    };

    // ====> Fetch movie details
    const fetchMovieDetail = async (id) => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`
        );
        const result = await response.json();
        setMovieDetail(result);
        console.log("movie detail: ", result);
        localStorage.setItem("movie_detail", JSON.stringify(result));
    };

    // ====> Fetch top cast
    const fetchTopCast = async (id) => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`
        );
        const result = await response.json();
        setTopCast(result.cast);
        console.log("top cast: ", result.cast);
        localStorage.setItem("top_cast", JSON.stringify(result.cast));
    };

    // ====> Fetch similar movies
    const fetchSimilarMovies = async (id) => {
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}/similar?api_key=${apiKey}&language=en-US`
        );
        const result = await response.json();
        setSimilarMovies(result.results);
        console.log("similar movies: ", result.results);
        localStorage.setItem("similar_movies", JSON.stringify(result.results));
    };

    return (
        <FetchContext.Provider
            value={{
                trendingMovies,
                movieGenre,
                fetchMovieDetail,
                movieDetail,
                topCast,
                fetchTopCast,
                similarMovies,
                fetchSimilarMovies,
                isLoading,
                error,
            }}
        >
            {children}
        </FetchContext.Provider>
    );
};

export const useFetch = () => {
    return useContext(FetchContext);
};

export default FetchProvider;
