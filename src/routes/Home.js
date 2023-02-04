import { useState, useEffect } from "react";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setMovies] = useState([]);
    const getMovies = async () => {
        const response = await fetch(
            "https://yts.mx/api/v2/list_movies.json?minumum_rating=8.5&sort_by=year"
        );
        const json = await response.json();
        setMovies(json.data.movies);
        setLoading(false);
    }
    useEffect(() => {
        getMovies();
    }, []);
    return (
        <div>
            {loading ? <h1>Loading...</h1> : <div>{movies.map((movies) => (
                <Movie
                    key={movies.id}
                    id={movies.id}
                    coverImg={movies.medium_cover_image}
                    title={movies.title}
                    summary={movies.summary}
                    genres={movies.genres}
                />
            ))}
            </div>}
        </div>
    );
}
export default Home;