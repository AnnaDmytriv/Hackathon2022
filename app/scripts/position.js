export const samePosition = (oldEl) => {
    const className = oldEl.getAttribute("class");

    const galleryDivs = document.querySelectorAll("#gallery>div");
    let index = 0;
    let flag = false;
    while(!flag){
        if(galleryDivs[index].querySelector(`[class='${className}']`)){
            flag = true;
        }else{
        index++;
        }
    }

    const allEls = document.querySelectorAll(".name");

    const temp = allEls[index];
    allEls[index].parentElement.outerHTML = oldEl.outerHTML;
    // oldEl.outerHTML = temp.parentElement.outerHTML;

}