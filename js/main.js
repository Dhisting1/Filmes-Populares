import { searchMovies } from "./api.js";

const searchMoviesInput = document.querySelector(".form-search");
const addImage = document.querySelector(".imgCardMovie");
const addTitle = document.querySelector(".titleCardMovie");
const addDescription = document.querySelector(".descriptionCardMovie");

searchMoviesInput.addEventListener("submit", async (event) => {
  event.preventDefault();

  const search = event.target[0].value;
  const movies = await searchMovies(search);
  const movieImg = movies.results[0].poster_path;
  const titleMovie = movies.results[0].title;
  const descriptionMovie = movies.results[0].overview;

  addImage.src = `https://image.tmdb.org/t/p/w500${movieImg}`;
  addTitle.textContent = titleMovie;
  addDescription.textContent = descriptionMovie;

  console.log(movies);
});
