# Day7 Array Cardio Day 2

[Demo](https://qscgyujm.github.io/javascript30/Da7/index.html)

這一個章節跟第四天一樣主要是利用Javascript的Array物件中方法做資料處理。

1. 第一個語法是使用`some()`作為練習，是偵測在`peoele`中是否有人大於19歲？

```javascript
const isAdult = people.some(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log({isAdult});
```

![](https://i.imgur.com/tjlB1w5.png)


2. 第二個語法是使用`every()`作為練習，是偵測在`peoele`中全部的人都大於19歲？

```javascript
const allAdults = people.every(person => ((new Date()).getFullYear()) - person.year >= 19);
console.log({allAdults});
```

![](https://i.imgur.com/rxFwq1p.png)

3. 第三個語法是使用`find()`作為練習，是尋找符合陣列中符合的資料。

```javascript
const comment = comments.find(comment => comment.id === 823423);
console.log(comment);
```

![](https://i.imgur.com/dzkOET5.png)

4. 第四個語法是使用`findIndex()`作為練習，是尋找符合陣列中符合資料的索引值。

```javascript
const index = comments.findIndex(comment => comment.id === 823423);
console.log(index);
```

![](https://i.imgur.com/abGTDG0.png)

## Js

1. [Array.prototype.some()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach) 
   some()是測試陣列中是否有符合的值，只要其中一個有符合配對即回傳`true`。

```js
function isBiggerThan10(element, index, array) {
  return element > 10;
}

[2, 5, 8, 1, 4].some(isBiggerThan10);  // false
[12, 5, 8, 1, 4].some(isBiggerThan10); // true
```

2. [Array.prototype.every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every) 
   every()測試陣列中全部是否有符合，很類似some()，但every()是全部都符合配對才回傳`true`，只要其中一樣不符合及回傳`false`。

```js
function isBelowThreshold(currentValue) {
  return currentValue < 40;
}

var array1 = [1, 30, 39, 29, 10, 13];

console.log(array1.every(isBelowThreshold));
// expected output: true
```

3. [Array.prototype.find()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/find) 
   find()回傳第一個符合的值。

```js
function isBigEnough(element) {
  return element >= 15;
}

[12, 5, 8, 130, 44].find(isBigEnough); // 130
```

4. [Array.prototype.findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex) 
   find()回傳第一個符合值的索引值。

```js
var array1 = [5, 12, 8, 130, 44];

function findFirstLargeNumber(element) {
  return element > 13;
}

console.log(array1.findIndex(findFirstLargeNumber));
// expected output: 3
```

5. [Array.prototype.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
   slice()是在原陣列切割出特定區間的元素，作為新的陣列。
   
```javascript=
var fruits = ['Banana', 'Orange', 'Lemon', 'Apple', 'Mango'];
var citrus = fruits.slice(1, 3);

```

6. [Array.prototype.splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
   splice()使用有兩種，第一種是現有的陣列中加入新的元素，第二種方式為在現有的陣列中移除內容。

```javascript=
// add
var myFish = ['angel', 'clown', 'mandarin', 'sturgeon'];
var removed = myFish.splice(2, 0, 'drum');
// remove
var removed = myFish.splice(3, 1);
// remove and add
var removed = myFish.splice(2, 1, 'trumpet');
```

###### tags: `Array`