# Day1 JS: Drum Kit
在頁面建立多個Html元素，在每個Html元素上面建立監聽事件，當點擊特定鍵盤，執行音訊檔案，做到類似打擊時就產生音效的網頁

## Html

```html=
<div class="key" press-key="81">
  <span>Q</span>
</div>
```
在畫面產生點擊的元素，在屬性中包含點擊所需要的數值

```html=
<audio keys="81" src="./sounds/boom.wav"></audio>
```
建立產生音訊的元素

## Javascript:

| window|
| -------- |
| Window Object:The window object represents an open window in a browser. |

| window.addEventListener |
| -------- |
| EventTarget.addEventListener() 方法能將指定的事件監聽器註冊到 EventTarget 實作物件上。EventTarget 可能是 Document 中的 Element 物件、Document 物件本身、Window 物件，或是其它支援事件的物件（如：XMLHttpRequest）。 |

| document.querySelector(selectors); |
| -------- |
| 回傳 document 第一個符合特定選擇器群組的元素（採用深度優先，前序追蹤 document 節點）。 |

| elementList = document.querySelectorAll(selectors); |
| -------- |
| 回傳 document 全部符合特定選擇器群組的元素 |

| elementClasses = elementNodeReference.classList; |
| -------- |
| elementClasses is a DOMTokenList representing the class attribute of elementNodeReference. If the class attribute was not set or is empty elementClasses.length returns 0. element.classList itself is read-only, although you can modify it using the add() and remove() methods. |

| element.addEventListener("transitionend", function(event) {} |
| -------- |
| The transitionend event is fired when a CSS transition has completed. In the case where a transition is removed before completion, such as if the transition-property is removed or display is set to "none", then the event will not be generated.

 |

## Css

| transition |
| -------- |
| CSS transitions provide a way to control animation speed when changing CSS properties. Instead of having property changes take effect immediately, you can cause the changes in a property to take place over a period of time. |

| transform |
| -------- |
| The transform CSS property lets you modify the coordinate space of the CSS visual formatting model. Using it, elements can be translated, rotated, scaled, and skewed. |

## Tags
###### tags: `window` `document.querySelector` `document.querySelectorAll` `transitionend`