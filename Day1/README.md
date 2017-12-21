# Day1 JS: Drum Kit

第1天的實作是建立一個類似打鼓就產生音效的網頁，當點擊鍵盤時會讓網頁的element產生音效和動態的畫面效果。

首先在畫面建立數個`div`元素，在每個`div`元素中，包含著`span`元素，`span`的內容是對應著鍵盤值。

```html
<span>Q</span>
```

在每個`div`元素的屬性加入鍵盤的`keycode`，而鍵盤Q的`keycode`值等於81，因此在`div`中的屬性建立`press-key="81"`，作為當事件觸發時所需要的值。

```html
<div class="key" press-key="81"></div>
```

以及建立數個`audio`元素，每個`audio`都有各自的執行音效檔。

```html
<audio keys="81" src="./sounds/boom.wav"></audio>
```

接下來在畫面`window`建立監聽事件，觸發事件的動作為`keydown`，而`keydown`就是當鍵盤按下的動作即觸發事件。

當事件觸發時，首先抓取鍵盤按下時產生的`keycode`，並運用`keycode`值來取得對應的`div`和`audio`元素。

```javascript
const audio = document.querySelector(`audio[keys='${e.keyCode}']`);
const key = document.querySelector(`div[press-key='${e.keyCode}']`);
```

接下來是執行`audio`元素，讓他播放音樂，並透過設定播放時間從0開始。

```javascript
audio.currentTime = 0;
audio.play();
```

以及將`key`加入CSS，讓他產生動態效果，而`key`的動態效果是透過CSS中的`transition`屬性來執行的。

```javascript
key.classList.add('playing');
```

而當`key`的`transition`觸發完成後，要將動態效果給取消掉，是透過`transitionend`來觸發執行取消其動態效果。

## Html

```html
<div class="key" press-key="81">
  <span>Q</span>
</div>
```

```html
<audio keys="81" src="./sounds/boom.wav"></audio>
```

## Javascript:

1. 
   [window](https://developer.mozilla.org/zh-TW/docs/Web/API/Window) 
   window 物件代表了一個包含 DOM 文件的視窗，其中的 document 屬性指向了視窗中載入的 Document 物件。而使用 document 的 defaultView 屬性，則可取得該 Document 物件所在的視窗 window 物件。 

2. 
   [EventTarget.addEventListener()](https://developer.mozilla.org/zh-TW/docs/Web/API/EventTarget/addEventListener)
   EventTarget.addEventListener() 方法能將指定的事件監聽器註冊到 EventTarget 實作物件上。EventTarget 可能是 Document 中的 Element 物件、Document 物件本身、Window 物件，或是其它支援事件的物件（如：XMLHttpRequest）。

3.
   [document.querySelector(selectors)](https://developer.mozilla.org/zh-TW/docs/Web/API/Document/querySelector)
   回傳 document 第一個符合特定選擇器群組的Element 物件。

4.
   [document.querySelectorAll(selectors)](https://developer.mozilla.org/zh-TW/docs/Web/API/Document/querySelectorAll)
   回傳 document 全部符合特定選擇器群組的Element 物件。

5.
   [elementNodeReference.classList](https://developer.mozilla.org/zh-TW/docs/Web/API/Element/classList)
Element.classList 唯讀屬性代表了該Element所擁有之類別屬性（Class Attribute）的即時更新集－DOMTokenList。

6.
   [element.addEventListener("transitionend", function(event) {}](https://developer.mozilla.org/en-US/docs/Web/Events/transitionend)
   transitionend是當transition完成之後，接下來執行 `transitionend`中的事件。

7.
   [NodeList](https://developer.mozilla.org/en-US/docs/Web/API/NodeList)
   NodeList 物件是節點的集合，可藉由 Node.childNodes 屬性以及 document.querySelectorAll() 方法取得。

8.
   [KeyboardEvent.keyCode](https://developer.mozilla.org/zh-TW/docs/Web/API/KeyboardEvent/keyCode)
   keycode是指當鍵盤下時產生鍵盤的對應值。
查詢鍵盤值keyCode[1](http://keycode.info/)


## CSS

1.
   [transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
   CSS transitions 是當Element產生變化時，控制它的變化速度。
   CSS transitions provide a way to control animation speed when changing CSS properties.

2.
   [transform](https://developer.mozilla.org/en-US/docs/Web/CSS/transform)
   transform CSS 屬性可以讓你修改 CSS 可視化格式模型（visual formatting model）的空間維度。使用此屬性，元件可以被平移、旋轉、縮放和傾斜。

## Summary

身為一位新人，想透過js30來學習對於js的基礎，並強迫自己來寫點筆記來紀錄學習過程，因為在之前學習程式時，很少做到筆記以及記錄，造成之後有時會發生寫過就忘記的狀況，因此趁這個鐵人賽機會來讓自己成長。如果30天有任何紀錄錯誤的地方歡迎指教，讓大家一起成長往前邁進。

###### tags: `window`, `querySelector`, `querySelectorAll`, `transition`