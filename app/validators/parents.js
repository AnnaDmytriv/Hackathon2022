import { getNodeAttributes } from "../shared/utils";
import { getTagNameScore } from "./tagName";

export const getParentsScore = (currParent, oldParent)=>{

    let score;
    const elParentAttr = JSON.stringify(getNodeAttributes(currParent));
    const parentAttr = JSON.stringify(oldParent.attributes);

    if(currParent.tagName == oldParent.tagName && elParentAttr === parentAttr){
        score = 100;
    }else if(currParent.tagName == oldParent.tagName && elParentAttr != parentAttr){
        score = 50;
    }else if(elParentAttr === parentAttr){
        const tagScore = getTagNameScore(currParent.tagName, oldParent.tagName);
        score = tagScore >= 50 ? 50 : 0;
    }else{
        score = 0;
    }

    return score;
};