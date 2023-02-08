// Hamburger Menu on Mobile Views
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');
const close = document.getElementById('close');

bar.onclick = () => { navbar.classList.add('active'); }
close.onclick = () => { navbar.classList.remove('active'); }

// Giving Active Class to Active Anchor Tag in Navbar
const navLinks = document.querySelectorAll('.navLink');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    navLinks.forEach(link => {
      link.classList.remove('active');
    });
    e.target.classList.add('active');
  });
});

// Prevent losing active class after loading a new page
const currentUrl = window.location.href;
navLinks.forEach(link => {
  link.classList.remove('active');
  if (link.href === currentUrl) {
    link.classList.add('active');
  }
});


// Testimonial Carousel:
const buttons = document.querySelectorAll('[data-carousel-button]');

// Automatically Switch Slides
let intervalId = setInterval(() => {
    const nextButton = Array.prototype.filter.call(buttons, button => button.dataset.carouselButton === "next")[0];
    nextButton.click();
  }, 5000);
  
  // stop interval after 1 minute
  setTimeout(() => {
    clearInterval(intervalId);
  }, 60000);

//   Carousel Slides
buttons.forEach(button => {
    button.addEventListener("click", () => {
      const offset = button.dataset.carouselButton === "next" ? 1 : -1
      const slides = button
        .closest("[data-carousel]")
        .querySelector("[data-slides]")
  
      const activeSlide = slides.querySelector("[data-active]")
      let newIndex = [...slides.children].indexOf(activeSlide) + offset
      if (newIndex < 0) newIndex = slides.children.length - 1
      if (newIndex >= slides.children.length) newIndex = 0
  
      slides.children[newIndex].dataset.active = true
      delete activeSlide.dataset.active
    })
  })

  // Changing Pictures in Shop Page
  const mainImg = document.getElementById('mainImg');
  const smallImgs = document.querySelectorAll('.small-img');

    for (let i = 0; i < smallImgs.length; i++) {
      smallImgs[i].addEventListener('click', () => {
        mainImg.src = smallImgs[i].src;
      });
    }