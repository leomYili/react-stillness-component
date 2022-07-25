---
id: max
title: max
---

> For special scenarios, sometimes you need to control the number of nodes in the cache, use `max` to achieve the effect of automatically refreshing the static components

## Example

max' uses the [lru](<https://en.wikipedia.org/wiki/Cache_replacement_policies#Least_recently_used_(LRU)>) algorithm to automatically clear the oldest and least used nodes in the history when the static nodes reach the limit. thus improving performance

Note that only the `<Offscreen>` node at the first level of max is counted as a node, and all its children follow the parent node, so only the first level node in the system will participate in the `lru` memory

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