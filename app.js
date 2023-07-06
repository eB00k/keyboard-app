const insert = document.getElementById("insert");
const keys = document.querySelectorAll(".key");


const colors = ["#f1c232", "#8fce00", "#6bd1ff", "#ff83cc"];

function keyDownEffect(key) {
  let randomColor = colors[Math.floor(Math.random() * colors.length)];

  key.style.color = randomColor;
  key.style.boxShadow = `${randomColor} 2.5px 2.5px 3.2px`;
}

function keyUpEffect(key) {
  // reset the key element styles
  key.style.color = "#aaa";
  key.style.boxShadow = "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px";
}

// Event listener for keydown event
window.addEventListener("keydown", (e) => {
  // prevent the default behavior if the key code is "Tab"
  if (e.code === "Tab") {
    e.preventDefault();
  }

  insert.innerHTML = `
      <div class="box">
          ${e.key === " " ? "Space" : e.key}
          <small>event.key</small>
      </div>

      <div class="box">
          ${e.keyCode}
          <small>event.keyCode</small>
      </div>

      <div class="box">
          ${e.code}
          <small>event.code</small>
      </div>
    `;

  // loop through the keys and apply key down effect if the key code matches
  for (let i = 0; i < keys.length; i++) {
    if (e.code === keys[i].id) {
      keyDownEffect(keys[i]);
    }
  }
});

// Event listener for keyup event
window.addEventListener("keyup", (e) => {
  for (let i = 0; i < keys.length; i++) {
    if (e.code === keys[i].id) {
      setTimeout(() => {
        keyUpEffect(keys[i]);
      }, 300);
    }
  }
});

// ------ Dark & Light Mode Script
const mode = document.querySelector(".mode");
const body = document.body;
const moonIcon = document.querySelector(".fa-moon");
const sunIcon = document.querySelector(".fa-sun");

mode.addEventListener("click", (e) => {
  body.classList.toggle("dark-mode");
  moonIcon.classList.toggle("hidden");
  sunIcon.classList.toggle("hidden");
});
