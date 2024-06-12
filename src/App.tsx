import "./App.css";
import { Movies } from "./components/movies";
import { useError } from "./hooks/useerror";
import { useMovies } from "./hooks/usemovies";

function App() {
  const { movies, changeMovies } = useMovies();
  const { error, filterError } = useError();

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { query } = Object.fromEntries(
      new window.FormData(event.currentTarget)
    );
    console.log(query.toString());
    const input = query.toString();
    filterError(input);
    changeMovies(input);
  };

  return (
    <>
      <header>
        <h1>Movies search</h1>
        <form onSubmit={handleFormSubmit}>
          <input
            type="text"
            name="query"
            id="search"
            autoFocus
            placeholder="Star Wars, Matrix ..."
            className={error !== "" ? "error" : ""}
          />
          <button className="search-button" type="submit">
            Buscar
          </button>
        </form>
      </header>

      <main>
        {movies.length === 0 ? (
          <h2>No hay películas</h2>
        ) : (
          <Movies movies={movies} />
        )}
      </main>
    </>
  );
}

export default App;
