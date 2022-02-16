export function getNodeAttributes(element, isSVG = false) {
    const attributes = element.attributes ? [...element.attributes] : [];
    const attr = {};
    attributes.forEach(({ nodeName, nodeValue }) => {
        attr[nodeName] = nodeValue;
    });
    return attr;
}