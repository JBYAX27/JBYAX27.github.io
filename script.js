onload = () => {
    document.body.classList.remove("container");
  };

  
  let currentSlide = 0;

function showSlides() {
    const slides = document.querySelectorAll('.slider-img');
    currentSlide++;
    
    if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    
    const slider = document.querySelector('.slider');
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(showSlides, 3000); // Cambiar la imagen cada 3 segundos
