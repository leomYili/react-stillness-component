---
sidebar_position: 1
id: offscreen
title: Offscreen
---

> 用`<Offscreen>`包裹需要静止的组件

## 使用

```jsx
import { Offscreen } from 'react-stillness-component';

function App() {
  const [show, setShow] = useState(true);

  return (
    <div>
      <button onClick={() => setShow((show) => !show)}>Toggle</button>
      // highlight-start
      <Offscreen visible={show}>
        <Count />
      </Offscreen>
      // highlight-end
    </div>
  );
}
```

## Props

- `visible`: 必选， **boolean** 类型，用于手动控制是否静止，只有为 `true` 时才会开始静止组件，初始化时如果为 `false` ，则自动开启**懒加载**
- `type`: 可选， **string** 或者 **number** 类型，帮助你归类静止组件类型，便于管理与手动控制
- `scrollReset`: 可选， **boolean** 类型，默认情况下，滚动位置将被自动保存，如果不需要这个功能，请设置为 `false`。
