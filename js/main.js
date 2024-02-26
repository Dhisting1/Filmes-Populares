import { searchMovies } from "./api.js";
import { svgButtonStar, svgButtonFavorite } from "./svgButton.js";

const searchMoviesInput = document.querySelector(".form-search");
const sectionCard = document.querySelector(".sectionCardsMovie");

searchMoviesInput.addEventListener("submit", async (event) => {
  event.preventDefault();

  const search = event.target[0].value;
  const movies = await searchMovies(search);
  const results = movies.results;

  for (const movie of results) {
    const movieImg = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    const titleMovie = movie.title;
    const descriptionMovie = movie.overview;
    const notaMovie = movie.vote_average;

    const card = document.createElement("section");
    card.classList.add("sectionCardsMovie");
    card.innerHTML = `
      <div class="cardMovie">
        <div class="imgDivCardMovie">
          <img src="${movieImg}" alt="Poster do filme ${titleMovie}" class="imgCardMovie" />
        </div>
  
        <div class="notesAndButtonMovie">
          <p class="titleCardMovie">${titleMovie}</p>
          <div class="icons">
            <span class="notesCard">
              ${svgButtonStar}
              ${notaMovie}
            </span>
            <button class="favoriteButtonMovie">
              ${svgButtonFavorite}
              Favoritar
            </button>
          </div>
        </div>
  
        <p class="descriptionCardMovie">
          ${descriptionMovie}
        </p>
      </div>`;
    sectionCard.appendChild(card);
  }
});
