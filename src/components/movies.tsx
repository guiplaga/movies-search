import { ModifiedSearch } from "../services/movies";

interface props {
  movies: ModifiedSearch[];
}

export function Movies({ movies }: props) {
  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie-card" key={movie.id}>
          <h2>{movie.tittle}</h2>
          <p>{movie.year}</p>
          <img
            src={movie.poster}
            alt={`poster de la película ${movie.tittle}`}
          />
        </li>
      ))}
    </ul>
  );
}
