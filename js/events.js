import {
  buttonPlay,
  buttonStop,
  buttonAddition,
  buttonSubtraction,
  buttonSoundTree,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFireplace,
} from "./elements.js"

export default function({sound, timer}) {

  buttonPlay.addEventListener('click', function() {
    sound.buttonPress()
    timer.countdown()
    timer.controlsHide()
  })

  buttonStop.addEventListener('click', function() {
    sound.buttonPress()
    timer.pauseTimer()
    timer.controlsHide()
  })

  buttonAddition.addEventListener('click', function() {
    sound.buttonPress()
    timer.timeAddition()
  })

  buttonSubtraction.addEventListener('click', function() {
    sound.buttonPress()
    timer.timeSubtraction()
  })

  buttonSoundTree.addEventListener('click', function() {
    buttonSoundTree.classList.toggle('selected')
    buttonSoundRain.classList.remove('selected')
    buttonSoundCoffeeShop.classList.remove('selected')
    buttonSoundFireplace.classList.remove('selected')
    sound.soundTree()
  })
  
  buttonSoundRain.addEventListener('click', function() {
    buttonSoundTree.classList.remove('selected')
    buttonSoundRain.classList.toggle('selected')
    buttonSoundCoffeeShop.classList.remove('selected')
    buttonSoundFireplace.classList.remove('selected')
    sound.soundRain()
  })
  
  buttonSoundCoffeeShop.addEventListener('click', function() {
    buttonSoundTree.classList.remove('selected')
    buttonSoundRain.classList.remove('selected')
    buttonSoundCoffeeShop.classList.toggle('selected')
    buttonSoundFireplace.classList.remove('selected')
    sound.soundCoffeeShop()
  })
  
  buttonSoundFireplace.addEventListener('click', function() {
    buttonSoundTree.classList.remove('selected')
    buttonSoundRain.classList.remove('selected')
    buttonSoundCoffeeShop.classList.remove('selected')
    buttonSoundFireplace.classList.toggle('selected')
    sound.soundFireplace()
  })
}