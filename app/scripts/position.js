export const samePosition = (oldEl) => {

    // const className = oldEl.attributes.class;
    // const el = document.querySelector(`[class='${className}']`);
 
    // oldEl.style.position = "absolute";
    oldEl.style.left = Math.abs(window.elPostion.x); 
    oldEl.style.top = Math.abs(window.elPostion.y); 

}