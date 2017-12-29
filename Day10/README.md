# Day10 Hold Shift to Check Multiple Checkboxes

第10天的實作目標是在列表中，當點選其中一個選項後，再按shift再點選其他選項，可以做到在第一次被點選和按住`shift`的中間的選項都被選取。

首先取得全部`input[type=checkbox]`，之後每一個元素建立`click`事件。

```javascript=
checkboxs.forEach(checkbox =>{
  checkbox.addEventListener('click', clickCheckboxEvent)
})
```

在`click`事件中有兩件事要判斷，首先判斷是有按`shift`鍵，若是有按`shift`鍵就進入判斷的事件。

若沒有按下shit鍵就將目前按下的`checkbox`元素記錄下來，作為下一個按下`shift`鍵的`checkbox`的起始點。

接下來是當有一個`checkbox`被按下去，又按下`shift`鍵的事件，再點選其他`checkbox`的事件，該事件也同屬於`click`事件中。

首先要先確定按下`shift`和目前的`checkbox`是被點選的狀態。

```javascript=
if (e.shiftKey && this.checked){}
```

接下來是當`shift`被按下和`checkbox`被點選時，查詢每一個`checkbox`元素，哪些要設定`checked=true`的狀態。

```javascript=
checkboxs.forEach(checkbox =>{})
```

上一個`checked＝true`的`checkbox`元素跟目前被`checked`的`checkbox`元素的區間中，每一個`checkbox`元素都要轉成`checked=true`。

設定一個flag初始值為`false`，該flag的目標就是在兩個被點選的區間為`true`，區間之外為`false`。

有兩種情況來轉換flag的值，第一種是按下`checkbox`，另外一種是上一個被點選`checkbox`元素。

```javascript=
if (checkbox === this || checkbox === lastCheckbox) { inBetween = !inBetween }
```

當flag的值為`true`，就把`checkbox`的`checked`轉成`true`。

```javascript=
if (inBetween) checkbox.checked = true;
```

這樣即可做到這次實做的目標，運用`shift`鍵做到多重選取的功能。

## Html

```htmlmixed=
<div class="item">
  <input type="checkbox">
  <p>This is an inbox layout.</p>
</div>
    。
    。
    。
<div class="item">
  <input type="checkbox">
  <p>Don't forget to tweet your result!</p>
</div>
```

## Js

1. [MouseEvent.shiftKey](https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent/shiftKey) 
   指按下shift鍵其回傳值為`true`，若沒有按下shift鍵其回傳值為`false`。
   The MouseEvent.shiftKey read-only property indicates if the shift key was pressed (true) or not (false) when the event occurred. 

###### tags: `checkbox`