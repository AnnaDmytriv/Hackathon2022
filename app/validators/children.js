const getChildrenScore = (el, dataObj) => {
  let score = 0;
  const currentChildren = el.children.length;
  const { children } = dataObj;
  if (children === currentChildren) {
    return 100;
  }

  if (children > 0 && currentChildren === 0) {
    return 0;
  }

  return score;
};
