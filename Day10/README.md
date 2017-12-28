# Day8 Fun with HTML5 Canvas

[Demo](https://qscgyujm.github.io/javascript30/Da8/index.html)

第8天的實作是網頁做出類似畫布，滑鼠在上方拖移會有顏色的產生，顏色會隨著滑鼠移動而變化，大小也是隨之變化，做到可以畫畫的效果。

首先在畫面建立`canvas`，而`canvas`是html5的元素之一，可以提供繪畫的功能。

之後在設定`canvas`的繪畫環境，在這次的實作是要畫2D的圖，因此`const ctx = canvas.getContext('2d')`將設定為2D。

實作想要讓`canvas`整個畫面都可以繪畫，因此在js中設定`canvas`的高度，寬度等同於視窗的`innerWidth`，`innerHeight`。

`innerWidth`，`innerHeight`代表整個瀏覽器中的網頁的寬度和高度，不包含功能列等。[[1](https://stackoverflow.com/questions/4938346/canvas-width-and-height-in-html5)]

接下來就是設定畫下去的初始設定，`ctx.strokeStyle`是設定繪畫出來的圖形外框的顏色。

`ctx.lineJoin = 'round'`是設定兩端線的連結端點形狀，此實作以圓形為例。

`ctx.lineCap = 'round'`是設定線的結束點是圓形，此實作以圓形為例。

`ctx.lineWidth = 100`是設定劃線的寬度。此時實作以設定100。

`ctx.globalCompositeOperation='screen'`是設定為繪畫的合成效果。合成效果可以去[MDN](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation)查詢。

過來是建立繪畫事件，要繪畫需要達到兩個條件，首先是要當滑鼠點下去`mousedown`時，移動滑鼠`mousemove`就可以產生畫畫的效果。

要如何達成這兩個條件？首先決定事件的事件的先後順序，當按下再拖移就可以畫畫的，所以事先按下滑鼠事件再拖移的事件。

設定flag一開始為`false`，在`mousedow`事件中發生時，將flag轉為`true`，接下來在拖移事件中判斷當flag為`true`就有畫畫的動作產生。

當以上的條件成立時，要如何繪畫？首先要先取得滑鼠按下的位置作為繪畫的的初始點。

```javascript
[lastX, lastY] = [e.offsetX, e.offsetY]
```

之後在`mousemove`事件中設定`ctx.beginPath()`開始繪畫，路徑的初始點`ctx.moveTo(lastX, lastY)`，路徑最終點`      ctx.lineTo(e.offsetX, e.offsetY)`，`ctx.stroke()`將路徑畫出來。

過來是如何讓顏色變化，在這次的實作中是採用[HSL](https://www.w3schools.com/colors/colors_hsl.asp)，HSL是由色相，飽和度，明亮度所組成，而色相的數值為0~359，因此滑鼠移動的事件中讓HSL的色調會隨著事件的拖移而增加上去，當色相的值到達360時，就變成0。

```javascript
ctx.strokeStyle=`hsl(${hue}, 100%, 50%)`

hue++
if (hue>=360) {
    hue = 0
}
```

最後是讓畫筆的大小產生變化，設定畫筆的區間，設定sizeFlag來控制畫筆大小的轉換，當sizeFlag為`true`就一直增加，為`false`就一直減少。

```javascript
if (ctx.lineWidth >=100  ctx.lineWidth <=1) {
    sizeFlag = !sizeFlag
  }
  if (sizeFlag) {
    ctx.lineWidth++
  }else{
    ctx.lineWidth--
  }
```

## Html

```html
<canvas id="draw" width="800" height="800"></canvas>
```

## Js

1. [Window.innerWidth](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerWidth) 
   瀏覽器中網頁的寬度。
   Width (in pixels) of the browser window viewport including, if rendered, the vertical scrollbar. 

```javascript
var intViewportWidth = window.innerWidth;
```

2. [Window.innerHeight](https://developer.mozilla.org/en-US/docs/Web/API/Window/innerHeight) 
   瀏覽器中網頁的高度。
   Height (in pixels) of the browser window viewport including, if rendered, the horizontal scrollbar. 

```javascript
var intViewportHeight = window.innerHeight;
```

3. [Canvas](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial) 
   canvas是html的一個元素，提供繪畫功能，透過JavaScriptx來控制。
   canvas is an HTML element which can be used to draw graphics using scripting (usually JavaScript).

```html
<canvas id="canvas" width="300" height="300">
</canvas>
```

```javascript
<script>
    var canvas = document.getElementById('canvas');
    var ctx = canvas.getContext('2d');
    ctx.fillStyle = 'green';
    ctx.fillRect(10, 10, 100, 100);
</script>
```

4. [HTMLCanvasElement.getContext()](https://developer.mozilla.org/en-US/docs/Web/API/HTMLCanvasElement/getContext) 
   指定canvas的繪畫內容的環境。
   The HTMLCanvasElement.getContext() method returns a drawing context on the canvas, or null if the context identifier is not supported. 
   
```javascript
var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');
```

5. [ctx.strokeStyle](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/strokeStyle) 
   在2d的環境中，strokeStyle是指定繪畫的顏色或是樣式。
   The CanvasRenderingContext2D.strokeStyle property of the Canvas 2D API specifies the color or style to use for the lines around shapes. The default is #000 (black).
[[1](https://developer.mozilla.org/en-US/docs/Web/API/Canvas_API/Tutorial/Applying_styles_and_colors)]

```javascript
ctx.strokeStyle = color;
ctx.strokeStyle = gradient;
ctx.strokeStyle = pattern;
```

6. [ctx.lineJoin](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineJoin) 
   在2d的環境中，lineJoin指說兩段連結點的變化，會有`round`，`bevel`，`miter`三種變化。
   The CanvasRenderingContext2D.lineJoin property of the Canvas 2D API determines how two connecting segments (of lines, arcs or curves) with non-zero lengths in a shape are joined together (degenerate segments with zero lengths, whose specified endpoints and control points are exactly at the same position, are skipped). 

```javascript
ctx.lineJoin = "bevel";
ctx.lineJoin = "round";
ctx.lineJoin = "miter";
```

![](https://i.imgur.com/esD7OXf.png)

7. [ctx.lineCap](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineCap) 
   在2d的環境中，lineCap指的是在繪畫的結束點的樣式，會有三種結束點的變化。`butt`，`round`，`square`。
   The CanvasRenderingContext2D.lineCap property of the Canvas 2D API determines how the end points of every line are drawn. 

```javascript
ctx.lineCap = "butt";
ctx.lineCap = "round";
ctx.lineCap = "square";
```

![](https://i.imgur.com/zfr0zUL.png)

8. [ctx.lineWidth](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineWidth) 
   在2d的環境中，lineWidth指的是繪畫的寬度，其預設值為1，當為0，負數，無限大，NaN會被省略。
   The CanvasRenderingContext2D.lineWidth property of the Canvas 2D API sets the thickness of lines in space units. When getting, it returns the current value (1.0 by default). When setting, zero, negative, Infinity and NaN values are ignored; otherwise the current value is set to the new value. 

```javascript
ctx.lineWidth = 15;
```

9. [ctx.globalCompositeOperation](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/globalCompositeOperation) 
   在2d的環境中，globalCompositeOperation指的是繪畫在canvas的上的特殊效果。
   The CanvasRenderingContext2D.globalCompositeOperation property of the Canvas 2D API sets the type of compositing operation to apply when drawing new shapes, where type is a string identifying which of the compositing or blending mode operations to use.

```javascript
ctx.globalCompositeOperation = type;
```

10. [ctx.beginPath()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/beginPath)
    在2d的環境中，beginPath()方法是在canvas上建立新的繪圖。
    The CanvasRenderingContext2D.beginPath() method of the Canvas 2D API starts a new path by emptying the list of sub-paths. Call this method when you want to create a new path.

```javascript
//新的一段線
ctx.beginPath();
ctx.strokeStyle = 'blue';
ctx.moveTo(20, 20);
ctx.lineTo(200, 20);
ctx.stroke();
```

11. [ctx.stroke()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/stroke) 
    在2d的環境中，stroke()方法是將繪畫設定的內容給繪製到canvas上。
    The CanvasRenderingContext2D.stroke() method of the Canvas 2D API strokes the current or given path with the current stroke style using the non-zero winding rule.

```javascript
ctx.stroke();
```

12. [ctx.moveTo()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/moveTo) 
    在2d的環境中，moveTo()是指繪製新的圖形路徑的起始點。
    The CanvasRenderingContext2D.moveTo() method of the Canvas 2D API moves the starting point of a new sub-path to the (x, y) coordinates.

```javascript
ctx.moveTo(0, 0);
```

13. [ctx.lineTo()](https://developer.mozilla.org/en-US/docs/Web/API/CanvasRenderingContext2D/lineTo) 
    在2d的環境中，moveTo()是指指繪製新的圖形路徑的結束點。
    The CanvasRenderingContext2D.moveTo() method of the Canvas 2D API moves the starting point of a new sub-path to the (x, y) coordinates.
    
```javascript
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.lineTo(300, 0);
ctx.stroke();
```

## Css

1. [HSL](https://www.w3schools.com/colors/colors_hsl.asp) 
   HSL由色調，飽和度，亮度組成。 

HSL參考[[2]](http://hslpicker.com/#000)[[3](http://csscoke.com/2015/01/01/rgb-hsl-hex/)]

###### tags: `canvas`