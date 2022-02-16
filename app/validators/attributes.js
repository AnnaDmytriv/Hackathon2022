export const getAttrsScore = (el, dataObj) => {
  let score = 0;
  const attrs = el.attributes ? [...el.attributes] : [];

  score = someAttrNames(attrs, dataObj);

  return score;
};

const someAttrNames = (attrs, dataObj) => {
  let similarAttrsScore;
  let similarAttrsValueScore;
  const attrScore = 75 / attrs.length;
  const classScore = 25 / attrs.length;
  const { attributes } = dataObj;

  const maxScore = attrScore * attrs.length + classScore * attrs.length;

  attrs.forEach((attr, idx) => {
    if (attributes.find(attr)) {
      const scoreToAdd = attr.name === 'class' ? classScore : attrScore;
      similarAttrsScore += classScore;
      if (sameAttrValue(attr, attributes[idx])) {
        similarAttrsValueScore += scoreToAdd;
      }
      similarAttrsScore += scoreToAdd;
    }
  });

  return (similarAttrsScore + similarAttrsValueScore) / maxScore;
};

const sameAttrValue = (attr1, attr2) => {
  return attr1.value === attr2.value;
};
