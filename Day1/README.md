# Day1 JS: Drum Kit

Js30的第一天是建立一個類似打鼓的網頁，當點擊鍵盤時會產生音效和畫面效果。

首先先在畫面建立數個對應鍵盤的元素，在每個元素中的屬性中包含對應的`keycode`。

以及建立數個`audio`元素，每個元素都有各自的音效檔。

接下來在畫面建立監聽事件，監聽`keydown`鍵盤按下的動作，當事件觸發時，先抓取鍵盤按下時產生的`keycode`。

判斷`keycode`值是否有符合元素中的`keycode`，若有符合就`audio`產生音效和加入`transition`的效果。

當`transition`觸發完成後，之後再透過`transitionend`事件來移除效果。

## Html

```html=
<div class="key" press-key="81">
  <span>Q</span>
</div>
```
上列是顯示鍵盤值，屬性包含Q按鍵的`keycode`

```html=
<audio keys="81" src="./sounds/boom.wav"></audio>
```
上列是音訊元素

## Javascript:

| [window](https://developer.mozilla.org/zh-TW/docs/Web/API/Window) |
| -------- |
| window 物件代表了一個包含 DOM 文件的視窗，其中的 document 屬性指向了視窗中載入的 Document 物件。而使用 document 的 defaultView 屬性，則可取得該 Document 物件所在的視窗 window 物件。 <br> Window Object:The window object represents an open window in a browser. |

| [EventTarget.addEventListener()](https://developer.mozilla.org/zh-TW/docs/Web/API/EventTarget/addEventListener) |
| -------- |
| EventTarget.addEventListener() 方法能將指定的事件監聽器註冊到 EventTarget 實作物件上。EventTarget 可能是 Document 中的 Element 物件、Document 物件本身、Window 物件，或是其它支援事件的物件（如：XMLHttpRequest）。 </br></br> The EventTarget.addEventListener() method adds the specified EventListener-compatible object to the list of event listeners for the specified event type on the EventTarget on which it is called. The event target may be an Element in a document, the Document itself, a Window, or any other object that supports events (such as XMLHttpRequest). |

| [document.querySelector(selectors)](https://developer.mozilla.org/zh-TW/docs/Web/API/Document/querySelector) |
| -------- |
| 回傳 document 第一個符合特定選擇器群組的元素。 </br></br>  Returns the first Element within the document that matches the specified selector, or group of selectors, or null if no matches are found. |

| [document.querySelectorAll(selectors)](https://developer.mozilla.org/zh-TW/docs/Web/API/Document/querySelectorAll) |
| -------- |
| 回傳 document 全部符合特定選擇器群組的元素 </br></br> Returns a list of the elements within the document (using depth-first pre-order traversal of the document's nodes) that match the specified group of selectors. The object returned is a NodeList. |

| [elementNodeReference.classList](https://developer.mozilla.org/zh-TW/docs/Web/API/Element/classList) |
| -------- |
| Element.classList 唯讀屬性代表了該元素所擁有之類別屬性（Class Attribute）的即時更新集－DOMTokenList。 </br></br> elementClasses is a DOMTokenList representing the class attribute of elementNodeReference. If the class attribute was not set or is empty elementClasses.length returns 0. element.classList itself is read-only, although you can modify it using the add() and remove() methods. |

| [element.addEventListener("transitionend", function(event) {}](https://developer.mozilla.org/en-US/docs/Web/Events/transitionend) |
| -------- |
| transitionend是當transition完成之後，接下來執行 `transitionend`中的事件。 </br></br> The transitionend event is fired when a CSS transition has completed. In the case where a transition is removed before completion, such as if the transition-property is removed or display is set to "none", then the event will not be generated. |

| [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList) |
|--|
| NodeList 物件是節點的集合，可藉由 Node.childNodes 屬性以及 document.querySelectorAll() 方法取得。 </br></br> NodeList objects are collections of nodes such as those returned by properties such as Node.childNodes and the document.querySelectorAll() method. |

| [KeyboardEvent.keyCode](https://developer.mozilla.org/zh-TW/docs/Web/API/KeyboardEvent/keyCode) |
| ---- |
| keycode是指當鍵盤下時產生鍵盤的對應值。 </br></br> The KeyboardEvent.keyCode read-only property represents a system and implementation dependent numerical code identifying the unmodified value of the pressed key. |

顯示鍵盤值keyCode[註1](http://keycode.info/)

## Css

| [transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)|
| -------- |
|  CSS transitions 是可以對一個元素進行產生變化的Css屬性。</br> CSS Transitions is a module of CSS that lets you create gradual transitions between the values of specific CSS properties. The behavior of these transitions can be controlled by specifying their timing function, duration, and other attributes. |

| [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform) |
| -------- |
| transform CSS 屬性可以讓你修改 CSS 可視化格式模型（visual formatting model）的空間維度。使用此屬性，元素可以被平移、旋轉、縮放和傾斜。 </br> The transform CSS property lets you modify the coordinate space of the CSS visual formatting model. Using it, elements can be translated, rotated, scaled, and skewed. |

###### tags: `window`, `querySelector`, `querySelectorAll`, `transition`