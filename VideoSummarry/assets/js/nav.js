// nav-bar logo address
document.getElementById("logo").addEventListener("click", logo);

function logo() {
  window.location = "index.html";
}

// demo

var demo = document.getElementById("demo");
var videoContainerNav = document.querySelector(".video-container");
var closeVideoNav = document.querySelector(".close");
var videoNav = document.querySelector("iframe");

demo.addEventListener("click", viewVideo);
closeVideoNav.addEventListener("click", removeVideo);
function viewVideo() {
  videoContainerNav.classList.add("show");
  videoNav.play();
  // console.log("on")
}

closeVideoNav.addEventListener("click", removeVideo);

function removeVideo() {
  videoContainerNav.classList.remove("show");
  videoNav.pause();
  // console.log("off")
}
