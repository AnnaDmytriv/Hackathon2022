window.addEventListener('DOMContentLoaded', (event) => {

    saveErrorInDB();

});

const saveErrorInDB = () => {
    const elWithError = document.querySelector("img[src='images/5.webp']").parentElement;

    const bodyRect = document.body.getBoundingClientRect(),
    const elmRect = elWithError.getBoundingClientRect(),
    const absX = elmRect.left - bodyRect.left;
    const absY = elmRect.top - bodyRect.top;

    const error = {
        tag: elWithError.tagName,
        parent: {
            tag: elWithError.parentElement.tagName,
            attributes: elWithError.parentElement.attributes,
        },
        attributes: [...elWithError.attributes],
        children: elWithError.children.length,
        content: elWithError.innerHTML,
        position: {
            x: absX,
            y: absY
        }
    }

    localStorage.setItem("Errors", [JSON.stringify(error)]);
};