# Day11 Custom HTML5 Video Player

[Demo](https://qscgyujm.github.io/javascript30/Da11/index.html)

第11天的實作目標是要做出一個客製化的網頁影像播放工具。

在Html5中本身就有`video`元素提供影音播放的功能。

但卻沒有附加控制元素，因為了控制`video`，需要自行建立控制`video`元素的功能。

因此接下來是實作控制元素功能。

1. 建立播放與暫停功能，和切換播放和暫停的圖示。

首先在播放鍵建立`click`事件，當`click`事件發生時，判斷`video.paused`的狀態，當`paused=true`時，代表現在`video`是暫停狀態，要`video.play()` 讓`video`播放，`paused=false`就是播放狀態要`video.pause()`來讓`video`暫停。

在控制播放的圖示也是透過`video.paused`來判斷目前的圖示，要呈現播放還是暫停的圖示。

```javascript
// 控制播放狀態
video[video.paused ? 'play' : 'pause']();

// 控制播放icon
const icon = this.paused ? '開始' : '暫停'
toggleButton.textContent = icon
```

2. 前進和後退播放秒數

在第二個的功能打算做到點選特定按鈕時，可以讓`video`前進或是後退影格。

在兩個控制元素中的元素屬性中有`data-skip="25"`，`data-skip=-10"`，透過`HTMLElement.dataset`來取得中的數值為`-10`,`25`，因此利用`HTMLElement.dataset`取得數值來控制現在的`video.currentTime`播放時間。

```javascript
video.currentTime +=parseInt(this.dataset.skip)
```

3. 建立控制播放速率和音量大小

第三個功能要做到控制播放影片的速率和音量大小。

`video.playbackRate`是取得`video`的播放速率或是控制速率，`video.volume`取得`video`的播放音量或控制音量。

由於控制速率和音量的元素為`input[type=range]`，要點選和拖移同時成立才發生事件。

```javascript
ranges.forEach( range => range.addEventListener('click', changeRangeRate))
ranges.forEach( range => range.addEventListener('mousemove', changeRangeRate))
```

在速率跟音量是取得元素的`name`跟`value`來控制速率跟音量。

```javascript
video[this.name] = this.value
```

4. 影片播放進度條和進度條點選功能

第四個功能是當影片播放時，會顯示目前播放的進度，類似於youtube的影片的下方紅色進度條，以及點擊進度條可以改變影片播放進度。

在這個部分為兩個功能，首先是進度條顯示功能，影片進度條的事件是透過`timeupdate`來觸發，即`video`的`currentTime`更新時就觸發，要知道目前播放的百分比，`currentTime`目前播放時間去與影片長度`duration`轉換成百分比，即可得到目前播放時間的百分比，接下來透過設定Style`flexBasis`，就可以在`currentTime`更新時就改變進度條的長度。

```javascript
const percent = (video.currentTime / video.duration) * 100
progressBar.style.flexBasis = `${percent}%`;
```

接下來是`click`事件觸發點選進度條，即可改變播放影片時間的功能，需取得滑鼠點選進度條位置`e.offsetX`和進度條總長度
`progress.offsetWidth`並將其轉換成百分比數值，把數值設為影片的現在播放時間`video.currentTime`，這樣就可以做到點選進度條即可改變播放目前影片的時間。

```javascript
const scrubTime = (e.offsetX / progress.offsetWidth) * video.duration
video.currentTime = scrubTime
```

以上四個功能完成後，其網頁即類似YOUTUBE的影片播放。

## Html

```html
<video class="player__video viewer" src="https://player.vimeo.com/external/194837908.sd.mp4?s=c350076905b78c67f74d7ee39fdb4fef01d12420&profile_id=164"></video>
```

影像元素

```html
<div class="player__controls">
  <div class="progress">
    <div class="progress__filled"></div>
  </div>
  <button class="player__button toggle" title="Toggle Play">►</button>
  <input type="range" name="volume" class="player__slider" min="0" max="1" step="0.05" value="1">
  <input type="range" name="playbackRate" class="player__slider" min="0.5" max="2" step="0.1" value="1">
  <button data-skip="-10" class="player__button">« 10s</button>
  <button data-skip="25" class="player__button">25s »</button>
</div>
```

影像的控制元素

## JS

1. [HTMLVideoElement](https://developer.mozilla.org/en-US/docs/Web/API/HTMLVideoElement) 
   在html中的影音元素包含`video`，`audio`，提供操作影音的物件，同時繼承`HTMLMediaElement`和`HTMLElement`的屬性和方法。
   The HTMLVideoElement interface provides special properties and methods for manipulating video objects. It also inherits properties and methods of HTMLMediaElement and HTMLElement. 

2. [HTMLMediaElement.play()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/play) 
   影音元素的播放方法。

```javascript
var Promise = HTMLMediaElement.play();
```

3. [HTMLMediaElement.paused()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/paused)    影音元素的暫停方法。

```javascript
var isPaused = audioOrVideo.pause();
```

4. [HTMLMediaElement.paused](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/paused) 
   影音元素目前的播放狀態，回傳為布林值。
   The read-only HTMLMediaElement.paused property tells whether the media element is paused. 

```javascript
var obj = document.createElement('video');
console.log(obj.paused); // true
```

5. [HTMLMediaElement.playbackRate](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/pause) 
   影音元素的播放速率，預設值為1。

```javascript
var dSpeed = video.playbackRate;
audio.playbackRate = 1.0;
```

6. [HTMLMediaElement.volume](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/volume) 
   影音元素的播放音量。

```javascript
var volume = video.volume; //1
```

7. [HTMLMediaElement.currentTime](https://developer.mozilla.org/en-US/docs/Web/API/HTMLMediaElement/currentTime)
   影音元素在目前的播放時間。 

```javascript
var cTime = video.currentTime;
video.currentTime = 35;
```

8. [HTMLVideoElement.Events.timeupdate](https://developer.mozilla.org/en-US/docs/Web/Events/timeupdate)
   影音元素的事件會在元素的`currentTime`改變時被觸發。
   The timeupdate event is fired when the time indicated by the currentTime attribute has been updated.

## Css

1. [overflow](https://developer.mozilla.org/zh-TW/docs/Web/CSS/overflow)[[1](https://www.w3schools.com/css/css_overflow.asp)]
   overflo是指當當內容比容器還大時，要如何呈現。
   * visible 內容物全部呈現出來，會超出容器。
   * hidden 容器以外的內容物被隱藏起來。
   * scroll 內容物會符合容器大小，當超過時會有滾動條。
   * auto 類似於scroll。

###### tags: `video`,