import { buildSlider } from './buildSlider.js'

function loadInfo() {
  fetch('assets/data/slides.json')
  .then((res) => {
    return res.json()
  })
  .then((dataSlide) => {
    buildSlider(dataSlide)   
  })
}

export { loadInfo }