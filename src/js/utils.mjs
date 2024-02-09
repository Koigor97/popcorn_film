"use strict";

//
/**
 * Fetch html file from provided path and returns
 * the html markup
 * @param {string} path
 * @returns html template
 */

async function loadTemplate(path) {
  const html = await fetch(path);
  const template = await html.text();
  return template;
}

//
/**
 * Takes a html template to be rendered and parentElement which is
 * the container in which the html template should be rendered in,
 * and the position of order at which it should be rendered
 * @param {html} template
 * @param {html} parentElement
 * @param {string} position
 */

export function renderTemplateToView(
  template,
  parentElement,
  position = "afterbegin",
) {
  parentElement.insertAdjacentHTML(position, template);
}

//
/**
 * Renders the header and the footer to UI.
 * It also renders the the navigation in the
 * header.
 * @param void
 * @returns void
 */

export async function renderHeaderAndFooter() {
  const headerTemplate = await loadTemplate("../partials/header.html");
  const footerTemplate = await loadTemplate("../partials/footer.html");
  const navTemplate = await loadTemplate("../partials/navigation.html");

  const headerElement = document.querySelector(".main-header-container");
  headerElement.insertAdjacentHTML("afterbegin", navTemplate);
  const footerElement = document.querySelector(".main-footer");

  renderTemplateToView(headerTemplate, headerElement);
  renderTemplateToView(footerTemplate, footerElement);
}
