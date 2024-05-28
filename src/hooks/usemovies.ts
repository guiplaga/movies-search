import { useState } from "react";
import { ModifiedSearch, getMovies } from "../services/movies";

export const useMovies = () => {
  const [movies, setMovies] = useState<ModifiedSearch[]>([]);

  const changeMovies = async (input: string) => {
    const mappedMovies = await getMovies(input);
    if (mappedMovies) {
      setMovies(mappedMovies);
      return true;
    } else return false;
  };

  return { movies, changeMovies };
};
