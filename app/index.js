import { addAttrToParent, changeParentTag } from './scripts/parents';
import { detectElement } from './services/elementDetector';
import { getErrorElements, saveErrorInDB } from './services/storage';
import { rotateElements } from './scripts/rotateImages';
import { manipulators } from './shared/consts';

const elWithError = document.querySelector(
  "img[src='images/5.webp']"
).parentElement;


saveErrorInDB(elWithError);
const errors = getErrorElements();
errors.forEach((err) => {
  detectElement(err);
});

function manipulateDom(manipulation) {
  const originalElem = elWithError;
  manipulators[manipulation](originalElem);

  errors.forEach((err) => {
    detectElement(err);
  });

  console.log(
    'window._HACKATHON("addAttrToParent") || window._HACKATHON("changeParentTag") || window._HACKATHON("rotateElements")'
  );
}

window._HACKATHON = manipulateDom;
console.log(
  'window._HACKATHON("addAttrToParent") || window._HACKATHON("replaceTag") || window._HACKATHON("rotateElements")'
);
