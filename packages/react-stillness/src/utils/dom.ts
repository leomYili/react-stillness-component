export function createWrapperElement() {
  const wrapper = document.createElement('div');
  wrapper.dataset.type = 'offscreen-wrapper';
  return wrapper;
}
