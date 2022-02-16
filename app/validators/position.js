export const getPositionScore = (currEl, oldEl)=>{
    
    const bodyRect = document.body.getBoundingClientRect();
    const elmRect = currEl.getBoundingClientRect();
    const currX = elmRect.left - bodyRect.left;
    const currY = elmRect.top - bodyRect.top;
    
    const yDiff = Math.abs(currY - oldEl.absY);
    const xDiff = Math.abs(currX - oldEl.absX);

    let score;
    if(currX == oldEl.absX && currY == oldEl.absY){
        score = 10;
    }else if(currX == oldEl.absX && currY != oldEl.absY){
       score = yDiff > 200 ? 2 : 7;  
    }else if(currX != oldEl.absX && currY == oldEl.absY){
        score = xDiff > 200 ? 2 : 7;  
    }else{
        score = xDiff > 500 && yDiff > 500 ? 0 : 2; 
    }

    return score;
}