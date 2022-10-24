
import { useState, useEffect } from "react";


function App() {
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
      {loading ? <h1>Loading...</h1> : <div>{movies.map((movies) => (<div key={movies.id}>
        <img src={movies.medium_cover_image}></img>
        <h2>{movies.title}</h2>
        <p>{movies.summary}</p>
        <ul>
          {movies.genres.map((g) => (
            <li key={g}>{g}</li>
          ))}
        </ul>
      </div>))}</div>}
    </div>
  );
}

export default App;
