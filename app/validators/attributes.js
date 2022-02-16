import { getNodeAttributes } from "../domHandler/handler";


export const getAttrsScore = (el, dataObj) => {
  let score = 0;
  const attrs = getNodeAttributes(el);

  score = someAttrNames(attrs, dataObj);

  return score;
};

const someAttrNames = (attrs, dataObj) => {
  let similarAttrsScore = 0;
  let similarAttrsValueScore = 0;
  const attrsCount = Object.keys(attrs).length;
  const attrScore = 75 / attrsCount;
  const classScore = 25 / attrsCount;
  const { attributes } = dataObj;

  const maxScore = attrScore * attrsCount + classScore * attrsCount;

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