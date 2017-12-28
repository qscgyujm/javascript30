# Day9 14 Must Know Dev Tools Tricks

[Demo](https://qscgyujm.github.io/javascript30/Da9/index.html)

第九天主要學習的是console的運用。

何為[console](https://developer.mozilla.org/zh-TW/docs/Tools/Web_Console)？

主要功能為：
1. 記錄網頁相關的資訊：網路請求、JavaScript、CSS、安全性相關的問題，警告和錯誤、以及頁面運行的 JavaScript 相關問題，警告，錯誤，和參考訊息。
2. 透過執行頁面文中的 JavaScript 表達式與網頁互動。

## Js

1. [console](https://developer.mozilla.org/en-US/docs/Web/API/Console) 
   The Console object provides access to the browser's debugging console (e.g. the Web Console in Firefox). The specifics of how it works varies from browser to browser, but there is a de facto set of features that are typically provided. 

2. [Console.log()](https://developer.mozilla.org/en-US/docs/Web/API/Console/log) 
   輸出訊息到 Web Console。 

```javascript=
console.log(obj1 [, obj2, ..., objN]);
console.log(msg [, subst1, ..., substN]);
```

3. [console.warn()](https://developer.mozilla.org/en-US/docs/Web/API/Console/warn) 
   輸出警告訊息到 Web Console。 

```javascript=
console.warn(obj1 [, obj2, ..., objN]);
console.warn(msg [, subst1, ..., substN]);
```

4. [console.error()](https://developer.mozilla.org/en-US/docs/Web/API/Console/error) 
   輸出錯誤訊息到 Web Console。 

```javascript=
console.error(obj1 [, obj2, ..., objN]);
console.error(msg [, subst1, ..., substN]);
console.exception(obj1 [, obj2, ..., objN]);
console.exception(msg [, subst1, ..., substN]);
```

5. [console.info()](https://developer.mozilla.org/en-US/docs/Web/API/Console/info) 
   輸出資訊訊息到 Web Console。 

```javascript=
console.info(obj1 [, obj2, ..., objN]);
console.info(msg [, subst1, ..., substN]);
```

6. [console.assert()](https://developer.mozilla.org/en-US/docs/Web/API/console/assert) 
   判斷訊息狀態，為true不顯示，為false就顯示。 

```javascript=
console.assert(assertion, obj1 [, obj2, ..., objN]);
console.assert(assertion, msg [, subst1, ..., substN]);
```

7. [console.dir()](https://developer.mozilla.org/en-US/docs/Web/API/console/dir) 
   輸出物件的屬性到 Web Console。 

```javascript=
console.dir(object);
```

8. [console.groupCollapsed()](https://developer.mozilla.org/en-US/docs/Web/API/console/groupCollapsed) 
   建立一個訊息群組到 Web Console。 

```javascript=
console.groupCollapsed([label]);
```

9. [console.count()](https://developer.mozilla.org/en-US/docs/Web/API/console/count) 
   輸出次數到 Web Console。搭配console.groupEnd()。 

```javascript=
console.count();
```

10. [console.count()](https://developer.mozilla.org/en-US/docs/Web/API/console/count) 
    輸出次數到 Web Console。 

```javascript=
console.count();
```

11. [console.time()](https://developer.mozilla.org/en-US/docs/Web/API/console/count) 
    輸出時間差到 Web Console。搭配console.groupEnd()。 

```javascript=
console.time();
```

###### tags: `console`