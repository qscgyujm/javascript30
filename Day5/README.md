# Day5 Flex Panels Image Gallery

[Demo](https://qscgyujm.github.io/javascript30/Day5/index.html)

使用Css的flex來製作動態收縮展開的畫面。

在畫面會有五張圖`<div>`垂直排列著，在點可以做到收縮展開的效果。

畫面有五個`<div class="panel>`使用`flex:1`進行排版

```css=
flex: flex-grow  flex-shrink  flex-basis ;
```

`flex`只有一個數值時，代表著是`flex:flex-grow`，其代表意義是5個`panel`會撐滿父元素。

原理是子元素有五個`panel`，每一個`panel`的`flex:flex-grow`都為1，其加總為5，與原子元素未填滿的父元素`panels`的空間相除的解，與每個`flex:flex-grow`相乘就可以得到子元素`panel`增加的空間。`flex:flex-grow`的數值越大，佔父元素`panels`的的比列就越大。

在`panel`中也把其子元素轉換成`flex:flex-grow`去撐滿父元素`panel`。

`panel`中的子元素排列方向為由上而下的排列方式，水平位置置中。

```css=
display: flex;
justify-content: center; 
flex-direction: column;
```

接下來在`panel`建立兩個事件，第一個為`click`事件，當`panel`被點選時會觸發css

```javascript=
this.classList.toggle('open');
```

```css=
.panel.open {
    flex: 5;
    font-size:40px;
}
```

`click`事件是讓`panel`被點選時，判斷是否有`.open`的class，`.toggle()`有的話就移除，沒有就加入。

加入`.open`class會讓`panel`變大，因為`.open`的class含有`flex: 5;`。

第二件是`panel`轉場變大之後，觸發`transitionend`的事件。

原本在`panel`的子元素有三個，上下的子元素被`transform: translateY`向上向下位移100%。

```css=
transform: translateY(-100%)
transform: translateY(100%)
```

當`transitionend`被觸發之後就把子元素拉回原本的位置，因此觸發`.toggle()`，加入或移除`open-active`的class

```javascript=
this.classList.toggle('open-active');
```

但這邊剛好發生一個問題，就是`panel`裡有兩個子元素同時間觸發，會連續`.toggle()`兩次結果沒變。

因此加入判斷式讓`toggle()`只觸發一次

```javascript=
if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
}
```

這樣就可以讓`transitionend`事件正常觸發。

## Html:

```htmlmixed=
<div class="panels">
    <div class="panel panel1">
        <p>Hey</p>
        <p>Let's</p>
        <p>Dance</p>
    </div>
    。
    。
    。
    <div class="panel panel5">
      <p>Life</p>
      <p>In</p>
      <p>Motion</p>
    </div>
</div>
```

## Javascript:

```javascript=
panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
```

在`panels`加入兩個監聽動作，第一個是`click`和`transitionend`，一個是點擊會有收縮展開的動作，另一個是收縮展開之後後續的動作。

```javascript=
this.classList.toggle('open');
```

## Css:

### [flexbox](https://developer.mozilla.org/en-US/docs/Glossary/Flex)
   flex是display新的屬性，`inline-flex`亦屬於。使用flex會讓元素變成flex容器，而容器裡的元素會變成flex-item，而item可以被CSS的FlexibleBox的排版模組定。
   
1. [flex-direction](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-direction)
   flex-direction為items在容器中的主軸的排版方向，flex的主軸在設定`display:flex`的預設值為Ｘ軸。初始方向為平行從左至右。
   
```css
flex-direction: row;
flex-direction: row-reverse;
/* 將flex-direction設定為column，就可把主軸(X)轉為Y軸做為主軸，item的排版方向為從上至下的垂直方向。 */
flex-direction: column;
flex-direction: column-reverse;
```
   
2. [justify-content](https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content)
    justify-content是設定items在主軸(X)軸的空間中的位置。

```css
justify-content: center;
justify-content: flex-start;
justify-content: flex-end; 
justify-content: space-between; 
justify-content: space-around;
```

3. [align-items](https://developer.mozilla.org/en-US/docs/Web/CSS/align-items)
   align-items是說對應主軸的副軸，預設Y做為副軸。設定items在items在副軸的空間中的位置。

```css
align-items: center;
align-items: start;
align-items: end;
align-items: stretch;
align-items: baseline; 
```

4. [align-self](https://developer.mozilla.org/en-US/docs/Web/CSS/align-self) 
   align-self與align-items的設定是相同的，但align-self用來覆寫align-items的的效果的。

範例
```css=
div:nth-child(3) {
  align-self: flex-end;
  background: pink;
}
```

![](https://i.imgur.com/l10BFWM.png)

5. [align-content](https://developer.mozilla.org/en-US/docs/Web/CSS/align-content)



6. [flex](https://developer.mozilla.org/zh-TW/docs/Web/CSS/flex) 
   The flex CSS property specifies how a flex item will grow or shrink so as to fit the space available in its flex container. This is a shorthand property that sets flex-grow, flex-shrink, and flex-basis. 

```css=
/* Three values: flex-grow  flex-shrink  flex-basis */
flex: 2 2 10%;
```

7. [flex-grow](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow) 
   flex-grow主要是指子元素會依照flex-grow數值的比列去撐滿父層空間。
   The flex-grow CSS property specifies the flex grow factor of a flex item. It specifies what amount of space inside the flex container the item should take up. The flex grow factor of a flex item is relative to the size of the other children in the flex-container. 

8. [flex-shrink](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-grow) 
   flex-shrink主要是指子元素比父層大時會依照flex-shrink數值的比列去縮減去符合父層空間。
   The flex-shrink CSS property specifies the flex shrink factor of a flex item. Flex items will shrink to fill the container according to the flex-shrink number, when the default width of flex items is wider than the flex container. 

9. [flex-basis](https://developer.mozilla.org/en-US/docs/Web/CSS/flex-basis) 
   子元素的基本大小。
   The flex-basis CSS property specifies the initial main size of a flex item. This property determines the size of the content-box unless specified otherwise using box-sizing. 
[[1](http://www.oxxostudio.tw/articles/201501/css-flexbox.html)]

###### tags: `flex`