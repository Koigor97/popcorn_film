import { renderHeaderAndFooter, fetchAPIData } from "../js/utils.mjs";
import { displayPopularShows } from "../js/displayTvShows.mjs";
import { displayMovieDetails } from "../js/displayMovieDetail.mjs";
import { displayShowDetails } from "../js/displayTvShowDetail.mjs";

// render the Header and Footer html
renderHeaderAndFooter();

//
displayPopularShows();

//
displayShowDetails();

//
async function displayPopularMovies() {
  const { results } = await fetchAPIData("movie/popular");
  console.log(results);

  results.forEach((movie) => {
    const div = document.createElement("div");
    div.classList.add("card");
    div.innerHTML = `
          <a href="/pages/movie-details.html?id=${movie.id}">
            ${
              movie.poster_path
                ? `<img
              src="https://image.tmdb.org/t/p/w500${movie.poster_path}"
              class="card-img-top"
              alt="${movie.title}"
            />`
                : `<img
            src="../images/no-image.jpg"
            class="card-img-top"
            alt="${movie.title}"
          />`
            }
          </a>
          <div class="card-body">
            <h5 class="card-title">${movie.title}</h5>
            <p class="card-text">
              <small class="text-muted">Release: ${movie.release_date}</small>
            </p>
          </div>
        `;

    document.querySelector("#popular-movies").appendChild(div);
  });
}

displayPopularMovies();

//
displayMovieDetails();
