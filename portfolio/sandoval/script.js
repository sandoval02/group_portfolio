// // script.js
// document.addEventListener("DOMContentLoaded", function () {
//     const burger = document.getElementById("burger");
//     const mobileMenu = document.getElementById("mobile-menu");
  
//     burger.addEventListener("click", () => {
//       mobileMenu.classList.toggle("hidden");
//     });
//   });
  

  const toggleBtn = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const body = document.body;

  toggleBtn.addEventListener('click', () => {
    body.classList.toggle('dark-mode');

    if (body.classList.contains('dark-mode')) {
      themeIcon.src = 'assets/sun-line.png';   // Show sun in dark mode
    } else {
      themeIcon.src = 'assets/moon-clear-line.png';  // Show moon in light mode
    }
  });

  const burgerBtn = document.querySelector(".burger");
  const mobileNavbar = document.querySelector(".mobile_navbar");
  
  burgerBtn.addEventListener("click", () => {
    if (mobileNavbar.classList.contains("scale-up-tr-normal")) {
      // Close the menu
      mobileNavbar.classList.remove("scale-up-tr-normal");
      setTimeout(() => {
        mobileNavbar.style.display = "none";
      }, 70); // Optional: delay hiding for smoother reverse feel
    } else {
      // Open and animate
      mobileNavbar.style.display = "flex";
      void mobileNavbar.offsetWidth; // force reflow
      mobileNavbar.classList.add("scale-up-tr-normal");
    }
  });
  