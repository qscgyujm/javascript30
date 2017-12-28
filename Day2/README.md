# Day2 JS + CSS Clock

[Demo](https://qscgyujm.github.io/javascript30/Day2/index.html)

在網頁畫面產生一個時鐘，能及時呈現目前的時間。

並且類似時鐘會有3個指針，每個指針會隨著時間的變化，有著相對應的變化，做出跟真實的時鐘一樣，指針會隨著時間移動。

首先先設定`div`作為時鐘的背景，裡面有三個`div`元素的指針。

接下來使用`new Date()`建立一個時間物件，透過時間物件取得目前的秒`.getSeconds()`，分`.getMinutes()`，時`.getHours()`。

當元件要有旋轉的動作是使用css`transform: rotate()`來讓元件旋轉，`rotate()`是依照輸入角度有變化的動作。

但時間要如何轉換成成角度？ 透過 （目前時間/時間長度）＊360度 就被轉換成目前時間的角度。

讓指針元件加入css樣式`transform: rotate(角度)`

接下來如何讓元件會隨著秒數移動？ 透過`setInterval（ 目標執行函數, 執行毫秒）`來讓目標函數過多久的方式來執行。

```javascript=
setInterval(setDate, 1000);
```

執行網頁時，指針元件就有旋轉的動作。

但是可能會有下列問題
1. 指針元件旋轉是以本身的元件的中心點旋轉，不是以端點做完旋轉點。
    
- 要解決這個問題是要透過`transform-origin`來改變的變化的中心點。

2. 指針的角度不對，指針的元件設定出來為平行，但計算出來的角度是以0度角為出發點，指針的出發點為270度

- 要解決這個問題是要在秒數計算出角度時，加入90度讓它呈現，以0度角為主。

```javascript=
const secondsDegrees = ((seconds / 60) * 360) + 90;
```

這樣做可以做出一個有時鐘效果的網站。

但這時發生了一個問題，就是當秒針為0時秒針會有迴轉的動畫產生。

檢查發現是css的中`transition`的`transition-timing-function`造成的結果。

為了迴轉的動畫發生，在旋轉的角度採給累加角度作為旋轉的角度。

```javascript=
let seconds = now.getSeconds()*6+90;
seconds += 360/60;
second.style.transform=`rotate(${seconds}deg ) scaleX(1)`;
```
這樣才避免迴轉的動畫發生

`transition-timing-function` 是transition的屬性之一，他主要控制元件在變化時的速率，本篇是透過貝茲曲線來控制指針變化時，有跳動的效果。


`transition-timing-function`是指變化時間中變化的速率，
![](https://i.imgur.com/PF2vQ4k.png)

X軸為時間，Y軸為變化上圖指在物件變化的過程中，先快速變化，過來慢速變畫，又快速變化。

因此可以看出在時間進行時，斜率的大小改變變化的速率。[[1](http://cubic-bezier.com/#.17,.67,.83,.67)]

---

## Html:

```html
<div class="clock">
  <div class="clock-face">
    <div class="hand hour-hand"></div>
    <div class="hand min-hand"></div>
    <div class="hand second-hand"></div>
  </div>
</div>
```

建立時鐘的元件，包含秒針，分針，時針。

---

## Javascript:

1. [Date](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Date)
   建立一個  JavaScript Date 物件來指向某一個時間點。

```javascript=
const now = new Date();
```

2. [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval)
setInterval()可以依照設定時間重複執行。

```javascript=
var intervalID = window.setInterval(myCallback, 500);

function myCallback() {
  // Your code here
}
```

---

## Css:

###  [transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)

```css=
# /* property name | duration | timing function | delay */
transition: margin-right 4s ease-in-out 1s;
```

1. [transition-property](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transition-property)
   定義哪些 CSS properties 會被轉場效果影響。[[1](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transition-property)]
    
```
transition-property: all, -moz-specific, sliding;
```
   
2. [transition-duration](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transition-duration)
   定義轉場所花費的時間。[[2](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration)]
   
```
transition-duration: 10s, 30s, 230ms;
```
    
3. [transition-timing-function](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transition-timing-function)
   設定轉場時所依據的貝茲曲線。[[3](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)]
   
```
transition-timing-function: ease, step-start, cubic-bezier(0.1, 0.7, 1.0, 0.1);
```
    
4. [transition-delay](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transition-delay)
   定義多久之後開始發生轉場。[[4](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay)]

```
transition-delay: 2s, 4ms;
```

#### 範例

```css=
#delay {
  font-size: 14px;
  transition-property: font-size;
  transition-duration: 4s;
  transition-delay: 2s;
}

#delay:hover {
  font-size: 36px;
}
```

範例:當`delay`元素在滑鼠指到時，就發生字的大小從14px到36px，變化的時間為4秒，2秒後才發生變化的動作。

---

### [transform](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform)

1. 變形矩陣:transform: matrix() 

    <matrix()> = matrix( <number> [, <number> ]{5,5} )
    <matrix3d()> = matrix3d( <number> [, <number> ]{15,15} )

2. 位移:translate()

```javascript=
transform: translate(X, Y)
transform: translate(120px, 50%);
```

    <translate()> = translate( <length-percentage> [, <length-percentage> ]? )
    <translateX()> = translateX( <length-percentage> )
    <translateY()> = translateY( <length-percentage> )
    <translate3d()> = translate3d( <length-percentage> , <length-percentage> , <length> )
    <translateZ()> = translateZ( <length> )

3. 縮放:transform: scale()

```javascript=
transform: scale(30deg, 20deg);
```

    <scale()> = scale( <number> [, <number> ]? )
    <scaleX()> = scaleX( <number> )
    <scaleY()> = scaleY( <number> )
    <scale3d()> = scale3d( <number> , <number> , <number> )
    <scaleZ()> = scaleZ( <number> )

4. 傾斜:transform: scale()

```javascript=
transform: skew(30deg, 20deg);
```

    <skew()> = skew( <angle> [, <angle> ]? )
    <skewX()> = skewX( <angle> )
    <skewY()> = skewY( <angle> )

5. 旋轉:transform: scale()
```javascript=
transform: rotate(0.5turn);
```

    旋轉
    <rotate()> = rotate( <angle> )
    <rotate3d()> = rotate3d( <number> , <number> , <number> , <angle> )
    <rotateX()> = rotateX( <angle> )
    <rotateY()> = rotateY( <angle> )
    <rotateZ()> = rotateZ( <angle> )

6. [transform-origin](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform-origin)
transform-origin為element在變形的中心點，而預設的中心在正中間，可以透過transform-origin來調整element的中心點。

###### tags: `transition`, `transform`, `setInterval`, `Date`