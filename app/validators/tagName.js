export const getTagNameScore = (currTagName, oldTagName) => {

    let score;

    if (currTagName == oldTagName) {
        score = 100;
    } else if (currTagName == "DIV" && oldTagName == "SPAN" || currTagName == "SPAN" && oldTagName == "DIV") {
        score = 90;
    } else if (currTagName == "DIV" && oldTagName == "BUTTON" || currTagName == "BUTTON" && oldTagName == "DIV") {
        score = 90;
    } else if (currTagName == "LINK" && oldTagName == "BUTTON" || currTagName == "BUTTON" && oldTagName == "LINK") {
        score = 60;
    } else {
        score = 0;
    }

    return score;
}
