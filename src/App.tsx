import { useState } from "react";
import "./App.css";
import { Movies } from "./components/movies";
import { useMovies } from "./hooks/usemovies";

function App() {
  const [error, setError] = useState("");

  const { movies, changeMovies } = useMovies();

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const { query } = Object.fromEntries(
      new window.FormData(event.currentTarget)
    );
    console.log(query.toString());

    const input = query.toString();

    if (input === "") {
      setError("No se admite texto vacío");
      return;
    }

    if (input.match(/^d+$/)) {
      setError("No se puede buscar una película con un número");
      return;
    }

    if (input.length < 3) {
      setError("La búsqueda debe contener al menos 3 carácteres");
      return;
    }

    setError("");

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
          <h1>No hay películas</h1>
        ) : (
          <Movies movies={movies} />
        )}
      </main>
    </>
  );
}

export default App;
