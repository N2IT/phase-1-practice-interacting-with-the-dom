// Initialize intervalId
let intervalId;

// Start the timer
function startTimer() {
    intervalId = setInterval(function () {
        const counter = document.querySelector('#counter');
        counter.innerHTML = parseInt(counter.innerHTML) + 1;
    }, 1000);
}

startTimer(); // Start the timer when the page loads

// Minus button
const minus = document.querySelector('#minus');
minus.addEventListener('click', reduceTime);

function reduceTime() {
    const counter = document.querySelector('#counter');
    counter.innerHTML = parseInt(counter.innerHTML) - 1;
}

// Plus button
const plus = document.querySelector('#plus');
plus.addEventListener('click', addUp);

function addUp() {
    const counter = document.querySelector('#counter');
    counter.innerHTML = parseInt(counter.innerHTML) + 1;
}

// Like button and all activities
const heart = document.querySelector('#heart');
heart.addEventListener('click', like);

const ul = document.querySelector('ul');
let likesCount = 0;
const likesPerValue = {};

function like() {
    likesCount++;
    const counter = document.querySelector('#counter');
    const timerValue = counter.innerHTML;
    likesPerValue[timerValue] = (likesPerValue[timerValue] || 0) + 1;
    const existingLi = ul.querySelector(`li[data-timer-value="${timerValue}"]`);

    if (existingLi) {
        existingLi.textContent = `${timerValue} has been liked ${likesPerValue[timerValue]} times`;
    } else {
        const li = document.createElement('li');
        li.textContent = `${timerValue} has been liked ${likesPerValue[timerValue]} time`;
        li.dataset.timerValue = timerValue;
        ul.appendChild(li);
    }
}

// Pause and Resume buttons
let pause = document.querySelector('#pause');
pause.addEventListener('click', togglePause);


function togglePause() {
    const buttons = document.getElementsByTagName('button'); // Select all buttons
    if (pause.id === 'pause') {
        clearInterval(intervalId);
        pause.innerText = 'Resume';
        pause.id = 'resume';
        let resume = document.querySelector('#resume');
        for (let i = 0; i < buttons.length; i++) {
            if (buttons[i].id !== 'pause' && buttons[i].id !== 'resume') {
                buttons[i].disabled = true;
            }
        }
    } else {
        unPause()
    }
}

function unPause(){
    startTimer()
    const buttons = document.getElementsByTagName('button'); // Select all buttons
    pause.innerText = 'pause';
    pause.id = 'pause';
    for (let i = 0; i < buttons.length; i++) {
        if (buttons[i].id !== 'pause' && buttons[i].id !== 'resume') {
            buttons[i].disabled = false;
        }
    }

}

//append comments to comments section
let form = document.querySelector('form')
    form.addEventListener('submit',(e) => {
    e.preventDefault()
    commentLines(e.target.comment.value);
    form.reset();
    }

    )
function commentLines(inputValue) {
    let list = document.querySelector('#list')
    let ul = document.createElement('ul')
    let li = document.createElement('li')
    li.textContent = inputValue
    list.appendChild(ul)
    ul.appendChild(li)

}