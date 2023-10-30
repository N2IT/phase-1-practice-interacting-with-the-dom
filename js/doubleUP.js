//set counter interval
setInterval(function(){
    const counter = document.querySelector('#counter')
    counter.innerHTML = parseInt(counter.innerHTML) + 1
}, 1000)

//minus button
const minus = document.querySelector('#minus')
minus.addEventListener('click', reduceTime)

function reduceTime(){
    const counter = document.querySelector('#counter')
    counter.innerHTML = parseInt(counter.innerHTML) - 1}

//add button
const plus = document.querySelector('#plus')
plus.addEventListener('click', addUp)

function addUp() {
    const counter = document.querySelector('#counter')
    counter.innerHTML = parseInt(counter.innerHTML) + 1
}

//Like button 
const heart = document.querySelector('#heart')
heart.addEventListener('click', like)

const ul = document.querySelector('ul')
let likesCount = 0
const likesPerValue = {}

function like(){
    likesCount ++;
    const counter = document.querySelector('#counter')
    const timerValue = counter.innerHTML
    likesPerValue[timerValue] = (likesPerValue[timerValue] || 0) +1;
    const existingLi = ul.querySelector(`li[data-timer-value="${timerValue}"]`)

    if (existingLi){
        existingLi.textContent = `${timerValue} has been liked ${likesPerValue[timerValue]} times`;
    } else {
        const li = document.createElement('li');
        li.textContent = `${timerValue} has been liked ${likesPerValue[timerValue]} time`
        li.dataset.timerValue = timerValue
        ul.appendChild(li)
    }
}