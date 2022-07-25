---
id: faq
title: FAQ
---

## Question

### What is the problem with react-router when doing forward and backward routing?

When the entire route node is cached, if a `history` operation such as `push` or `back` is performed, the original node is cached, so when the node is re-entered, clearing the cache before jumping will result in `componentDidMount`, and jumping before clearing the cache will result in `componentDidUpdate`

### Use react18

The idea of `stillness-component` itself is to achieve local component caching without affecting the react rendering mechanism, so the component is not constrained by version, but because of the large number of hooks used internally, a minimum react version of 16.8 is required