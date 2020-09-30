---
title: 事件 - Event
order: 12
---

<div class='custom-api-docs'>

在 Chart 和 View 上通过 on 绑定事件、off 移除绑定事件。

```ts
// highlight-start
// 绑定事件
chart.on('eventName', callback);

// 移除事件
chart.off('eventName', callback);
// highlight-end

chart.on('click', (event) => {
  const shape = eve.shape;
  if (shape) {
    // do something
  }
});
```