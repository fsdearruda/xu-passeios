const links = document.querySelectorAll("a");

const music = document.getElementById("bg-music");

music.volume = 0.3;

links.forEach(link => {
  link.addEventListener("mouseenter", () => {
    link.classList.add("rainbow-active");
  });
  link.addEventListener("mouseleave", () => {
    link.classList.remove("rainbow-active");
  });
});

function bonk() {
  const img = document.createElement("img");
  img.id = "bonk-image";
  img.classList.add("select-none");
  img.draggable = false;

  img.src = "/assets/cursor/bonk.png";
  img.style.position = "absolute";
  img.style.transform = "translate(-50%, -50%)";
  img.style.left = `${event.pageX}px`;
  img.style.top = `${event.pageY}px`;

  img.style.width = "50px";

  document.body.appendChild(img);
  // Remove image after 1s
  setTimeout(() => {
    img.remove();
  }, 470);

  const bonk = document.getElementById("bonk");
  bonk.play();
}

// Toggle music when pressing M
window.addEventListener("keydown", event => {
  if (event.key === "m") {
    if (music.paused) {
      music.play();
    } else {
      music.pause();
    }
  }
});

const images = document.querySelectorAll("img");
images.forEach(image => {
  const normal = image.src.split("/").slice(3).join("/");
  image.addEventListener("mousedown", () => {
    bonk();
    const [name, ext] = normal.split(".");
    image.src = name + "-hit" + "." + ext;
    setTimeout(() => {
      image.src = normal;
    }, 500);
  });
});
