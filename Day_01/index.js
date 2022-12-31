function removeTransition(e){
    if(e.propertyName!='transform')return
    e.target.classList.remove('playing')
}

function playingSound(e){
    let key = document.querySelector(`div[key-data="${e.keyCode}"]`)
    let audio = document.querySelector(`audio[key-data="${e.keyCode}"]`)
    if(!audio)return
    key.classList.add('playing')
    audio.currentTime = 0
    audio.play()
}

let keys =Array.from(document.querySelectorAll('.key'))
keys.forEach(a=>a.addEventListener('transitionend',removeTransition))
window.addEventListener('keydown',playingSound)
