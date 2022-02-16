import { SCORE } from "../consts/validatorScores";
import { getAttrsScore } from "../validators/attributes";
import { getParentsScore } from "../validators/parents";
import { getPOsitionScore } from "../validators/position";
import { getTagNameScore } from "../Validators/tagName";
import { getChildrenScore } from "../Validators/children";
import { getTextScore } from "../Validators/textContent";

export const getFinalScore = (currEl, oldEl) => {

    const attrScore = {
        weight: SCORE.ATTR,
        score: getAttrsScore(currEl, oldEl)
    };
    const parentScore = {
        weight: SCORE.PARENT,
        score: getParentsScore(currEl, oldEl)
    };
    const positionScore = {
        weight: SCORE.POSITION,
        score: getPOsitionScore(currEl, oldEl)
    };
    const tagScore = {
        weight: SCORE.TAG,
        score: getTagNameScore(currEl.tagName, oldEl.tagName)
    };
    const childrenScore = {
        weight: SCORE.CHILDREN,
        score: getChildrenScore(currEl, oldEl)
    };
    const contentScore = {
        weight: SCORE.CONTENT,
        score: getTextScore(currEl, oldEl)
    };

    return weightScore([attrScore, parentScore, positionScore, tagScore, childrenScore, contentScore]);
};

const weightScore = (validatorsArray) => {
    let finalScore = 0;
    validatorsArray.forEach(validator => {
        const weight = validator.weight;
        const score = validator.score;
        finalScore += percentage(weight, score);
    });
    return finalScore;
};

const percentage = (percent, score) => {
    return score * percent / 100;
};
