var video = document.getElementById("vido");
var btn = document.getElementById("btn");
function myfunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = "Pause";
  } else {
    video.pause();
    btn.innerHTML = "play";
  }
}
