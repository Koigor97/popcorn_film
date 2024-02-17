"use strict";

export const global = {
  currentPage: window.location.pathname,
  search: {
    term: "",
    type: "",
    page: 1,
    totalPages: 1,
    totalResults: 0,
  },
  api: {
    // Register your key at https://www.themoviedb.org/settings/api and enter here
    // Only use this for development or very small projects. You should store your key and make requests from a server
    apiKey: "3fd2be6f0c70a2a598f084ddfb75487c",
    apiUrl: "https://api.themoviedb.org/3/",
  },
};

//////////////////////////////////////////////////////////////////////
/**
 * Fetch html file from provided path and returns
 * the html markup
 * @param {string} path
 * @returns html template
 */

const loadTemplate = async (path) => {
  const html = await fetch(path);
  const template = await html.text();
  return template;
};

/////////////////////////////////////////////////////////////////////
/**
 * Takes a html template to be rendered and parentElement which is
 * the container in which the html template should be rendered in,
 * and the position of order at which it should be rendered
 * @param {html} template
 * @param {html} parentElement
 * @param {string} position
 */

export const renderTemplateToView = (
  template,
  parentElement,
  position = "afterbegin"
) => {
  parentElement.insertAdjacentHTML(position, template);
};

/////////////////////////////////////////////////////////////////////
/**
 * Renders the header and the footer to UI.
 * It also renders the the navigation in the
 * header.
 * @param void
 * @returns void
 */

export const renderHeaderAndFooter = async () => {
  const headerTemplate = await loadTemplate("../partials/header.html");
  const footerTemplate = await loadTemplate("../partials/footer.html");
  const navTemplate = await loadTemplate("../partials/navigation.html");

  const headerElement = document.querySelector(".main-header .container");
  renderTemplateToView(navTemplate, headerElement);
  const footerElement = document.querySelector(".main-footer");

  renderTemplateToView(headerTemplate, headerElement);
  renderTemplateToView(footerTemplate, footerElement);
};

// Fetch data from TMDB API
export async function fetchAPIData(endpoint) {
  const API_KEY = global.api.apiKey;
  const API_URL = global.api.apiUrl;

  // showSpinner();

  const response = await fetch(
    `${API_URL}${endpoint}?api_key=${API_KEY}&language=en-US`
  );

  const data = await response.json();

  // hideSpinner();

  return data;
}

// Display Backdrop On Details Pages
export function displayBackgroundImage(type, backgroundPath) {
  const overlayDiv = document.createElement("div");
  overlayDiv.style.backgroundImage = `url(https://image.tmdb.org/t/p/original/${backgroundPath})`;
  overlayDiv.style.backgroundSize = "cover";
  overlayDiv.style.backgroundPosition = "center";
  overlayDiv.style.backgroundRepeat = "no-repeat";
  overlayDiv.style.height = "100vh";
  overlayDiv.style.width = "100vw";
  overlayDiv.style.position = "absolute";
  overlayDiv.style.top = "0";
  overlayDiv.style.left = "0";
  overlayDiv.style.zIndex = "-1";
  overlayDiv.style.opacity = "0.1";

  if (type === "movie") {
    document.querySelector("#movie-details").appendChild(overlayDiv);
  } else {
    document.querySelector("#show-details").appendChild(overlayDiv);
  }
}
