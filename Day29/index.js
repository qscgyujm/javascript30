let countDown
const timerDisplay = document.querySelector('.display__time-left')
const endTimerDisplay = document.querySelector('.display__end-time')
const buttons = document.querySelectorAll('[data-time]')

function timer(seconds){
  clearInterval(countDown)
  // 清除 clearInterval 會推疊Interval

  const now = Date.now()
  const then = now + seconds * 1000 
  display(seconds)
  displayEndTimer(then)

  countDown = setInterval(()=>{
    const secondsLeft = Math.round((then - Date.now()) / 1000)
    if (secondsLeft < 0) {
      clearInterval(countDown)
      return
    }
    // console.log(secondsLeft);
    display(secondsLeft)
  }, 1000)
}

function display(seconds) {
  const minutes = Math.floor(seconds / 60)
  const reSeconds = seconds % 60
  const display = `${minutes}:${reSeconds < 10 ? '0' :''}${reSeconds}`
  timerDisplay.textContent = display

  document.title = display

  console.log({ minutes, reSeconds})
}

function displayEndTimer(timer){
  const end = new Date(timer)
  const hour = end.getHours() > 12 ? end.getHours()-12 : end.getHours()
  const minutes = end.getMinutes() < 10 ? '0'+ end.getMinutes() : end.getMinutes()
  const mm = end.getHours() < 12 ? 'AM' : 'PM'
  endTimerDisplay.textContent = ` Be Back At ${hour}:${minutes}, ${mm}`
}

function startTimer(){
  const seconds = parseInt( this.dataset.time)
  
  timer(seconds)
  console.log(this, this.dataset.time);
}

function submitEvnet(e){
  e.preventDefault()
  const mins = this.minutes.value
  timer( mins * 60 )
  console.log(mins)
  this.reset()
}

buttons.forEach(button => button.addEventListener('click', startTimer))

document.customForm.addEventListener('submit', submitEvnet)

// https://www.andyteki.com/programming/2016/06/04/timers-in-javascript.html