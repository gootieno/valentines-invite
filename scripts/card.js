import { setCatImage } from "./cat-image.js";

export const createCardImageContainer = () => {
  const mainContainer = document.getElementById("main-container");
  const catImageContainer = document.createElement("div");
  const transitionContainer = document.createElement("div");
  
  transitionContainer.setAttribute("id", "transition-container");
  catImageContainer.setAttribute("id", "cat-image-container");
  catImageContainer.classList.add("hide-cat");
  catImageContainer.classList.add("cat-default");

  transitionContainer.appendChild(catImageContainer);
  mainContainer.appendChild(transitionContainer);
  createCardContainer();
  setCatImage();
};

const createCardContainer = () => {
  const mainContainer = document.getElementById("main-container");
  const cardContainer = document.createElement("div");

  cardContainer.setAttribute("id", "card-container");
  mainContainer.appendChild(cardContainer);

  const cardImage = createCardImage();
  const cardTextContainer = createCardTextContainer();
  cardContainer.append(cardImage, cardTextContainer);
};

const createCardImage = () => {
  const cardImage = document.createElement("img");

  cardImage.setAttribute("id", "valentines-card-image");
  cardImage.setAttribute("src", "../images/valentines-card.png");

  return cardImage;
};

const createCardTextContainer = () => {
  const cardTextContainer = document.createElement("div");
  cardTextContainer.setAttribute("id", "card-text-content");

  const [cardMessage, cardButtonsContainer] = createCardContent();

  cardTextContainer.append(cardMessage, cardButtonsContainer);
  return cardTextContainer;
};

const createCardContent = () => {
  const cardMessage = document.createElement("span");
  cardMessage.setAttribute("id", "card-message");
  cardMessage.innerText = "Will You Be My Valentine?";

  const cardButtonsContainer = document.createElement("div");
  cardButtonsContainer.setAttribute("id", "card-buttons-container");

  const yes = document.createElement("button");
  yes.setAttribute("id", "yes");
  yes.innerText = "YES";

  const no = document.createElement("button");
  no.setAttribute("id", "no");
  no.innerText = "NO";

  yes.classList.add("card-buttons");
  no.classList.add("card-buttons");

  cardButtonsContainer.append(yes, no);

  return [cardMessage, cardButtonsContainer];
};
