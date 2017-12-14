# Day3 Playing with CSS Variables and JS

在網頁產生三個控制元件，透過三個元件控制圖片元件的`style`變化

第一個元件控制圖片的`padding`內距

第二個元件控制圖片的`background`背景顏色

第三個元件控制圖片的`filter(blur())`濾鏡效果中的模糊

接下來透過css變數來控制圖片的效果

## Html:

```htmlmixed=
<input id="spacing" type="range" name="spacing" min="10" max="200" value="10" data-sizing="px">

<input id="blur" type="range" name="blur" min="0" max="25" value="10" data-sizing="px">

<input id="base" type="color" name="base" value="#ff0000">

```
產生三個控制圖片變化的元件

## Javascript:

| [document.documentElement](https://developer.mozilla.org/zh-TW/docs/Web/API/Document/documentElement) |
| -------- |
| Document.documentElement 會回傳目前文件（document）中的根元件（Element），如：HTML 文件中的 <html> 元件。 |
    
| [CSSStyleDeclaration.setProperty()](https://developer.mozilla.org/zh-TW/docs/Web/API/CSSStyleDeclaration/setProperty) |
| -------- |
|  setProperty()是指給予宣告的物件中css的屬性指派新的數值。 </br></br> The CSSStyle Declaration.setProperty() method interface sets a new value for a property on a CSS style declaration object. |

```javascript=
document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
```

| [HTMLElement.dataset](https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/dataset) |
| -------- |
| dataset是指說可以在Element中建立客製化的屬性(data-* )，可以讀寫。 |

```javascript=
string = element.dataset.camelCasedName;
element.dataset.camelCasedName = string;
```

## Css:
| [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/Using_CSS_variables) |
| ----- |
|  CSS 變數 是指說css能夠用`變數`來做為輸入值。</br></br> CSS variables are entities defined by CSS authors that contain specific values to be reused throughout a document.They are set using custom property notation (e.g. --main-color: black;) and are accessed using the var() function (e.g., color: var(--main-color);). Complex websites have very large amounts of CSS, often with a lot of repeated values. |
[註1](http://www.zendei.com/article/19844.html)

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

| [filter](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) |
| -- |
| filter這個屬性能夠改變元件的視覺效果，常用於`img`元件 <br><br> The filter CSS property lets you apply graphical effects like blurring or color shifting to an element. Filters are commonly used to adjust the rendering of images, backgrounds, and borders. |

[filter的效果](https://www.w3schools.com/cssref/css3_pr_filter.asp)


```css=
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