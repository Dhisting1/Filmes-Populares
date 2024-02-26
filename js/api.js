import { api_key } from "./apikey.js";

// Funçaõ para buscar filmes na API do The Movie Database (TMDb)
export async function searchMovies(name) {
  const url = `https://api.themoviedb.org/3/search/movie?query=${name}&include_adult=false&language=en-US&page=1`;
  const response = await fetch(url, api_key);
  const data = await response.json();

  return data;
}

export async function getImageMovie(id) {
  const url = `https://api.themoviedb.org/3/movie/${id}/images`;
  const response = await fetch(url, api_key);
  const data = await response.json();

  return data;
}
