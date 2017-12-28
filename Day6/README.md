# Day6 Ajax Type Ahead

[Demo](https://qscgyujm.github.io/javascript30/Da6/index.html)

第六天的實作是練習Javascript非同步執行。

首先利用`fetch`物件建立接收資料的接口，`fetch`物件是類似於`XMLHttpRequest`，屬於`Ajax`的應用。

`Ajax`是指`非同步的JavaScript與XML技術`，其意義是當網頁與伺服器進行資料溝通時，畫面不必更新。

`fetch`的回應`reponse`是屬於`promise`，可使用`then()`來取得目標值。

```javascript
fetch(endpoint)
  .then(blob => blob.json())
  .then(data => cities.push(...data));
```
而接收到資料格式如下。

```javascript
[
    {
        city: "New York",
        growth_from_2000_to_2013: "4.8%",
        latitude: 40.7127837,
        longitude: -74.0059413,
        population: "8405837",
        rank: "1",
        state: "New York"
    },
    。
    。
    。
]
```

接下來利用正規表示式物件`RegExp`來尋找符合的字元與字串。

```javascript
var re = /ab+c/;
var re = new RegExp("ab+c");
// 上列為正規表達式

const regex = new RegExp(word, 'gi');
// word是輸入值。
// g是全部檢查
// i是不分大小的檢查
```

接下來利用`String.prototype.match(regexp)`來取的符合的回傳值，本次練習是對資料中的`city`和`state`進行配對。

取得回傳值透過`.map()`將每一筆資料轉換成`ul`的子元素。

之後在`input`建立兩個`change`和`keyup`事件，`change`是指`input`元素的內容被改變時就觸發事件。`keyup`是指`input`元素當放開鍵盤就觸發事件。

過來是將篩選值特別標記出來，再取得經過正規表達式配對的資料之後，利用`String.prototype.replace(regexp, value)`來取代配對值，將配對值加入`span`，讓`span`加入Css的class。

```javascript
const cityName = place.city.replace(regex, `<span class="h2">${value}</span>`)
```
就可以做到將配對值顯示出來。

## Html:

```html
<form class="search-form">
    <input type="text" class="search" placeholder="City or State">
    <ul class="suggestions">
      <li>Filter for a city</li>
      <li>or a state</li>
    </ul>
  </form>
```
 清單列表的Element
 
## Javascript:

1. [promise](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise) 
   The Promise object represents the eventual completion (or failure) of an asynchronous operation, and its resulting value. [[1](https://www.gitbook.com/book/eyesofkids/javascript-start-es6-promise/details)]

2. [fetch](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API) 
   Fetch API 提供了一個介面去獲取資源 (包含跨網路的資源）。這似乎有點像我們所熟悉的 XMLHttpRequest ，但這個新的 API 提供了更強更彈性的特點。
   The Fetch API provides an interface for fetching resources (including across the network). It will seem familiar to anyone who has used XMLHttpRequest, but the new API provides a more powerful and flexible feature set. 

```javascript
fetch(endpoint)
  .then(res =>{
    return res.json()
  })
  .then(data => console.log(data))
```

3. [正規表達式](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Guide/Regular_Expressions) 
   正規表達式是被用來匹配字串中字元組合的模式。在 JavaScript 中，正規表達式也是物件，這些模式在 RegExp 的 exec 和 test 方法中，以及 String 的 match、replace、search、split 等方法中被運用。 

4. [String.prototype.replace()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/String/replace) 
   replace() 方法會傳回一個新字串，此新字串是透過將原字串與 pattern 比對，以 replacement 取代吻合處而生成。 

5. [String.prototype.match()](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/String/match) 
   match() 方法會傳回正規表達式配對的Array。 

```javascript
str.match(regexp);
```

6. [Array.prototype.join()](https://developer.mozilla.org/zh-TW/docs/Web/JavaScript/Reference/Global_Objects/Array/join) 
   join() 方法將陣列中所有元件連接、合併成一個字串。 

```js=
var a = ['Wind', 'Rain', 'Fire'];
a.join();    // 'Wind,Rain,Fire'
a.join('-'); // 'Wind-Rain-Fire'
```

## Css:


1. [:nth-child()](https://developer.mozilla.org/zh-TW/docs/Web/CSS/:nth-child)
   :nth-child是指在全部元素中的順序位置，不會依照元素的種類而變化。
   The :nth-child(n) selector matches every element that is the nth child, regardless of type, of its parent.

```css
p:nth-child(2) {
    background: red;
}
```

2. [:nth-of-type()](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-of-type)
   :nth-child是指在全部元素中的符合元素種類的順序位置。
   The :nth-of-type() CSS pseudo-class matches one or more elements of a given type, based on their position among a group of siblings.
   
```css
p:nth-of-type(4n) {
  color: lime;
}
```

3. [:nth-last-child()](https://developer.mozilla.org/en-US/docs/Web/CSS/:last-child)
   :nth-last-child指在全部元素中最後的一個。
   The :last-child CSS pseudo-class represents the last element among a group of sibling elements.
   
```css
p:last-child {
  color: lime;
}
```    
   
4. [:nth-last-of-type()](https://developer.mozilla.org/en-US/docs/Web/CSS/:nth-last-of-type)
   :nth-last-child指全部符合配對元素中的最後一個。
   The :nth-last-of-type() CSS pseudo-class matches one or more elements of a given type, based on their position among a group of siblings, counting from the end.
   
```css
p:last-of-type {
  color: lime;
}
```  
   
5. [:first-child](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-child)
   :nth-last-child指在全部元素中第一個。
   The :first-child CSS pseudo-class represents the first element among a group of sibling elements.
   
```css
p:first-child {
  color: lime;
}
```    
   
6. [:first-of-type](https://developer.mozilla.org/en-US/docs/Web/CSS/:first-of-type)
   :first-of-type指全部符合配對元素中的第一個。
   The :first-of-type CSS pseudo-class represents the first element of its type among a group of sibling elements.
   
```css
p:first-of-type {
  color: red;
}
```  
   
###### tags: `promise`, `fetch`, `RegExp`