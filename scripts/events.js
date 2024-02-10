// import player from "./music.js";
let rainInterval;
import { player } from "./index.js";

export const handleShowCat = () => {
  const yesButton = document.getElementById("yes");
  const noButton = document.getElementById("no");
  const catImageContainer = document.getElementById("cat-image-container");
  const catImage = document.getElementById("cat-image");
  const transitionContainer = document.getElementById("transition-container");

  let lastInteractionWasTouch = false;

  // Function to handle touch start to set the flag
  const handleTouchStart = () => {
    lastInteractionWasTouch = true;
  };

  const showYesCat = (e) => {
    if (lastInteractionWasTouch) return;
    setTimeout(() => {
      catImageContainer.style.top = "15%";
      catImageContainer.classList.add("show-cat");
      catImage.style.width = "50%";
      catImage.setAttribute("src", "../images/cat-heart.png");
    }, 400);
  };

  yesButton.addEventListener("mouseenter", showYesCat);

  const hideYesCat = () => {
    catImageContainer.classList.add("hide-cat");
    catImageContainer.classList.remove("show-cat");
    catImageContainer.style.top = "50%";
  };
  yesButton.addEventListener("mouseleave", hideYesCat);

  const showNoCat = (e) => {
    if (lastInteractionWasTouch) return;

    setTimeout(() => {
      catImageContainer.classList.remove("hide-cat");
      catImageContainer.classList.add("show-cat");
      catImage.style.width = "70%";
      catImageContainer.style.top = "15%";
      catImage.setAttribute("src", "../images/cat-cry.png");
    }, 400);
  };
  noButton.addEventListener("mouseenter", showNoCat);

  const hideNoCat = () => {
    catImageContainer.classList.add("hide-cat");
    catImageContainer.classList.remove("show-cat");
    catImageContainer.style.top = "50%";
  };

  noButton.addEventListener("mouseleave", hideNoCat);

  document.addEventListener("touchstart", handleTouchStart);

  // Reset the touch interaction flag on mousemove to ensure mouse interactions are detected correctly
  document.addEventListener("mousemove", () => {
    lastInteractionWasTouch = false;
  });

  let showingHearts = false;
  const showHeartCat = () => {
    noButton.classList.add("hidden");

    catImage.style.width = "50%";

    if (!showingHearts) {
      catImageContainer.classList.remove("show-cat");
      setTimeout(() => {
        createHearts();
      }, 1000);
    } else {
      createHearts();
    }
    showingHearts = true;

    setTimeout(() => {
      catImageContainer.style.transitionDuration = "2s";
      catImageContainer.style.top = "0%";
      catImageContainer.classList.add("show-cat");
      catImage.setAttribute("src", "../images/cat-heart.png");
    }, 500);
  };

  yesButton.addEventListener("click", (e) => {
    if (player && player.playVideo) {
      player.playVideo();
    }
    console.log(e.type);
    yesButton.innerText = "Shoot Hearts!";
    yesButton.style.width = "100%";

    yesButton.removeEventListener("mouseenter", showYesCat);
    yesButton.removeEventListener("mouseleave", hideYesCat);

    noButton.removeEventListener("mouseenter", showNoCat);
    noButton.removeEventListener("mouseleave", hideNoCat);

    showHeartCat();
  });

  noButton.addEventListener("click", () => {
    if (player && player.loadVideoById) {
      player.loadVideoById({ videoId: "gJmuoOiZuNY" });
      player.playVideo();
    }

    const cardMessage = document.getElementById("card-message");
    cardMessage.innerText = "This was a cat-astrophe..";

    yesButton.removeEventListener("mouseenter", showYesCat);
    yesButton.removeEventListener("mouseleave", hideYesCat);

    noButton.removeEventListener("mouseenter", showNoCat);
    noButton.removeEventListener("mouseleave", hideNoCat);

    catImageContainer.classList.remove("cat-default");
    catImageContainer.classList.remove("show-cat");

    setTimeout(() => {
      catImageContainer.style.transitionDuration = "8s";
      catImageContainer.style.top = "0%";
      catImageContainer.classList.add("show-cat");
      catImage.setAttribute("src", "../images/cat-cry.png");
    }, 500);

    noButton.classList.add("hidden");
    yesButton.classList.add("hidden");

    rainEffect();
  });

  const heartsContainer = document.createElement("div");
  heartsContainer.setAttribute("id", "hearts-container");
  transitionContainer.appendChild(heartsContainer);
  const shootHearts = () => {
    const heart = document.createElement("img");
    heart.classList.add("shoot-heart");

    heart.style.left = Math.random() * 90 + "%";
    heart.style.animationDuration = "0.5s";

    heart.src = "../images/heart.png";
    heartsContainer.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 800);
  };

  const createHeart = () => {
    const heart = document.createElement("img");
    heart.classList.add("heart");
    heart.setAttribute("src", "../images/heart.png");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
  };

  const createHearts = () => {
    const intervalId = setInterval(shootHearts, 50);

    // Clear the interval after 3 seconds
    setTimeout(() => {
      clearInterval(intervalId);
    }, 4000);

    setTimeout(() => {
      setInterval(createHeart, 100);
    }, 3000);
  };

  const rainEffect = () => {
    const backgroundImage = document.getElementById(
      "valentines-background-image"
    );
    backgroundImage.classList.add("rain-background");
    document.body.classList.add("rainy");
    rainInterval = setInterval(letItRain, 50);
  };

  const letItRain = () => {
    const rainDrop = document.createElement("div");
    rainDrop.classList.add("rain");
    rainDrop.innerText = "|";

    rainDrop.style.left = Math.random() * 100 + "vw";
    rainDrop.style.animationDuration = Math.random() * 1.5 + "s";

    document.body.appendChild(rainDrop);

    setTimeout(() => {
      rainDrop.remove();
    }, 5000);
  };
};
