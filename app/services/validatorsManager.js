import { getAttrsScore } from "../validators/attributes";
import { getParentsScore } from "../validators/parents";
import { getPositionScore } from "../validators/position";
import { getTagNameScore } from "../Validators/tagName";
import { getChildrenScore } from "../Validators/children";
import { getTextScore } from "../Validators/textContent";
import { SCORE, VALIDATORS } from "../shared/consts";

export const getFinalScore = (currEl, oldEl) => {

    const attrScore = {
        weight: SCORE.ATTR,
        name: "attrScore",
        score: getAttrsScore(currEl, oldEl)
    };
    const parentScore = {
        weight: SCORE.PARENT,
        name: "parentScore",
        score: getParentsScore(currEl, oldEl)
    };
    const positionScore = {
        weight: SCORE.POSITION,
        name: "positionScore",
        score: getPositionScore(currEl, oldEl)
    };
    const tagScore = {
        weight: SCORE.TAG,
        name: "tagScore",
        score: getTagNameScore(currEl, oldEl)
    };
    const childrenScore = {
        weight: SCORE.CHILDREN,
        name: "childrenScore",
        score: getChildrenScore(currEl, oldEl)
    };
    const contentScore = {
        weight: SCORE.CONTENT,
        name: "contentScore",
        score: getTextScore(currEl, oldEl)
    };

    return weightScore({parentScore, positionScore, tagScore, childrenScore, contentScore, attrScore});
};

const weightScore = (validators) => {
    let finalScore = 0;

    for (const validator in validators) {
            const {weight, name, score} = validators[validator];
            checkSpecialConditions(validator, validators);
            finalScore += percentage(weight, score);        
    }

    return finalScore;
};

const percentage = (percent, score) => {
    return score * percent / 100;
};

const checkSpecialConditions = (validator, validators) => {
    const {weight, name, score} = validators[validator];
    if (name === "tagScore" && score < 5 && validators["childrenScore"].score > 5 && validators["attrScore"].score > 5) {
        console.log("this is probably the same element");
    }

}