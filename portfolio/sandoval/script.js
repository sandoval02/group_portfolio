const toggleBtn = document.getElementById("themeToggle");
const themeIcon = document.getElementById("themeIcon");
const body = document.body;

toggleBtn.addEventListener("click", () => {
  body.classList.toggle("dark-mode");

  if (body.classList.contains("dark-mode")) {
    themeIcon.src = "assets/sun-line.png";
  } else {
    themeIcon.src = "assets/moon-clear-line.png";
  }
});

const burgerBtn = document.querySelector(".burger");
const mobileNavbar = document.querySelector(".mobile_navbar");

burgerBtn.addEventListener("click", () => {
  if (mobileNavbar.classList.contains("scale-up-tr-normal")) {
    mobileNavbar.classList.remove("scale-up-tr-normal");
    setTimeout(() => {
      mobileNavbar.style.display = "none";
    }, 70);
  } else {
    mobileNavbar.style.display = "flex";
    void mobileNavbar.offsetWidth;
    mobileNavbar.classList.add("scale-up-tr-normal");
  }
});
