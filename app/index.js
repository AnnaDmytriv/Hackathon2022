import { addAttrToParent } from './scripts/parents';
import { detectElement } from './services/elementDetector';
import { getErrorElements, saveErrorInDB } from './services/storage';
import { manipulators } from './shared/consts';
import { samePosition } from './scripts/position';

const elWithError = document.querySelector(
  "img[src='images/5.webp']"
).parentElement;

saveErrorInDB(elWithError);

const errors = getErrorElements();

errors.forEach((err) => {
  detectElement(err);
});

function manipulateDom(manipulation) {
  elWithError;
  manipulators[manipulation](elWithError);

  errors.forEach((err) => {
    detectElement(err);
  });

  console.log(
    'please refresh'
  );
}

window._HACKATHON = manipulateDom;
console.log(
  'window._HACKATHON("addAttrToParent") || window._HACKATHON("replaceTag") || window._HACKATHON("rotateElements") || window._HACKATHON("changeChildrenText")'
);
