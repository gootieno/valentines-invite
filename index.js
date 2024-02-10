let rainInterval;

var player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("player", {
    height: "0", // Set to '0' to hide the video; '1' for minimal visibility
    width: "0",
    videoId: "xqfckiR2lfs", // Your YouTube video ID
    playerVars: {
      autoplay: 0, // Don't autoplay on load
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

window.onload = () => {
  let tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  let firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  const yesButton = document.getElementById("yes");
  const yesCat = document.getElementById("cat-yes");

  const showYesCat = () => {
    yesCat.classList.add("active");
  };
  yesButton.addEventListener("mouseenter", showYesCat);

  const hideYesCat = () => {
    yesCat.classList.remove("active");
  };
  yesButton.addEventListener("mouseleave", hideYesCat);

  const noButton = document.getElementById("no");
  const noCat = document.getElementById("cat-cry");

  const showNoCat = () => {
    noCat.classList.add("active");
  };
  noButton.addEventListener("mouseenter", showNoCat);

  const hideNoCat = () => {
    noCat.classList.remove("active");
  };
  noButton.addEventListener("mouseleave", hideNoCat);

  yesButton.addEventListener("click", () => {
    if (player && player.playVideo) {
      player.playVideo();
    }

    noCat.classList.remove("active");
    yesButton.innerText = "More Hearts";

    const cardMessage = document.getElementById("card-message");
    cardMessage.innerText = "Purrfect!";

    yesButton.removeEventListener("mouseenter", showYesCat);
    yesButton.addEventListener("mouseleave", hideYesCat);

    noButton.removeEventListener("mouseenter", showNoCat);
    noButton.removeEventListener("mouseleave", hideNoCat);

    noButton.classList.add("hidden");
    yesButton.innerText = "Click Me";
    const catHeart = document.getElementById("cat-heart");
    catHeart.classList.add("active");
    createHearts();
  });

  noButton.addEventListener("click", () => {
    if (player && player.loadVideoById) {
      player.loadVideoById({ videoId: "gJmuoOiZuNY" });
      player.playVideo();
    }
    const cardMessage = document.getElementById("card-message");
    cardMessage.innerText = "This was a cat-astrophe..";

    yesButton.removeEventListener("mouseenter", showYesCat);
    yesButton.addEventListener("mouseleave", hideYesCat);

    noButton.removeEventListener("mouseenter", showNoCat);
    noButton.removeEventListener("mouseleave", hideNoCat);
    noCat.classList.add("active");

    noButton.classList.add("hidden");
    yesButton.classList.add("hidden");

    rainEffect();
  });

  const createHearts = () => {
    yesCat.classList.remove("active");
    yesButton.classList.add("selected");
    // Start the interval
    const intervalId = setInterval(shootHearts, 50);

    // Clear the interval after 3 seconds
    setTimeout(() => {
      clearInterval(intervalId);
    }, 4000);

    setTimeout(() => {
      setInterval(createHeart, 100);
    }, 3000);
  };

  const cardContainerCover = document.getElementById("card-container-cover");
  const shootHeartsContainer = document.createElement("div");
  shootHeartsContainer.classList.add("shoot-hearts-container");
  shootHeartsContainer.style.position = "fixed";
  shootHeartsContainer.style.border = "2px solid red";
  cardContainerCover.appendChild(shootHeartsContainer);

  const shootHearts = () => {
    const heart = document.createElement("img");
    heart.classList.add("shoot-heart");

    heart.style.left = Math.random() * 25 + "vw";
    heart.style.animationDuration = "0.5s";

    heart.src = "./images/heart.png";
    shootHeartsContainer.appendChild(heart);
    setTimeout(() => {
      heart.remove();
    }, 800);
  };

  const createHeart = () => {
    const heart = document.createElement("img");
    heart.classList.add("heart");
    heart.setAttribute("src", "./images/heart.png");

    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 2 + 3 + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
      heart.remove();
    }, 5000);
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
