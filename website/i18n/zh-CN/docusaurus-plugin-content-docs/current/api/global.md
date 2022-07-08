---
sidebar_position: 3
id: global
title: global
---

组件现在对外暴露了全局属性 - `INSTANCE_SYM` 该属性挂载在当前全局变量上(比如`window`)

也可以通过字符串 - `__REACT_STILLNESS_CONTEXT_INSTANCE__` 直接引用,目的是为了特殊场景下,不用通过hooks或者context来获取`manager`,从而支持了更强大的自定义能力
