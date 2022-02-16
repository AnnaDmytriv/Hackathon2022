import { getNodeAttributes } from "../shared/utils";

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

export const saveErrorInDB = (elWithError) => {

    const bodyRect = document.body.getBoundingClientRect();
    const elmRect = elWithError.getBoundingClientRect();
    const absX = elmRect.left - bodyRect.left;
    const absY = elmRect.top - bodyRect.top;

    window.elPostion ={x: absX,
        y: absY};

    const elementText = [...elWithError.childNodes].filter(node => node.nodeType === Node.TEXT_NODE).map(node => node.textContent).join('')
    

    const contextId = getFirstId(elWithError);

    const error = {
        tagName: elWithError.tagName,
        parent: {
            tag: elWithError.parentElement.tagName,
            attributes: getNodeAttributes(elWithError.parentElement),
        },
        attributes: getNodeAttributes(elWithError),
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