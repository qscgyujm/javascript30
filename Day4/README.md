# Day4 Array Cardio Day 1

這一個章節主要是利用Javascript的Array物件中方法做資料處理，達到所需要到的結果。

## Javascript:

| [Array](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) |
| ----- |
| The JavaScript Array object is a global object that is used in the construction of arrays; which are high-level, list-like objects. |

| [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter) |
| ----- |
| filter產生新的陣列，內容為舊陣列的條件成立。 |

```javascript=
const result = words.filter(word => word.length > 6);
```

| [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) |
| ----- |
| map產生新的陣列，內容為呼叫舊陣列的任何元件。 |

```javascript=
const map1 = array1.map(x => x * 2);
```

| [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort) |
| ----- |
| sort回傳一個原先陣列的排序值。 |

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
```

| [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)|
| ----- |
| reduce是原先陣列中每一個元件的累加器。 |

```javascript=
const array1 = [1, 2, 3, 4];
const reducer = (accumulator, currentValue) => accumulator + currentValue;

// 1 + 2 + 3 + 4
console.log(array1.reduce(reducer));
// expected output: 10

// 5 + 1 + 2 + 3 + 4
console.log(array1.reduce(reducer, 5));
// expected output: 15
```

## Summary

下面是我在這章節學到的東西：
1. Array在js中是很常用的物件，而js本身就有提供Array的內建函數提供更有效率的Array處理。
2. 本章節主要用到`filter`過濾,`map`新陣列,`sort`排序,`reduce`累加。
3. 在Array本身就有許多的內建函數，第四天只是列出一些常見功能，不過要想了解Array的使用還可能還去看MDN網站才知道有那些功能。


###### tags: `Array`
