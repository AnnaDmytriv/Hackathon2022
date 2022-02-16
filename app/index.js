import { addAttrToParent, changeParentTag } from "./scripts/parents";
import { detectElement } from "./services/elementDetector";
import { getErrorElements, saveErrorInDB } from "./services/storage";


const elWithError = document.querySelector("img[src='images/5.webp']").parentElement;

saveErrorInDB(elWithError);

const errors = getErrorElements();

addAttrToParent(elWithError);
changeParentTag(elWithError);

errors.forEach(err => {
    detectElement(err);
});







