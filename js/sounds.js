import {
  buttonSoundTree,
  buttonSoundRain,
  buttonSoundCoffeeShop,
  buttonSoundFireplace
} from "./elements.js"

export default function() {
  const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
  const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")
  const soundBackgroundTree = new Audio('sounds/Floresta.wav')
  const soundBackgroundRain = new Audio('sounds/Chuva.wav')
  const soundBackgroundCoffeeShop = new Audio('sounds/Cafeteria.wav')
  const soundBackgroundFireplace = new Audio('sounds/Lareira.wav')

  soundBackgroundTree.loop = true
  soundBackgroundRain.loop = true
  soundBackgroundCoffeeShop.loop = true
  soundBackgroundFireplace.loop = true

  function buttonPress() {
    buttonPressAudio.play()
  }

  function timeEnd() {
    kitchenTimer.play()
  }

  function soundTree() {
    soundBackgroundTree.play()
    soundBackgroundRain.pause()
    soundBackgroundCoffeeShop.pause()
    soundBackgroundFireplace.pause()

    if(!buttonSoundTree.classList.contains('selected')) {
      soundBackgroundTree.pause()
    }
  }

  function soundRain() {
    soundBackgroundTree.pause()
    soundBackgroundRain.play()
    soundBackgroundCoffeeShop.pause()
    soundBackgroundFireplace.pause()

    if(!buttonSoundRain.classList.contains('selected')) {
      soundBackgroundRain.pause()
    }
  }

  function soundCoffeeShop() {
    soundBackgroundTree.pause()
    soundBackgroundRain.pause()
    soundBackgroundCoffeeShop.play()
    soundBackgroundFireplace.pause()

    if(!buttonSoundCoffeeShop.classList.contains('selected')) {
      soundBackgroundCoffeeShop.pause()
    }
  }

  function soundFireplace() {
    soundBackgroundTree.pause()
    soundBackgroundRain.pause()
    soundBackgroundCoffeeShop.pause()
    soundBackgroundFireplace.play()

    if(!buttonSoundFireplace.classList.contains('selected')) {
      soundBackgroundFireplace.pause()
    }
  }

  return {
    buttonPress,
    timeEnd,
    soundTree,
    soundRain,
    soundCoffeeShop,
    soundFireplace
  }
}