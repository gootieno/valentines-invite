// import player from "./music.js";
let rainInterval;

var player;
export function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "300px", // Set to '0' to hide the video; '1' for minimal visibility
    width: "400px",
    videoId: "xqfckiR2lfs", // Your YouTube video ID
    playerVars: {
      autoplay: 1, // Don't autoplay on load
      controls: 0, // No controls
      showinfo: 0,
      modestbranding: 1,
      loop: 1,
      fs: 0,
      cc_load_policy: 0,
      iv_load_policy: 3,
      autohide: 0,
    },
    events: {
      onReady: onPlayerReady,
    },
  });
}

function onPlayerReady(event) {
  // Player is ready
}

export const handleShowCat = () => {
  const yesButton = document.getElementById("yes");
  const noButton = document.getElementById("no");
  const catImageContainer = document.getElementById("cat-image-container");
  const catImage = document.getElementById("cat-image");
  const transitionContainer = document.getElementById("transition-container");
  const showYesCat = () => {
    setTimeout(() => {
      catImageContainer.classList.remove("hide-cat");
      catImageContainer.classList.add("show-cat");
      catImage.style.width = "50%";
      catImage.setAttribute("src", "../images/cat-please.png");
    }, 800);
  };

  yesButton.addEventListener("mouseenter", showYesCat);

  const hideYesCat = () => {
    catImageContainer.classList.add("hide-cat");
    catImageContainer.classList.remove("show-cat");
  };
  yesButton.addEventListener("mouseleave", hideYesCat);

  const showNoCat = () => {
    setTimeout(() => {
      catImageContainer.classList.remove("hide-cat");
      catImageContainer.classList.add("show-cat");
      catImage.style.width = "70%";
      catImage.setAttribute("src", "../images/cat-cry.png");
    }, 800);
  };
  noButton.addEventListener("mouseenter", showNoCat);

  const hideNoCat = () => {
    catImageContainer.classList.add("hide-cat");
    catImageContainer.classList.remove("show-cat");
  };

  noButton.addEventListener("mouseleave", hideNoCat);

  let showingHearts = false;
  const showHeartCat = () => {
    noButton.classList.add("hidden");
    if (window.innerWidth < 500)
      catImage.setAttribute("src", "../images/cat-heart.png");

    if (!showingHearts) {
      catImageContainer.classList.remove("show-cat");
      setTimeout(() => {
        createHearts();
      }, 1000);
    } else {
      createHearts();
    }
    showingHearts = true;
    catImageContainer.style.transitionDuration = "1s";
    catImage.style.width = "60%";

    setTimeout(() => {
      catImageContainer.classList.add("show-cat");
      catImage.setAttribute("src", "../images/cat-heart.png");
    }, 1200);
  };

  yesButton.addEventListener("click", () => {
    if (player && player.playVideo) {
      player.playVideo();
    }

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

    catImageContainer.classList.add("show-cat");
    catImageContainer.classList.remove("cat-default");
    catImageContainer.classList.remove("hide-cat");

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

    heart.style.left = Math.random() * 25 + "vw";
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
