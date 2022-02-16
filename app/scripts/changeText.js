export const changeChildrenText = (el) => {
  const childTextNodes = [...el.childNodes]
    .filter((node) => node.nodeType === Node.TEXT_NODE);
    
    console.log(childTextNodes, "childTextNodes");
    childTextNodes.forEach(node => node.textContent = 'Text change!! :)')
};
