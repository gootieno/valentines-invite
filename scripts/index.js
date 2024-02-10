import { createCardImageContainer } from "./card.js";
import { handleShowCat } from "./events.js";

export var player;
window.onYouTubeIframeAPIReady = function () {
  player = new YT.Player("player", {
    height: "300px", // Set to '0' to hide the video; '1' for minimal visibility
    width: "400px",
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
};

function onPlayerReady(event) {
  // Player is ready
}

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

window.onload = () => {
  let tag = document.createElement("script");
  tag.src = "https://www.youtube.com/iframe_api";
  let firstScriptTag = document.getElementsByTagName("script")[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  initializePage();
};
