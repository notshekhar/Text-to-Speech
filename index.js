let speak = document.querySelector('.speak')
let volume = document.querySelector('.vol')
let rate = document.querySelector('.ratee')
let pitch = document.querySelector('.pit')
let text = document.querySelector('.textarea')
let inputs = document.querySelectorAll('input[type = range]')

let s = new SpeechSynthesisUtterance()

speak.onclick = () =>{
 v = volume.value
 r = rate.value
 p = pitch.value
 t = text.value
 s.text = t
 s.volume = v
 s.rate = r
 s.pitch = p
 speechSynthesis.speak(s)
}
