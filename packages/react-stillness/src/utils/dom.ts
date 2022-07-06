export function createWrapperElement() {
  const wrapper = document.createElement('div');
  wrapper.dataset.type = 'offscreen-wrapper';
  return wrapper;
}

export function getScrollPropertyInNodes(targetElement: HTMLElement) {
  let result = [];

  if (targetElement.hasChildNodes()) {
    for (let node of targetElement.children) {
      result.push({ node, left: node.scrollLeft, top: node.scrollTop });
    }
  }

  return result;
}

export function isRealChildNode(
  targetElement: HTMLElement,
  element: any
) {
  let isExist = false;

  if (targetElement.hasChildNodes()) {
    for (let node of targetElement.children) {
      if (node === element) {
        return true;
      }
    }
  }
  return isExist;
}
