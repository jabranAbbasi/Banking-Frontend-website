const textSlides = [
  {
    title: "Banking Solutions",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident cupiditate suscipit."
  },
  {
    title: "Financing Solutions",
    desc: "Sapiente officia inventore magni libero velit esse soluta adipisci."
  },
  {
    title: "Secure Transactions",
    desc: "Aliquam provident voluptas natus ullam accusantium quibusdam."
  }
];

let textIndex = 0;
const titleEl = document.getElementById("slide-title");
const descEl = document.getElementById("slide-desc");
const dots = document.querySelectorAll(".dot");

function showTextSlide() {
  titleEl.textContent = textSlides[textIndex].title;
  descEl.textContent = textSlides[textIndex].desc;

  dots.forEach((dot, i) => {
    dot.classList.toggle("active", i === textIndex);
  });

  textIndex = (textIndex + 1) % textSlides.length;
}

setInterval(showTextSlide, 4000);


dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    textIndex = i;
    showTextSlide();
  });
});




//Gallery Filtering //
const filterButtons = document.querySelectorAll(".filter-btn");
const galleryItems = document.querySelectorAll(".gallery-item");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    document.querySelector(".filter-btn.active").classList.remove("active");
    button.classList.add("active");

    const category = button.getAttribute("data-filter");

    galleryItems.forEach(item => {
      if (category === "all" || item.classList.contains(category)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });
});





let currentIndex = 0;
const lightbox = document.querySelector("#lightbox");
const lightboxImg = document.querySelector("#lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");

function openLightbox(index) {
  currentIndex = index;
  lightbox.style.display = "block";
  lightboxImg.src = galleryItems[index].querySelector("img").src;
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function showPrev() {
  currentIndex = (currentIndex - 1 + galleryItems.length) % galleryItems.length;
  lightboxImg.src = galleryItems[currentIndex].querySelector("img").src;
}

function showNext() {
  currentIndex = (currentIndex + 1) % galleryItems.length;
  lightboxImg.src = galleryItems[currentIndex].querySelector("img").src;
}

galleryItems.forEach((item, index) => {
  item.addEventListener("click", () => openLightbox(index));
});

closeBtn.addEventListener("click", closeLightbox);
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);

window.addEventListener("keydown", (e) => {
  if (lightbox.style.display === "block") {
    if (e.key === "ArrowLeft") showPrev();
    if (e.key === "ArrowRight") showNext();
    if (e.key === "Escape") closeLightbox();
  }
});





const hiwSlides = document.querySelectorAll(".hiw-slide");
const hiwLeftBtn = document.querySelector(".hiw-arrow.left");
const hiwRightBtn = document.querySelector(".hiw-arrow.right");

let hiwIndex = 0;

function showHiwSlide(i) {
  hiwSlides.forEach((slide, idx) => {
    slide.classList.remove("active");
    if (i === idx) slide.classList.add("active");
  });
}

hiwRightBtn.addEventListener("click", () => {
  hiwIndex = (hiwIndex + 1) % hiwSlides.length;
  showHiwSlide(hiwIndex);
});

hiwLeftBtn.addEventListener("click", () => {
  hiwIndex = (hiwIndex - 1 + hiwSlides.length) % hiwSlides.length;
  showHiwSlide(hiwIndex);
});

setInterval(() => {
  hiwIndex = (hiwIndex + 1) % hiwSlides.length;
  showHiwSlide(hiwIndex);
}, 5000);








let testimonialIndex = 0;
showTestimonial(testimonialIndex);

function showTestimonial(index) {
  let slides = document.querySelectorAll(".testimonial-section .slide");
  let dots = document.querySelectorAll(".testimonial-section .dot");

  if (index >= slides.length) testimonialIndex = 0;
  if (index < 0) testimonialIndex = slides.length - 1;

  slides.forEach(slide => slide.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));

  slides[testimonialIndex].classList.add("active");
  dots[testimonialIndex].classList.add("active");
}

function currentTestimonial(n) {
  testimonialIndex = n;
  showTestimonial(testimonialIndex);
}

setInterval(() => {
  testimonialIndex++;
  showTestimonial(testimonialIndex);
}, 5000);
