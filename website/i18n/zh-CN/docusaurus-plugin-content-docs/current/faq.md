---
id: faq
title: 答疑
---

## 问题

### react-router 的路由做前进后退处理时的问题?

当缓存整个路由节点时,如果产生前进(`push`)或者后退(`back`)等`history`操作时,因为原来的节点已被缓存,所以再次进入该节点时,先清除缓存再跳转则会执行 `componentDidMount`,先跳转再清除缓存则会执行 `componentDidUpdate`

### 使用 react18

`stillness-component` 本身的理念就是在不影响react渲染机制的前提下,实现局部组件缓存效果,因此,组件并不受版本制约,只是因为内部使用了大量的hooks写法,因此最低要求react版本为16.8