let musics = [
  {
    title: "Warriors",
    artist: "LOL",
    source: "./src/audio/warriors.mp3",
  },
  {
    title: "Awaken",
    artist: "LOL",
    source: "./src/audio/awaken.mp3",
  },
  {
    title: "Legends Never Die",
    artist: "LOL",
    source: "./src/audio/legends.mp3",
  },
];

let music = document.getElementById("audio");
let musicIndex = 0;
let secondsMusic = document.getElementById("seconds");
let nameMusic = document.getElementById("track__name");
let playButton = document.getElementById("pause");
let progressBar = document.getElementById("progress");
let nextTrack = document.getElementById("next__track");
let previousTrack = document.getElementById("previous__track");

// Play/Pause button
function togglePlay() {
  if (music.paused) {
    music.src = musics[musicIndex].source;
    music.play();
    playButton.innerHTML = `<i class="material-symbols-outlined" id="pause"> pause_circle </i>`;
  } else {
    music.pause();
    playButton.innerHTML = `<i class="material-symbols-outlined" id="pause"> play_circle </i>`;
  }
}
playButton.addEventListener("click", togglePlay);

nameMusic.textContent =
  musics[musicIndex].title + " - " + musics[musicIndex].artist;

// Update progress bar and music duration
function updateProgress() {
  let progress = (music.currentTime / music.duration) * 200;
  progressBar.style.width = `${progress}%`;
  let currentTime = Math.floor(music.currentTime);
  let minutes = Math.floor(currentTime / 60);
  let seconds = currentTime % 60;
  if (seconds < 10) {
    seconds = "0" + seconds;
  }
  secondsMusic.textContent = `${minutes}:${seconds}`;
}
music.addEventListener("timeupdate", updateProgress);

// Change music when it ends
function changeMusic() {
  musicIndex++;
  if (musicIndex >= musics.length) {
    musicIndex = 0;
  }
  nameMusic.textContent =
    musics[musicIndex].title + " - " + musics[musicIndex].artist;
  music.src = musics[musicIndex].source;
  music.play();
}
music.addEventListener("ended", changeMusic);

// Wallpaper background
const nextBg = document.getElementById("next");
const previousBg = document.getElementById("previous");
const defaultBg = document.querySelector(".container");

let backgrounds = [
  "url(/src/img/nasus.jpg)",
  "url(/src/img/irelia.jpg)",
  "url(/src/img/ryze.jpg)",
  "url(/src/img/jax.jpg)",
];
let currentBackgroundIndex = 0;

// Change background
function changeBackground() {
  currentBackgroundIndex++;
  if (currentBackgroundIndex >= backgrounds.length) {
    currentBackgroundIndex = 0;
  }
  defaultBg.style.backgroundImage = backgrounds[currentBackgroundIndex];
}
nextBg.addEventListener("click", changeBackground);
previousBg.addEventListener("click", changeBackground);

nextTrack.addEventListener("click", () => {
  music.pause();
  changeMusic();
});

previousTrack.addEventListener("click", () => {
  music.pause();
  musicIndex--;
  if (musicIndex < 0) {
    musicIndex = musics.length - 1;
  }
  nameMusic.textContent =
    musics[musicIndex].title + "-" + musics[musicIndex].artist;
  music.src = musics[musicIndex].source;
  music.play();
});
