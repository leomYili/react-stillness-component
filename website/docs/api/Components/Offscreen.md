---
sidebar_position: 1
id: offscreen
title: Offscreen
---

> Wrapping components that need to be stationary with `<Offscreen>`

## usage

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

- `visible`: Required, **boolean**, used to manually control whether the component is quiescent or not, will start quiescent component only when `true`, if initialized with `false`, it will automatically turn on **lazy loading**
- `type`: optional, **string** or **number**, help you categorize the type of static components, easy to manage and control manually
- `scrollReset`: optional, **boolean**, by default, scroll position will be saved automatically, if you don't need this feature, please set to `false`.