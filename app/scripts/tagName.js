export const changeTagName = (el) => {
    const newTagEl = document.createElement("button");
    newTagEl.innerHTML = el.innerHTML;
    newTagEl.classList.add(el.classList);
    el.replaceWith(newTagEl);
}