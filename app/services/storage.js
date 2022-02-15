export const saveErrorInDB = () => {
    const elWithError = document.querySelector("img[src='images/5.webp']").parentElement;

    const bodyRect = document.body.getBoundingClientRect(),
    const elmRect = elWithError.getBoundingClientRect(),
    const absX = elmRect.left - bodyRect.left;
    const absY = elmRect.top - bodyRect.top;

    const elementText = [...elWithError.childNodes].filter(node => node.nodeType === Node.TEXT_NODE).map(node => node.textContent).join('')

    const error = {
        tag: elWithError.tagName,
        parent: {
            tag: elWithError.parentElement.tagName,
            attributes: elWithError.parentElement.attributes,
        },
        attributes: [...elWithError.attributes],
        children: elWithError.children.length,
        content: elementText,
        position: {
            x: absX,
            y: absY
        }
    }

    localStorage.setItem("Errors", [JSON.stringify(error)]);
};