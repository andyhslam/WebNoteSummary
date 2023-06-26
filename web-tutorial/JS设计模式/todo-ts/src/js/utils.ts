export function findParentNode(
  target: HTMLElement,
  className: string
): HTMLElement {
  /**
   * 先把target的父节点赋值给target；
   * 然后判断赋值后的target的className是否等于传入的className；
   * 如果是，就返回当前的target.
   */
  while ((target = target.parentNode as HTMLElement)) {
    if (target.className === className) {
      return target
    }
  }
}

export function createItem(
  tagName: string,
  className: string,
  todoItem: string
): HTMLElement {
  const oItem: HTMLElement = document.createElement(tagName)
  oItem.className = className
  oItem.innerHTML = todoItem
  return oItem
}
