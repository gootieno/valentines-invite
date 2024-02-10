export const setCatImage = () => {
  const catImageContainer = document.getElementById("cat-image-container");

  const catImage = document.createElement("img");
  catImage.setAttribute("id", "cat-image");

  catImageContainer.appendChild(catImage);
};
