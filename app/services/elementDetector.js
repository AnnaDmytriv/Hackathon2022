import { getFinalScore } from "./validatorsManager";

export const detectElement = (oldEl) => {

    const elsInContext = document.querySelectorAll(`#${oldEl.contextId} *`);
    let mostCompatibleEl, maxScore = 0;

    for (let el of elsInContext) {
        const score = getFinalScore(el, oldEl);
        console.log("score: ", score);
        if (score > maxScore) {
            maxScore = score;
            mostCompatibleEl = el;
        }
    };
    console.log("Found element: ", mostCompatibleEl);
    console.log("Max score: ", maxScore+"%");
    if (mostCompatibleEl) addBorder(mostCompatibleEl);
};

const addBorder = (el) => {
    el.style.border = "1px solid red";
};