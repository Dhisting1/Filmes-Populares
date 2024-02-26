import { searchMovies } from "./api.js";

const searchMoviesInput = document.querySelector(".form-search");

searchMoviesInput.addEventListener("submit", async (event) => {
  event.preventDefault();

  const search = event.target[0].value;
  const movies = await searchMovies(search);

  console.log(movies);
});
