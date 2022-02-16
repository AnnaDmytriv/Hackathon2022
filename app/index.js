import { detectElement } from "./services/elementDetector";
import { getErrorElements, saveErrorInDB } from "./services/storage";

saveErrorInDB();

const errors = getErrorElements();

errors.forEach(err => {
    detectElement(err);
});







