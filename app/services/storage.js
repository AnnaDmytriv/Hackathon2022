export const getErrorElements = () => {
    return JSON.parse(localStorage.getItem("Errors"));
};

export const getFirstId = (el) => {

    let id = el.getAttribute("id");

    while(!id){
        el = el.parentElement;
        id = el.getAttribute("id");
    }

    return id;
}

export const saveErrorInDB = () => {
    const elWithError = document.querySelector("img[src='images/5.webp']").parentElement;

    const bodyRect = document.body.getBoundingClientRect();
    const elmRect = elWithError.getBoundingClientRect();
    const absX = elmRect.left - bodyRect.left;
    const absY = elmRect.top - bodyRect.top;

    const elementText = [...elWithError.childNodes].filter(node => node.nodeType === Node.TEXT_NODE).map(node => node.textContent).join('')

    const contextId = getFirstId(elWithError);

    const error = {
        tagName: elWithError.tagName,
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
        },
        contextId
    }

    localStorage.setItem("Errors", JSON.stringify([error]));
};