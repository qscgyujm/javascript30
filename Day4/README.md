# Day4 Array Cardio Day 1
​
這一個章節主要是利用Javascript的Array物件中方法做資料處理，在第四天會有幾個語法的練習。
​
1. 第一個語法是使用`filter()`作為練習，`filter()`是建立一個新陣列是原先的陣列的判斷式的篩選值。在`filter()`範例中是用來篩選出生年在1500～1600這個區間的人。
​
```javascript
const fifteen = inventors.filter(inventor => (inventor.year >= 1500 && inventor.year < 1600));
console.table(fifteen);![
```
​
![](https://i.imgur.com/0ZffAiu.png)
​
2. 第二個是使用`map()`作為練習，`map()`是建立新陣列裡面包含經過函數處理過的原陣列每一個元素。在`map()`是將每一個人的的名字前後合併。
​
```javascript
const fullNames = inventors.map(inventor => `${inventor.first} ${inventor.last}`);
console.log(fullNames);
```
​
![](https://i.imgur.com/zRRDvZp.png)
​
3. 第三個是使用`sort()`作為練習，`sort()`是指說原陣列中的前後元素進行排列。在`sort()`是依照陣列中的`year`排序，讓最早出生的人在前，依序排序下來，越後面的生出日期都大於前面的出生日期。
​
```javascript
const ordered = inventors.sort((a, b) => a.year > b.year ? 1 : -1);
console.table(ordered);
```
​
![](https://i.imgur.com/qcloTNG.png)
​
4. 第四個是使用`reduce()`作為練習，`reduce()`是指將原陣列的每一個元素進行累加的動作。可以預設值提供累加，若無預設值就以陣列第一筆數值作為預設值。
​
```javascript
const exerciseSort = inventors.sort((a, b)=> a.year>b.year? 1: -1);
console.table(exerciseSort);
```
​
![](https://i.imgur.com/d9k3CQt.png)
​
5. 第五個練習一樣是使用`sort()`作為練習，這次的練習是排序在陣列`passed`減去`year`的值。
​
```javascript
const oldest = inventors.sort(function(a, b) {
  const lastInventor = a.passed - a.year;
  const nextInventor = b.passed - b.year;
  return lastInventor > nextInventor ? -1 : 1;
});
console.table(oldest);
```
​
![](https://i.imgur.com/BHrOXKY.png)
​
6. 第六個練習一樣是使用`sort()`作為練習，這次的練習在陣列中`Last`的比較排序。
​
```javascript
const alpha = people.sort((lastOne, nextOne) => {
  const [aLast, aFirst] = lastOne.split(', ');
  const [bLast, bFirst] = nextOne.split(', ');
  return aLast > bLast ? 1 : -1;
});
console.log(alpha);
```
​
7. 第七個練習是拿網頁做實際練習，首先拿取得巴黎的大道名稱，再過濾出大道名稱含有`de`字的出來。
​
![](https://i.imgur.com/JQFzBLT.png)
​
```javascript
const category = document.querySelector('.mw-category');
const links = Array.from(category.querySelectorAll('a'));
const de = links
            .map(link => link.textContent)
            .filter(streetName => streetName.includes('de'));
```
​
![](https://i.imgur.com/i8v4QNU.png)
​
8. 第八個練習一樣是練習`reduce()`，累加在出現陣列中元素的次數，但在這個的實作中有使用當沒有建立預設值時，該如何動態建立初始值。
​
```javascript
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck', 'pogostick'];
​
const transportation = data.reduce(function(obj, item) {
  if (!obj[item]) {
    obj[item] = 0;
  }
  obj[item]++;
  return obj;
}, {});
​
console.log(transportation);
```
​
![](https://i.imgur.com/pbXsUkF.png)
​
​
## Javascript:
​
1. [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) 
   JavaScript 中，全域物件 Array 是陣列的建構子，陣列是高階、似列表的物件。 <br> The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects. 
​
2. [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) 
   filter() 方法會建立一個經指定之函式運算後，由原陣列中通過該函式檢驗之元素所構成的新陣列。 
​
```javascript=
const result = words.filter(word => word.length > 6);
```
​
3. [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
   map() 方法會建立一個新的陣列，其內容為原陣列的每一個元素經由回呼函式運算後所回傳的結果之集合。 
​
```javascript=
const map1 = array1.map(x => x * 2);
```
​
4. [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) 
   sort() 方法將陣列中的元素排列至其應當的位置上並返回此陣列。 
​
```javascript=
function compare(a, b) {
  if (a is less than b by some ordering criterion) {
    return -1;
  }
  if (a is greater than b by the ordering criterion) {
    return 1;
  }
  // a must be equal to b
  return 0;
}
// 如果 compareFunction 被應用, 陣列元素們將根據比較函數之回傳值來排序。如果 a 和 b 為被比較之兩元素, 則:
​
// 若 compareFunction(a, b) 小於 0, 將 a 排在比 b index還小處, i.e. a 排在第一個.
// 若 compareFunction(a, b) 回傳 0, a 與 b 互相不會改變順序, 但會與全部其他元素比較排列。註計: ECMAscript標準不保證能使用此行為, 因此不是所有瀏覽器 (e.g. Mozilla版本至少2003) 遵守此行為.
// 若 compareFunction(a, b) 大於 0, 將 b 排在比 a index還小處.
// compareFunction(a, b) 在給特定元素 a 及 b 為此函數之兩參數時必須每次都回傳相同之值。若回傳值不一致，排序順序則為undefined。
```
​
​
5. [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)
   reduce() 方法將一個累加器及陣列中每項元素（由左至右）傳入回呼函式，將陣列簡化為單一值。 
​
```javascript=
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;
​
// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10
​
// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```
​
6. [](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)
    includes()方法是回傳陣列中是否含有配對值的布林值。
    
```javascript
[1, 2, 3].includes(2);     // true
[1, 2, 3].includes(4);     // false
[1, 2, 3].includes(3, 3);  // false
[1, 2, 3].includes(3, -1); // true
[1, 2, NaN].includes(NaN); // true
```
​
###### tags: `Array`