import { getNodeAttributes } from "../shared/utils";

export const getAttrsScore = (el, dataObj) => {
  let score = 0;
  const attrs = getNodeAttributes(el);

  score = someAttrNames(attrs, dataObj);

  return score;
};

const someAttrNames = (attrs, dataObj) => {
  let similarAttrsScore = 0;
  let similarAttrsValueScore = 0;
  const { attributes } = dataObj;
  const elAttrCount = Object.keys(attributes).length;
  const subAttrsCount = Object.keys(attrs).length;
  const attrScore = 75 / subAttrsCount;
  const classScore = 25 / subAttrsCount;
  

  if (subAttrsCount !== elAttrCount && (elAttrCount === 0 || subAttrsCount === 0)) {
    return 0;
  }

  const maxScore = attrScore * subAttrsCount + classScore * subAttrsCount;

  for (const key in attributes) {
    if (Object.hasOwnProperty.call(attributes, key)) {
      const scoreToAdd = key === 'class' ? classScore : attrScore;
      const value = attributes[key];
      if (key in attrs) { // has same attribute name
        if(attrs[key] === value){ // has same attribute value
          similarAttrsValueScore += scoreToAdd;
        }
        similarAttrsScore += scoreToAdd;
      }
    }
  }

  return (similarAttrsScore + similarAttrsValueScore) / maxScore;
};