export const handleShowCat = () => {
  const yesButton = document.getElementById("yes");
  const noButton = document.getElementById("no");
  const catImageContainer = document.getElementById("cat-image-container");
  const catImage = document.getElementById("cat-image");
  yesButton.addEventListener("mouseenter", () => {
    setTimeout(() => {
      catImageContainer.classList.remove("hide-cat");
      catImageContainer.classList.add("show-cat");
      catImage.setAttribute("src", "../images/cat-please.png");
      catImage.style.width = "50%";
    }, 800);
  });

  yesButton.addEventListener("mouseleave", () => {
    catImageContainer.classList.add("hide-cat");
    catImageContainer.classList.remove("show-cat");
  });

  noButton.addEventListener("mouseenter", () => {
    setTimeout(() => {
      catImageContainer.classList.remove("hide-cat");
      catImageContainer.classList.add("show-cat");
      catImage.setAttribute("src", "../images/cat-cry.png");
      catImage.style.width = "70%";
    }, 800);
  });

  noButton.addEventListener("mouseleave", () => {
    catImageContainer.classList.add("hide-cat");
    catImageContainer.classList.remove("show-cat");
  });
};
