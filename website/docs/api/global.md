---
sidebar_position: 3
id: global
title: global
---

The component now exposes the global property - `INSTANCE_SYM` which is mounted on the current global variable (e.g. `window`)

It can also be referenced directly via the string - `__REACT_STILLNESS_CONTEXT_INSTANCE__`, in order to support more powerful customization capabilities in special scenarios, without having to obtain `manager` via hooks or contexts