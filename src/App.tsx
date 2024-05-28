import "./App.css";

function App() {
  return (
    <main>
      <h1>Movies search</h1>
      <form>
        <input
          type="text"
          id="search"
          autoFocus
          placeholder="Star Wars, Matrix ..."
        />
        <button className="search-button">Buscar</button>
      </form>
    </main>
  );
}

export default App;
