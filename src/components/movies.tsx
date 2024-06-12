import { ModifiedSearch } from "../services/movies";

interface props {
  movies: ModifiedSearch[];
}

export function Movies({ movies }: props) {
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    event.currentTarget.className = "movie-card focused";
  };

  return (
    <ul className="movies">
      {movies.map((movie) => (
        <li className="movie-card" key={movie.id} onClick={handleClick}>
          <div>
            <h3>{movie.tittle}</h3>
            <p>{movie.year}</p>
          </div>
          <img
            src={movie.poster}
            alt={`poster de la película ${movie.tittle}`}
          />
        </li>
      ))}
    </ul>
  );
}
