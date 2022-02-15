const getAttrsScore = (el, dataObj) => {
  let score = 0;
  const attrs = element.attributes ? [...element.attributes] : [];

  score = someAttrNames(attrs, dataObj);

  return score;
};

const someAttrNames = (attrs, dataObj) => {
  let similarAttrsScore;
  let similarAttrsValueScore;
  const attrScore = 50 / attrs.length;
  const { attributes } = dataObj;

  attrs.forEach((attr) => {
    if (dataObj.attributes.findIndex(attr)) {
      if (sameAttrValue(attr, attributes[idx])) {
        similarAttrsValueScore += attrScore;
      }
      similarAttrsScore += attrScore;
    }
  });

  return similarAttrsScore + similarAttrsValueScore;
};

const sameAttrValue = (attr1, attr2) => {
  return attr1.value === attr2.value;
};
