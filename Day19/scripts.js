const video = document.querySelector('.playerCam');

const canvas = document.querySelector('.photoCan');
const ctx = canvas.getContext('2d');

const strip = document.querySelector('.strip');
const snap = document.querySelector('.snapAud');

function getVideo() {
  navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then( localMediaStream =>{
      // https://developer.mozilla.org/en-US/docs/Web/API/Navigator
      // https://developer.mozilla.org/zh-TW/docs/Web/API/MediaDevices
      // console.log(localMediaStream);

      video.src = window.URL.createObjectURL(localMediaStream)
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/src
      // https://developer.mozilla.org/en-US/docs/Web/API/Window/URL
      // https://developer.mozilla.org/zh-TW/docs/Web/API/Blob

      video.play()
    })
    .catch(err =>{
      console.error('Error', err)
    })
}

function paintToCanvas() {
  const width = video.videoWidth
  const height = video.videoHeight
  // https://developer.mozilla.org/zh-TW/docs/Web/API/HTMLVideoElement
  // console.log(width, height);

  canvas.width = width
  canvas.height = height
  
  return setInterval(()=>{
    ctx.drawImage(video, 0, 0, width, height)
    // console.log(video);

    let pixels = ctx.getImageData(0, 0, width, height)
    

    pixels.data = mirror(pixels, width, height)
    // console.log(pixels);
    // pixels = redEffect(pixels)
    // pixels值 紅色調大

    // pixels = rgbSplit(pixels)
    // ctx.globalAlpha = 0.1
    // 顏色 位置對調

    // pixels = greenScreen(pixels)
    
    ctx.putImageData(pixels, 0, 0);
    // debugger
    // 取得 pixels 資料 修改 傳入
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/getImageData
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/putImageData
    // https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalAlpha
    
    
    // https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Statements/debugger
  }, 16)

}

function takePhoto(){
  // palyed the sound
  snap.currentTime=0
  snap.play()

  // take data out of canvas
  const data = canvas.toDataURL('image/jpeg', 1.0)
  // https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/toDataURL
  const link = document.createElement('a')
  link.href = data
  link.setAttribute('Download', 'doenloadName')
  // link.textContent ='XxXxXxXxXxXxXxXxXxXx, '
  link.innerHTML=`<img src=${data} alt='canvase ' >`
  strip.insertBefore(link, strip.firstChild)
  // https://developer.mozilla.org/en-US/docs/Web/API/Node/insertBefore
}

function redEffect(pixels) {
  for(let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i + 0] = pixels.data[i + 0] + 100; // RED
    pixels.data[i + 1] = pixels.data[i + 1] * 0.5; // GREEN
    pixels.data[i + 2] = pixels.data[i + 2] * 0.5; // Blue
  }
  return pixels;
}

function rgbSplit(pixels) {
  for(let i = 0; i < pixels.data.length; i+=4) {
    pixels.data[i - 150] = pixels.data[i + 0]  // RED
    pixels.data[i + 100] = pixels.data[i + 1]  // GREEN
    pixels.data[i - 150] = pixels.data[i + 2]  // Blue
  }
  return pixels;
}

function greenScreen(pixels){
  const levels={}

  document.querySelectorAll('.rgb input').forEach(input =>{
    levels[input.name] = input.value
  })
  // console.log(levels);

  for(let i = 0; i < pixels.data.length; i = i + 4) {
    let red =   pixels.data[i + 0]   // RED
    let green = pixels.data[i + 1]   // GREEN
    let blue =  pixels.data[i + 2]   // Blue
    let alpha = pixels.data[i + 3]   //alpha

    if (red >= levels.rmin && green >= levels.gmin &&  blue >= levels.bmin 
          && red <= levels.rmax && green <= levels.gmax && blue <= levels.bmax) {
      pixels.data[i + 3] = 0
    }
  }
  // console.log(pixels);
  return pixels
}

function mirror(pixels, width, height){
  let index = 0
  for (let i = 0; i < pixels.height; i++) {
    // const tmpArray = pixels.data.splice(index, width)
    // console.log(pixels.data);
    for (let j = 0; j < pixels.width * 4 / 2; j+=4) {
      const start = index
      const end = index + pixels.width * 4

      const R = pixels.data[start+j+0]
      const G = pixels.data[start+j+1]
      const B = pixels.data[start+j+2]
      const A = pixels.data[start+j+3]

      pixels.data[start+j+0] = pixels.data[end-j-4]
      pixels.data[start+j+1] = pixels.data[end-j-3]
      pixels.data[start+j+2] = pixels.data[end-j-2]
      pixels.data[start+j+3] = pixels.data[end-j-1]

      pixels.data[end-j-4]= R
      pixels.data[end-j-3]= G
      pixels.data[end-j-2]= B
      pixels.data[end-j-1]= A
    }
    index = index + pixels.width * 4
  }
  return pixels
}


getVideo()
video.addEventListener('canplay', paintToCanvas)
// https://developer.mozilla.org/en-US/docs/Web/Events/canplay