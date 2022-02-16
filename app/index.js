import { addAttrToParent, changeParentTag } from "./scripts/parents";
import { detectElement } from "./services/elementDetector";
import { getErrorElements, saveErrorInDB } from "./services/storage";
import { rotateElements } from "./scripts/rotateImages";


const elWithError = document.querySelector("img[src='images/5.webp']").parentElement;

saveErrorInDB(elWithError);

const errors = getErrorElements();



errors.forEach(err => {
    detectElement(err);
});



// addAttrToParent(elWithError);
// changeParentTag(elWithError);
rotateElements();








