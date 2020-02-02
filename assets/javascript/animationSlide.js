function slideAnimation(slideData) {
  const slides = document.querySelectorAll('.slide')
    let currentSlide = 0
    const slideInterval = setInterval(() => {
      slides[currentSlide].classList.remove('active')
      currentSlide = (currentSlide + 1) % slides.length
      slides[currentSlide].classList.add('active')
    }, 5000)
}

export { slideAnimation }