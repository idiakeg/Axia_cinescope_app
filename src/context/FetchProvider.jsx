import { useContext, useState, createContext, useEffect } from "react";

const apiKey = import.meta.env.VITE_TMDB_API_KEY;

const FetchContext = createContext();

const FetchProvider = ({ children }) => {
    const [trendingMovies, setTrendingMovies] = useState([]);
    const [movieGenre, setMovieGenre] = useState([]);
    useEffect(() => {
        fetchTrendingMovie();
        fetchMovieGenre();
    }, []);

    // ====> Fetch trending movies
    const fetchTrendingMovie = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/trending/movie/week?api_key=${apiKey}&language=en-US`
        );
        const result = await response.json();
        console.log("trending movies: ", result);
        setTrendingMovies(result);
    };

    // ====> Fetch movie genre
    const fetchMovieGenre = async () => {
        const response = await fetch(
            `https://api.themoviedb.org/3/genre/movie/list?api_key=${apiKey}&language=en-US`
        );
        const result = await response.json();
        setMovieGenre(result.genres);
        console.log(result.genres);
    };

    return (
        <FetchContext.Provider value={{ trendingMovies, movieGenre }}>
            {children}
        </FetchContext.Provider>
    );
};

export const useFetch = () => {
    return useContext(FetchContext);
};

export default FetchProvider;
