export const getPOsitionScore = (currPosition, oldPosition)=>{
    
    let score;
    const yDiff = Math.abs(currPosition.absY - oldPosition.absY);
    const xDiff = Math.abs(currPosition.absX - oldPosition.absX);

    if(currPosition.absX == oldPosition.absX && currPosition.absY == oldPosition.absY){
        score = 10;
    }else if(currPosition.absX == oldPosition.absX && currPosition.absY != oldPosition.absY){
       score = yDiff > 200 ? 2 : 7;  
    }else if(currPosition.absX != oldPosition.absX && currPosition.absY == oldPosition.absY){
        score = xDiff > 200 ? 2 : 7;  
    }else{
        score = xDiff > 500 && yDiff > 500 ? 0 : 2; 
    }

    return score;
}