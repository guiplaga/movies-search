import { APIENDPOINT } from "../constants/constants";

export interface Welcome {
  Search: Search[];
  totalResults: string;
  Response: string;
}

export interface Search {
  Title: string;
  Year: string;
  imdbID: string;
  Type: Type;
  Poster: string;
}

export interface ModifiedSearch {
  id: string;
  tittle: string;
  year: string;
  poster: string;
}

export enum Type {
  Game = "game",
  Movie = "movie",
  Series = "series",
}

export const getMovies = async (search: string) => {
  if (search === "") return undefined;

  try {
    const response = await fetch(`${APIENDPOINT}${search}`);
    const json: Welcome = await response.json();

    const movies: Search[] = json.Search;

    return movies.map((movie) => ({
      id: movie.imdbID,
      tittle: movie.Title,
      year: movie.Year,
      poster: movie.Poster,
    }));
  } catch (e) {
    throw new Error("Error searching movies");
  }
};
