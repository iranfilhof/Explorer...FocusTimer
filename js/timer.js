import { buttonStop } from "./elements.js"
import Sounds from "./sounds.js"

export default function Timer({
  minutesDisplay,
  secondsDisplay,
  timerTimeOut,
  buttonPlay,
  buttonStop
}) {

  function controlsHide() {
    buttonPlay.classList.toggle('hide')
    buttonStop.classList.toggle('hide')
  }

  function pauseTimer() {
    clearTimeout(timerTimeOut)
  }

  function timeAddition() {
    minutesDisplay.innerText = Number(minutesDisplay.innerText) + 5
  }

  function timeSubtraction() {
    minutesDisplay.innerText = Number(minutesDisplay.innerText) - 5

    if(minutesDisplay.innerText <= 0) {
      changeTimer()
    }
  }

  function changeTimer() {
    minutesDisplay.innerText = "00"
    secondsDisplay.innerText = "00"
  }

  function timeIsOver() {
    minutesDisplay.innerText = "00"
    secondsDisplay.innerText = "00"
  }

  function countdown() {
  timerTimeOut = setTimeout(function() {
    let seconds = Number(secondsDisplay.innerText)
    let minutes = Number(minutesDisplay.innerText)
    let isFinished = minutes <= 0 && seconds <= 0

    minutesDisplay.innerText= String(minutes).padStart(2, "0")
    
    if(seconds <= 0) {
      seconds = 60
      minutesDisplay.innerText = String(minutes - 1).padStart(2, "0")
    }
    secondsDisplay.innerText = String(seconds - 1).padStart(2, "0")
    
    if(isFinished) {
      Sounds().timeEnd()
      timeIsOver()
      controlsHide()
      return
    }

    countdown()

  }, 1000)}

  return {
    countdown,
    pauseTimer,
    timeAddition,
    timeSubtraction,
    controlsHide
  }
}