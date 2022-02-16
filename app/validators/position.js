export const getPositionScore = (currEl, oldEl)=>{
    
    const bodyRect = document.body.getBoundingClientRect();
    const elmRect = currEl.getBoundingClientRect();
    const currX = elmRect.left - bodyRect.left;
    const currY = elmRect.top - bodyRect.top;

    const oldX = oldEl.position.x;
    const oldY = oldEl.position.y;
    
    const yDiff = Math.abs(currY - oldY);
    const xDiff = Math.abs(currX - oldX);

    let score;
    if(yDiff < 1 && xDiff < 1){
        score = 100;
    }else if(currX == oldX && currY == oldY){
        score = 100;
    }else if(currX == oldX && currY != oldY){
       score = yDiff > 200 ? 20 : 70;  
    }else if(currX != oldX && currY == oldY){
        score = xDiff > 200 ? 20 : 70;  
    }else{
        score = xDiff > 500 && yDiff > 500 ? 0 : 20; 
    }

    return score;
}