# Day2 JS + CSS Clock

在網頁畫面產生一個時鐘，能及時呈現目前的時間。

並且類似時鐘會有3個指針，每個指針都會產生即時移動的效果。

```Javascript=
const now = new Date();
```
建立一個  JavaScript Date 物件來指向某一個時間點。

```Javascript=
let seconds = now.getSeconds()*6+90;
```
指針元件一開始為平行，不爲0度角。
給他90度角，讓指針的呈現角度為0度角。

## Html:

```Html=
<div class="clock">
  <div class="clock-face">
    <div class="hand hour-hand"></div>
    <div class="hand min-hand"></div>
    <div class="hand second-hand"></div>
  </div>
</div>
```
建立時鐘的元件，包含秒針，分針，時針。

## Javascript:

| [setInterval()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/setInterval) |
| ----- |
| setInterval()可以依照設定時間重複執行。 </br></br> The setInterval() method of the WindowOrWorkerGlobalScope mixin repeatedly calls a function or executes a code snippet, with a fixed time delay between each call. It returns an interval ID which uniquely identifies the interval, so you can remove it later by calling clearInterval(). This method is offered on the Window and Worker interfaces. |

```Javascript=
setInterval(setDate, 1000);
```

## Css:


###  [transition](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)

#### [transition-property](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transition-property)
    定義哪些 CSS properties 會被轉場效果影響。
    
#### [transition-duration](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transition-duration)
    定義轉場所花費的時間。
    
#### [transition-timing-function](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transition-timing-function)
    設定轉場時所依據的貝茲曲線。
    
#### [transition-delay](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transition-delay)
    定義多久之後開始發生轉場。
    
### [transform](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform)

    數學矩陣產生變形
    <matrix()> = matrix( <number> [, <number> ]{5,5} )
    <matrix3d()> = matrix3d( <number> [, <number> ]{15,15} )
    位移
    <translate()> = translate( <length-percentage> [, <length-percentage> ]? )
    <translateX()> = translateX( <length-percentage> )
    <translateY()> = translateY( <length-percentage> )
    <translate3d()> = translate3d( <length-percentage> , <length-percentage> , <length> )
    <translateZ()> = translateZ( <length> )
    縮放
    <scale()> = scale( <number> [, <number> ]? )
    <scaleX()> = scaleX( <number> )
    <scaleY()> = scaleY( <number> )
    <scale3d()> = scale3d( <number> , <number> , <number> )
    <scaleZ()> = scaleZ( <number> )
    傾斜
    <skew()> = skew( <angle> [, <angle> ]? )
    <skewX()> = skewX( <angle> )
    <skewY()> = skewY( <angle> )
    旋轉
    <rotate()> = rotate( <angle> )
    <rotate3d()> = rotate3d( <number> , <number> , <number> , <angle> )
    <rotateX()> = rotateX( <angle> )
    <rotateY()> = rotateY( <angle> )
    <rotateZ()> = rotateZ( <angle> )
    為3D 轉換元素定義透視視圖？？
    <perspective()> = perspective( <length> )
    
[參考資源](http://boohover.pixnet.net/blog/post/35341387-%E6%97%8B%E8%BD%89%E3%80%81%E5%82%BE%E6%96%9C%E3%80%81%E7%B8%AE%E6%94%BE%E7%9A%84%E8%AE%8A%E5%BD%A2%E6%95%88%E6%9E%9C-transform-%28css-prope)

| [transform-origin](https://developer.mozilla.org/zh-TW/docs/Web/CSS/transform-origin)|
| --- |
| transform-origin為element在變形的中心點，而預設的中心在正中間，可以透過transform-origin來調整element的中心點。 </br></br> The transform-origin property lets you modify the origin for transformations of an element. For example, the transformation origin of the rotate() function is the center of rotation. (This property is applied by first translating the element by the negated value of the property, then applying the element's transform, then translating by the property value.) |

## Issue:

當使用transition和transition-timing-function時，
秒針在0秒會有回轉的動畫產生，避免產生迴轉動畫，在js修改為累加方式。
```
seconds += 360/60
second.style.transform=`rotate(${seconds}deg ) scaleX(1)`;
```

###### tags: `transition`, `transform`, `setInterval`