const getTagFromParentElement = (element: HTMLElement, dataAttribute: string): null | string => {
  const clickedTagElement: Element | null = element.closest(`[${dataAttribute}]`);

  if (clickedTagElement) {
    const tag: string | null = clickedTagElement.getAttribute(dataAttribute);
    return tag;
  }

  return null;
};

export default getTagFromParentElement;
