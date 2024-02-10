import { createCardImageContainer } from "./card.js";
import { handleShowCat } from "./events.js";

const createBackgroundImage = () => {
  const backgroundImage = document.createElement("img");
  backgroundImage.setAttribute("id", "valentines-background-image");
  backgroundImage.setAttribute("src", "./images/valentines-background.png");

  document.body.appendChild(backgroundImage);
};

const initializePage = () => {
  createBackgroundImage();

  const mainContainer = document.createElement("div");
  mainContainer.setAttribute("id", "main-container");
  document.body.appendChild(mainContainer);

  //cards
  createCardImageContainer();

  //events
  handleShowCat();
};

window.onload = initializePage;
