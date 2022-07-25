---
id: max
title: max
---

> 针对特殊场景,有时需要控制缓存的节点数量,使用 `max` 可以达到自动刷新静止组件的效果

## 示例

`max`使用了 [lru](<https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)>)算法, 当静止节点达到上限的时候,自动清除历史最老最少使用的节点,从而提高了性能

这里需要注意,max中只有第一层的`<Offscreen>`节点才会算作是一个节点,其子节点全部跟随父节点,因此,系统中只有第一层节点才会参与 `lru` 记忆

```jsx title="max"

const App = () => {
  const [visible,setVisible] = useState(true);

  return (
    <StillnessProvider options={max:2}>
      <Offscreen visible={visible}><A></Offscreen>
      <Offscreen visible={visible}><B></Offscreen>
      <Offscreen visible={!visible}><C></Offscreen>
    </StillnessProvider>
  );
}
```

When component C goes to rest, it automatically resets component A