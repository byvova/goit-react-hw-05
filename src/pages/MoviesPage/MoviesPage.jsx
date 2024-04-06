import { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import MoviesFilter from "../../components/MoviesFilter/MoviesFilter";
import MovieList from "../../components/MovieList/MovieList";
import { useSearchParams } from "react-router-dom";
import { getMoviesSearch } from "../../components/services/api";

export default function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(false);

    const [params] = useSearchParams();
    const movieFilter = params.get('query') ?? '';

    useEffect(() => {
        async function fetchData() {
            if (movieFilter === "") {
                setMovies([]);
                return;
            }
            setIsLoading(true);
            try {
                const data = await getMoviesSearch(movieFilter);
                setMovies(data);
                setError(false);
            } catch (error) {
                setError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchData();
    }, [movieFilter]);

    return (
        <div>
            {isLoading && <Loader />}
            {error && <ErrorMessage />}
            <MoviesFilter />
            {movies.length > 0 && <MovieList movies={movies} />}
        </div>
    );
}
