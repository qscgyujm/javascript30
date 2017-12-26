const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
const progress = player.querySelector('.progress');
const progressBar = player.querySelector('.progress__filled');
const toggleButton = player.querySelector('.toggle');
const skipButtons = player.querySelectorAll('[data-skip]');
const ranges = player.querySelectorAll('.player__slider');
const fScreenButton = player.querySelector('.fullSceen')

function togglePlay() {
  // const methods = video.paused ? 'play' : 'pause'
  video[video.paused ? 'play' : 'pause']();
}
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/paused

function changeVideoIcon() {
  console.log('paused', this.paused);
  const icon = this.paused ? '開始' : '暫停'
  toggleButton.textContent = icon
}

function skip() {
  const skipSecode = this.dataset.skip;
  console.log('skip:', skipSecode, 'currentTime:', video.currentTime);
  video.currentTime +=parseInt(this.dataset.skip)
}
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime

function changeRangeRate() {
  console.log(this.name, this.value)
  video[this.name] = this.value
}
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/playbackRate
// https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume

function videoProgress() {
  const percent = (video.currentTime / video.duration) * 100
  progressBar.style.flexBasis = `${percent}%`;
  // progressBar.style.flexBasis = `${percent}%`;
  console.log(percent);
}

function scrubProgress(e) {
  // console.log(e.offsetX)
  const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
  video.currentTime = scrubTime
  console.log(scrubTime)
}

function keydownEvent(e){
  // e.preventDefault()
  console.log(e.keyCode, e)
  if(e.keyCode == 32) togglePlay() //空白
  // 上下左右
  if(e.keyCode == 37) video.currentTime += -5
  if(e.keyCode == 39) video.currentTime += 5

  if(e.keyCode == 38) video.volume += .05 
  if(e.keyCode == 40) video.volume += -.05 

  if(e.keyCode == 48) video.currentTime = 0
  if(e.keyCode == 49) video.currentTime = video.duration * .1
  if(e.keyCode == 50) video.currentTime = video.duration * .2
}

video.addEventListener('click', togglePlay)
video.addEventListener('play', changeVideoIcon)
video.addEventListener('pause', changeVideoIcon)
video.addEventListener('timeupdate', videoProgress)
// https://developer.mozilla.org/en-US/docs/Web/Events/timeupdate

toggleButton.addEventListener('click', togglePlay)

fScreenButton.addEventListener('click', function(){
  console.log('全螢幕');
  !document.webkitIsFullScreen ? player.webkitRequestFullscreen() : document.webkitExitFullscreen()
  fScreenButton.textContent = document.webkitIsFullScreen ? '半' : '全'
})

skipButtons.forEach(skipButton => skipButton.addEventListener('click', skip))
// skipButtons.addEventListener('click', skip)

ranges.forEach( range => range.addEventListener('input', changeRangeRate))
// ranges.forEach( range => range.addEventListener('mousemove', changeRangeRate))

progress.addEventListener('click', scrubProgress)

document.addEventListener('keydown', keydownEvent)

