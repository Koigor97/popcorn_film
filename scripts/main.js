import { renderHeaderAndFooter, fetchAPIData } from "../js/utils.mjs";
import { displayPopularMovies } from "../js/displayPopularMovies.mjs";
import { displayPopularShows } from "../js/displayTvShows.mjs";
import { displayMovieDetails } from "../js/displayMovieDetail.mjs";
import { displayShowDetails } from "../js/displayTvShowDetail.mjs";

// render the Header and Footer html
renderHeaderAndFooter();

displayPopularMovies();

//
displayMovieDetails();

//
displayPopularShows();

//
displayShowDetails();

//
