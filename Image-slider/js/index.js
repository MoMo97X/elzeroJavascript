// selecting all element's in my project
const slides = document.querySelectorAll(".slider img");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const imgId = document.querySelector(".img-id");
const galleryContainer = document.querySelector(".gallery-container");

// making the gallery size dinamic
galleryContainer.style.gridTemplateColumns = `repeat(${slides.length},1fr)`;

// Counter for image slider.
let currentSlide = 0;

// triggor for the first image.
updateSliderControls();

function goToSlide(n) {
  // 1. remove active class from current slide image.
  slides[currentSlide].classList.remove("active");

  // 2. determin the new currnt slide image.
  currentSlide = (n + slides.length) % slides.length;

  // 3. add active class for the current slide image.
  slides[currentSlide].classList.add("active");

  // 4. update slider controls (triggor the function).
  updateSliderControls();

  // 5. update thumbnail active state
  updateThumbnailActiveState(currentSlide);
}

prevBtn.addEventListener("click", () => {
  goToSlide(currentSlide - 1);
  //imgId.textContent = slides[currentSlide].getAttribute("alt");
});

nextBtn.addEventListener("click", () => {
  goToSlide(currentSlide + 1);
  //imgId.textContent = slides[currentSlide].getAttribute("alt");
});

// declaire the function.
function updateSliderControls() {
  // condition assigned to the prevBtn to disable it's functionality.
  prevBtn.disabled = currentSlide === 0;

  // condition assigned to the nextBtn to disable it's funtionality.
  nextBtn.disabled = currentSlide === slides.length - 1;

  // showing and update for the image id.
  imgId.innerHTML = `image ${currentSlide + 1} of ${slides.length}`;
}

slides.forEach((img, index) => {
  const thumbnail = img.cloneNode();
  //thumbnail.classList.remove("active");
  thumbnail.addEventListener("click", () => {
    goToSlide(index);
  });
  galleryContainer.appendChild(thumbnail);
});

function updateThumbnailActiveState(index) {
  galleryContainer.querySelectorAll("img").forEach((img, i) => {
    img.classList.toggle("active", i === index);
  });
}
