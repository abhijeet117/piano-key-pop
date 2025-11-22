let audios = [
  { key: "a", src: "./assets/audio/Piano11.ogg" },
  { key: "b", src: "./assets/audio/Piano110.mp3" },
  { key: "c", src: "./assets/audio/Piano111.ogg" },
  { key: "d", src: "./assets/audio/Piano112.ogg" },
  { key: "e", src: "./assets/audio/Piano113.mp3" },
  { key: "f", src: "./assets/audio/Piano114.mp3" },
  { key: "g", src: "./assets/audio/Piano115.mp3" },
  { key: "h", src: "./assets/audio/Piano116.ogg" },
  { key: "i", src: "./assets/audio/Piano117.mp3" },
  { key: "j", src: "./assets/audio/Piano118.mp3" },
  { key: "k", src: "./assets/audio/Piano119.ogg" },
  { key: "l", src: "./assets/audio/Piano120.mp3" },
  { key: "m", src: "./assets/audio/Piano121.mp3" },
  { key: "n", src: "./assets/audio/Piano122.mp3" },
  { key: "o", src: "./assets/audio/Piano123.mp3" },
  { key: "p", src: "./assets/audio/Piano124.mp3" },
  { key: "q", src: "./assets/audio/Piano125.mp3" },
  { key: "r", src: "./assets/audio/Piano12.mp3" },
  { key: "s", src: "./assets/audio/Piano13.mp3" },
  { key: "t", src: "./assets/audio/Piano14.ogg" },
  { key: "u", src: "./assets/audio/Piano15.mp3" },
  { key: "v", src: "./assets/audio/Piano16.ogg" },
  { key: "w", src: "./assets/audio/Piano17.mp3" },
  { key: "x", src: "./assets/audio/Piano18.ogg" },
  { key: "y", src: "./assets/audio/Piano19.mp3" },
];

let aud = document.querySelector("audio");
let body = document.querySelector("body");
let card = document.querySelector(".card");
let h1 = document.querySelector(".card h1");

body.addEventListener("keydown", function (elem) {
  h1.innerHTML = `${elem.key}`;
  // aud.play();

  for (let i = 0; i < audios.length; i++) {
    if (audios[i].key === elem.key) {
      aud.src = audios[i].src;
    }
  }
});
