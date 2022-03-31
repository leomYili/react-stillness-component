---
sidebar_position: 2
id: contract-state
title: Contract State
---

> `Contract State` is the argument returned to the `collect` function, which will provide various information about a particular stillness-component (typically the `<Offscreen>` of the most recent hierarchy).

## Methods

- `getStillnessId()`: returns a **string**, which is the unique identifier of the current stillness component
- `getStillnessItem()`: returns **object**, which is the data of the current stillness component
- `getStillnessType()`: returns a **string**, which is the type of the current stillness component
- `unset(id?: string,type?: string)`: does not return a value, but specifies the unique identifier and type of the still component to be unloaded, and can also be seen as a refresh component
- `clear()`: no return value, clear the state of all stillness-components, can also be seen as refreshing ones.