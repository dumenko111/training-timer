/*Таймер обратного отсчета
Создай плагин настраиваемого таймера, который ведет обратный
 отсчет до предварительно определенной даты. 
 Такой плагин может использоваться в блогах и интернет-магазинах, 
 страницах регистрации событий, во время технического обслуживания и т. д.
 
 Плагин ожидает следующую HTML-разметку и показывает четыре цифры: 
 дни, часы, минуты и секунды в формате XX:XX:XX:XX. 
 Количество дней может состоять из более чем двух цифр.*/
const refs = {
  daysRefs: document.querySelector('span[data-value="days"]'),
  hoursRefs: document.querySelector('span[data-value="hours"]'),
  minsRefs: document.querySelector('span[data-value="mins"]'),
  secsRefs: document.querySelector('span[data-value="secs"]'),
}

 //Плагин это класс CountdownTimer, экземпляр которого создает новый таймер с настройками.
class CountdownTimer {
  constructor({selector, targetDate}) {
    this.selector = selector
    this.targetDate = targetDate
  }

    start() {
    setInterval(() => {
      const currentDate = Date.now()
      const deltaTime = this.targetDate - currentDate;
      this.updateCounter(deltaTime)
    }, 1000)
  }

  updateCounter(time) {
    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)); 
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    // console.log(`${days}: ${hours}: ${mins}: ${secs}`)

    refs.daysRefs.textContent = `${days}`
    refs.hoursRefs.textContent = `${hours}`
    refs.minsRefs.textContent = `${mins}`
    refs.secsRefs.textContent = `${secs}`
  }
} 


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Apr 01, 2023'),
 });
timer.start()
