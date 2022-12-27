/**
 * @param {number[]} capacity
 * @param {number[]} rocks
 * @param {number} additionalRocks
 * @return {number}
 */
var maximumBags = function(capacity, rocks, additionalRocks) {
    let diff=[];
    let full=0;
    
    for(let i=0;i<capacity.length;i++){
        if(capacity[i]-rocks[i]>=0){
            diff.push(capacity[i]-rocks[i])
        }
    }
    diff.sort((a,b)=>a-b)
    for(let i=0;i<diff.length;i++){
        if(additionalRocks-diff[i]>=0){
            additionalRocks-=diff[i]
            full++;
        }
    }
    return full
    
};