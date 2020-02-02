import { slideAnimation } from './animationSlide.js'

function buildSlider(dataSlide) {
  for (let value of dataSlide ) {
    const slider = document.querySelector('.slider')
    const slideData = `
      <div class="slide ${value.id == 0 ? 'active' : ''}" data-slide="slide-${value.id}">
        <div class="slide-item">
         <img src="${value.img}" alt="Slide"/>
         <div class="slide-item-caption">
           <div class="slide-item-caption__text">
             <h2>${value.caption}</h2>
           </div>
         </div>
        </div>
      </div>
    `
    slider.innerHTML += slideData
    slideAnimation(slideData)
  }
}
 
export { buildSlider }