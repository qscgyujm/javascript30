# Day3 Playing with CSS Variables and JS

[Demo](https://qscgyujm.github.io/javascript30/Day3/index.html)

在網頁產生三個控制元件`<input type="range">`，透過三個元件控制圖片元件的`style`變化。

第一個元件控制圖片的`padding`內距。

第二個元件控制圖片的`background`背景顏色。

第三個元件控制圖片的`filter(blur())`濾鏡效果中的模糊。

接下來透過css變數來控制圖片的效果。

css變數在`:root`中建立3個變數，並把變數引入給`img`元件。

```css=
:root {
  --base: #ff0000;
  --spacing: 10px;
  --blur: 10px;
}

img {
  padding: var(--spacing);
  background: var(--base);
  filter: blur(var(--blur));
}
```

而`:root`代表著`<html>`這個元素。

接下來是在控制元件建立監聽`click`，`mousemove`事件。

為何要有`click`和`mousemove`兩個事件，主要目的當點選`<input type="range">`並拖移食可以直接改變`img`的CSS屬性，但只有'click'事件時，只會觸發按下的動作，之後拖移的動作並不會觸發。

因此特別加入`mousemove`事件，當拖移`<input type="range">`就有事件觸發。

當控制元件的數值改變時，改變`documentElement`的`style`屬性。

這時透過`this`來取得`<input type="range">`的`name`和`value`，因為此時`this`為`<input type="range">`。

```javascript
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
```
這樣就可以透過css變數來控制元件的css屬性。

## Html:

```html
<input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">

<input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">

<input id="base" type="color" name="base" value="#ff0000">

```
產生三個控制圖片變化的元件

## Javascript:
1. [document.documentElement](https://developer.mozilla.org/zh-TW/docs/Web/API/Document/documentElement) 
   Document.documentElement 會回傳目前文件（document）中的根元件（Element），如：HTML 文件中的 <html> 元件。 
    
2. [CSSStyleDeclaration.setProperty()](https://developer.mozilla.org/zh-TW/docs/Web/API/CSSStyleDeclaration/setProperty) 
   setProperty()是指給予宣告的物件中css的屬性指派新的數值。
   The CSSStyle Declaration.setProperty() method interface sets a new value for a property on a CSS style declaration object. 

```javascript
declaration.setProperty('margin', '1px 2px');
```

3. [HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) 
   dataset是指說可以在Element中建立客製化的屬性(data-* )，可以讀寫。 

```javascript
string = element.dataset.camelCasedName;
element.dataset.camelCasedName = string;
```

4. [this](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Operators/this)
   JavaScript 函式內的 this 關鍵字表現，和其他語言相比略有差異。在嚴格模式與非嚴格模式下亦有所不同。
通常，this 值由被呼叫的函式來決定。它不能在執行期間被指派，每次函數呼叫所用的值也可能不同。ES5 引入了 bind 方法去設置函式的 this 值，而不管其如何被呼叫。ECMAScript 2015 也導入了定義 this 詞法範圍的箭頭函數（it is set to the this value of the enclosing execution context）。[[1](https://kuro.tw/posts/2017/10/12/What-is-THIS-in-JavaScript-%E4%B8%8A/)]


## Css:
1. [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) 
   CSS 變數 是指說css能用`變數`來做為輸入值。
   CSS variables are entities defined by CSS authors that contain specific values to be reused throughout a document.They are set using custom property notation (e.g. --main-color: black;) and are accessed using the var() function (e.g., color: var(--main-color);). Complex websites have very large amounts of CSS, often with a lot of repeated values. [[2](http://www.zendei.com/article/19844.html)]

2. [filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) 
   filter這個屬性能夠改變元件的視覺效果，常用於`img`元件。
   The filter CSS property lets you apply graphical effects like blurring or color shifting to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders. 

filter的效果[[3](https://www.w3schools.com/cssref/css3_pr_filter.asp)]

```css
/* 模糊： */
filter: blur(5px);
/* 亮度 */
filter: brightness(200%);
/* 對比 */
filter: contrast(200%);
/* 陰影 */
filter: drop-shadow(8px 8px 10px red);
/* 轉換成灰階 */
filter: grayscale(50%);
/* 色調迴轉 */
filter: hue-rotate(90deg);
/* 顛倒顏色 */
filter: invert(100%);
/* 透明度 */
filter: opacity(30%);
/* 飽和度 */
filter: saturate(800%);
/* 轉換成棕色 */
filter: sepia(100%);
```

###### tags: `documentElement`, `CSS variables`, `dataset`