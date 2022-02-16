export const addAttrToParent = (el) => {
    el.parentElement.setAttribute("style", "background-color: pink");
}

export const changeParentTag = (el) => {
    var parent = el.parentElement;
    parent.outerHTML = element.outerHTML.replace((parent.tagName, 'g'), "span");
}
