const secondsHand = document.querySelector('.second-hand')
const minHand = document.querySelector('.min-hand')
const hourHand = document.querySelector('.hour-hand')

function setDate(){
    const now = new Date()

    const seconds = now.getSeconds()
    const minutes = now.getMinutes()
    const hours = now.getHours()

    const secondsdeg = ((seconds/60)*360)+90
    const minutesdeg = ((minutes/60)+(seconds/60)/60)*360+90
    const hoursdeg = (hours/12+(minutes/60)/12)*360+90

    secondsHand.style.transform = `rotate(${secondsdeg}deg)`
    minHand.style.transform = `rotate(${minutesdeg}deg)`
    hourHand.style.transform = `rotate(${hoursdeg}deg)`
}

setInterval(setDate,1000)
setDate()