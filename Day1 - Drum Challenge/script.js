function playSound(e) {
    let audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    let key = document.querySelector(`.key[data-key = "${e.keyCode}"]`)
    
    if (!audio) return; 
    audio.play();
    audio.currentTime = 0
    
    key.classList.add('playing')
}
  
function removeTransition (e) {
  if (e.propertyName !== 'transform') return;
  this.classList.remove('playing')
}
  
let keys = document.querySelectorAll('.key')
keys.forEach(key => key.addEventListener('transitionend', removeTransition))

window.addEventListener('keydown', playSound)

function clickTrigger(e) {
  let key = this.dataset.key
  let audio = document.querySelector(`audio[data-key = "${key}"]`)
  this.classList.add('play')
  audio.currentTime = 0
  audio.play()
}
function unclickTrigger(e) {
  this.classList.remove('play')
}

const items = document.querySelectorAll('.item')
items.forEach(item => item.addEventListener('mousedown', clickTrigger))
items.forEach(item => item.addEventListener('mouseup', unclickTrigger))