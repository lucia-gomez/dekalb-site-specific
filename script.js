const audioFiles = {
  test: new Audio("test.mp3"),
};

for (let i = 1; i <= 12; i++) {
  let n = i < 10 ? "0" + String(i) : String(i);
  audioFiles[i] = new Audio(`Installation ${n}.mp3`);
}

const statusText = document.getElementById("status");
let currentAudio = null;

function playAudio(buttonId) {
  const audio = audioFiles[buttonId];

  if (currentAudio && !currentAudio.paused) {
    currentAudio.pause();
    currentAudio.currentTime = 0;
    currentAudio.removeEventListener("ended", onAudioEnded);
  }

  if (audio) {
    statusText.textContent = `Playing ${buttonId}...`;
    audio.play();
    currentAudio = audio;
    currentAudio.addEventListener("ended", onAudioEnded);
  }
}

function onAudioEnded() {
  statusText.textContent = "---";
}

// Attach event listeners to buttons
document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", function () {
    playAudio(this.id);
    this.classList.add("clicked");
  });
});
