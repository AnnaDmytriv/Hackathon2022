import {addAttrToParent, changeParentTag} from '../scripts/parents';
import {rotateElements} from '../scripts/rotateImages';
import {replaceTag} from '../shared/utils';

export const SCORE = {
    TAG: 50,
    POSITION: 10,
    ATTR: 10,
    PARENT: 10,
    CHILDREN: 10,
    CONTENT: 10
}

export const VALIDATORS = {
    TAG: "TAG",
    POSITION: "POSITION",
    ATTR: "ATTR",
    PARENT: "PARENT",
    CHILDREN: "CHILDREN",
    CONTENT: "CONTENT"
}

export const manipulators = {
    "addAttrToParent": addAttrToParent,
    "replaceTag": replaceTag,
    "rotateElements": rotateElements,
}