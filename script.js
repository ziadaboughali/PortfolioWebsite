document.getElementById("theme-switch").addEventListener("change", function(event) {
  const body = document.body;

  if (event.target.checked) {
    body.classList.add("light-mode");
  } else {
    body.classList.remove("light-mode");
  }
});

const companyBtns = document.querySelectorAll(".company-btn");
const jobDetails = document.querySelectorAll(".job-info");
const indicator = document.querySelector(".indicator");

const firstButton = companyBtns[0];
const buttonHeight = firstButton.offsetHeight + parseFloat(window.getComputedStyle(firstButton).marginBottom);
indicator.style.top = `0px`;


companyBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const index = parseInt(btn.getAttribute("data-index"));

    companyBtns.forEach((b, idx) => {
      if (index === idx) {
        b.classList.add("active");
        jobDetails[idx].style.display = "block";
        const buttonHeight = 36;
        indicator.style.top = `${idx * buttonHeight}px`;
      } else {
        b.classList.remove("active");
        jobDetails[idx].style.display = "none";
      }
    });
  });
});

function createStar() {
  const star = document.createElement("div");
  star.className = "star";
  star.style.width = `${Math.random() * 3}px`;
  star.style.height = star.style.width;
  star.style.top = `${Math.random() * 100}vh`;
  star.style.left = `${Math.random() * 100}vw`;
  star.style.animationDuration = `${Math.random() * 3 + 2}s`;
  return star;
}

const starlight = document.querySelector(".starlight");
const numberOfStars = 400;

for (let i = 0; i < numberOfStars; i++) {
  starlight.appendChild(createStar());
}

createStar()
