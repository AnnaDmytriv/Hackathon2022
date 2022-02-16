import { addAttrToParent } from "./scripts/parents";
import { samePosition } from "./scripts/position";
import { changeTagName } from "./scripts/tagName";
import { detectElement } from "./services/elementDetector";
import { getErrorElements, saveErrorInDB } from "./services/storage";


const elWithError = document.querySelector("img[src='images/5.webp']").parentElement;


saveErrorInDB(elWithError);


const errors = getErrorElements(); 

//addAttrToParent(elWithError);

//changeTagName(elWithError);

errors.forEach(err => {
    detectElement(err);
});







