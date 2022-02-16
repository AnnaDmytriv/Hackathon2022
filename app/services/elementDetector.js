import { getFinalScore } from "./validatorsManager";

export const detectElement = (oldEl) => {

    const elsInContext = document.querySelectorAll(`#${oldEl.contextId} *`);
    let mostCompatibleEl, maxScore = 0;

    for (let el of elsInContext) {
        const score = getFinalScore(el, oldEl);
        if (score > maxScore) {
            mostCompatibleEl = el;
        }
    };
    console.log("Found element: ", mostCompatibleEl);
    if (mostCompatibleEl) addBorder(mostCompatibleEl);
};

const addBorder = (el) => {
    el.style.border = "1px solid red";
};