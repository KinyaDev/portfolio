function musicPlayer() {
  // Existing code unchanged.
  window.onload = function () {
    var context = new AudioContext();
    // Setup all nodes
    // ...

    let songs = [
      {
        filname: "deep-in-abyss-8bit.mp3",
        credits: ` Deep in Abyss from Made In Abyss`,
      },
      {
        filname: "night-running-8bit.mp3",
        credits: `NIGHT RUNNING from BNA: Brand New Animal`,
      },
    ];

    let count = 0;
    let nowplaying = document.querySelector(".np");
    let btn = document.querySelector(".unmute");
    let audio = document.querySelector("audio");

    btn.addEventListener("click", (ev) => {
      context.resume();
      nowplaying.textContent = "Playing " + songs[1].credits;
      audio.play();

      btn.remove();
    });
  };
}

musicPlayer();
