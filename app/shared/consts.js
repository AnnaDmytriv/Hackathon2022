import {addAttrToParent, changeParentTag} from '../scripts/parents'
import {rotateElements} from '../scripts/rotateImages'

export const SCORE = {
    TAG: 50,
    POSITION: 10,
    ATTR: 10,
    PARENT: 10,
    CHILDREN: 10,
    CONTENT: 10
}

export const manipulators = {
    "addAttrToParent": addAttrToParent,
    "changeParentTag": changeParentTag,
    "rotateElements": rotateElements,
}