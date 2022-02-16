export function getNodeAttributes(element, isSVG = false) {
    const attributes = element.attributes ? [...element.attributes] : [];
    const attr = {};
    attributes.forEach(({ nodeName, nodeValue }) => {
        attr[nodeName] = nodeValue;
    });
    return attr;
}

export function replaceTag(el){
    var p = document.createElement('p');
    const attrs = getNodeAttributes(el);
    for (const attr in attrs) {
            const value = attrs[attr];
            if(attr !== "border") p.setAttribute(attr, value);
            
    }
  // move all elements in the other container.
  while(el.firstChild) {
      p.appendChild(el.firstChild);
  }

  const parent = el.parentElement;
  el.replaceWith(p);
}