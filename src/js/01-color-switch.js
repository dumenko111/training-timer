/*Перемикач кольорів
Є масив кольорів в hex-форматі і кнопки Start і Stop.
Напиши скрипт, який після натискання кнопки Start, раз в 
секунду змінює колір фону body на випадкове значення з масиву 
використовуючи інлайн-стиль. При натисканні на кнопку Stop, 
зміна кольору фону повинна зупинятися.
⚠️ Врахуй, на кнопку Start можна натиснути нескінченну кількість разів. 
Зроби так, щоб поки зміна теми запущена, кнопка Start була не активна..
Для генерації випадкового числа (індекс елемента масиву квітів), 
використовуй функцію randomIntegerFromInterval.*/
const randomIntegerFromInterval = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
}; 

const colors = ['#FFFFFF', '#2196F3', '#4CAF50', '#FF9800', '#009688', '#795548'];

const refs = {
    startBtn: document.querySelector('button[data-action="start"]'),
    stopBtn: document.querySelector('button[data-action="stop"]')
}

refs.startBtn.addEventListener('click', startChangeBodyColor)
refs.stopBtn.addEventListener('click', stopChangeBodyColor)

let intervalId = null


function startChangeBodyColor(e) {
    refs.startBtn.setAttribute("disabled", "disabled");
    refs.startBtn.classList.add('disabled')
    intervalId = setInterval(() => {
        const colorOption = randomIntegerFromInterval(0, colors.length)
        console.log(colors[colorOption])
        document.body.style.backgroundColor = colors[colorOption] 
    }, 1000) 
    return intervalId
}

function stopChangeBodyColor(e) {
    clearInterval(intervalId)
    refs.startBtn.removeAttribute("disabled")
    refs.startBtn.classList.remove('disabled')
}


