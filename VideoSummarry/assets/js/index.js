//counter

let chapter = document.getElementById("chapter-count");

let count = 41;
var counter;

counter = setInterval(() => {
  count++;

  chapter.innerHTML = count;
  chapter.style.transition = "ease 500ms";
}, 2000);

//exponent address

document.getElementById("exponent").addEventListener("click", exponent);
function exponent() {
  window.open("https://www.tryexponent.com/");
  //location.assign("https://www.tryexponent.com/");
}

//ycombinator address

document.getElementById("ycombinator").addEventListener("click", ycombinator);

function ycombinator() {
  window.open("https://www.ycombinator.com/");
  //location.assign("https://www.ycombinator.com/");
}

//fiveMinuteCrafts address

document
  .getElementById("fiveMinuteCrafts")
  .addEventListener("click", fiveMinuteCrafts);

function fiveMinuteCrafts() {
  window.open("https://www.instagram.com/5.min.crafts/");
  // location.assign("https://www.instagram.com/5.min.crafts/");
}

//chrisFix address

document.getElementById("chrisFix").addEventListener("click", chrisFix);

function chrisFix() {
  window.open("https://www.chris-fix.com/");
  // location.assign("https://www.chris-fix.com/");
}

// popUp Video player

var btn = document.querySelector(".play-btn");
var videoContainer = document.querySelector(".video-container");
var closeVideo = document.querySelector(".close");
var video = document.querySelector("iframe");

btn.addEventListener("click", viewVideo);

function viewVideo() {
  videoContainer.classList.add("show");
  video.play();
  // console.log("on")
}

closeVideo.addEventListener("click", removeVideo);

function removeVideo() {
  videoContainer.classList.remove("show");
  video.pause();
  // console.log("off")
}
