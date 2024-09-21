const audioFiles = {
  test: new Audio("test.mp3"),
};

function playAudio(buttonId) {
  const audio = audioFiles["test"]; // TODO use actual [buttonId]
  if (audio) {
    audio.play();
  }
}

// Attach event listeners to buttons
document.querySelectorAll(".button").forEach((button) => {
  button.addEventListener("click", function () {
    playAudio(this.id);
    this.classList.add("clicked");
  });
});
