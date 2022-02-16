export function getNodeAttributes(element, isSVG = false) {
    const attributes = element.attributes ? [...element.attributes] : [];
    const attr = {};
    let namespace;
    attributes.forEach(({ nodeName, nodeValue }) => {
      attr[nodeName] = nodeValue;
    });
    console.log(attr);
    return attr;
  }