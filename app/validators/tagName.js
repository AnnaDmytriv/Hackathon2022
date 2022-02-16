export const getTagNameScore = (el1, el2) => {

    const currTagName = el1.tagName;
    const oldTagName = el2.tagName;

    let score;

    if (currTagName == oldTagName) {
        score = 10;
    } else if (currTagName == "DIV" && oldTagName == "SPAN" || currTagName == "SPAN" && oldTagName == "DIV") {
        score = 7;
    } else if (currTagName == "LINK" && oldTagName == "BUTTON" || currTagName == "BUTTON" && oldTagName == "LINK") {
        score = 5;
    } else {
        score = 0;
        
    }

    return score;
}
