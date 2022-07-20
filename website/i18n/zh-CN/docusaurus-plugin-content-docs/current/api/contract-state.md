---
sidebar_position: 2
id: contract-state
title: Contract State
---

> `Contract State` 是返回给 `collect`函数的参数，它将提供特定静止组件(一般是最近层级的`<Offscreen>`)的各种信息.

## 方法

- `getStillnessId()`: 返回 **string** 类型，是当前静止组件的唯一标识
- `getStillnessItem()`: 返回 **object** 类型，是当前静止组件的数据
- `getStillnessType()`: 返回 **string** 类型，是当前静止组件的类型
- `isStillness()`: 返回 **boolean**类型, 检查当前组件的静止状态
- `unset(id?: string,type?: string)`: 不返回值，可以指定要卸载的静止组件的唯一标识和类型，也可以看做刷新组件
- `clear()`: 不返回值，清除所有静止组件状态,也可以看做刷新组件
- `resetMax(max: number)`: 重置全局静止组件最大值
