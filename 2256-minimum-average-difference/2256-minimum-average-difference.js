/**
 * @param {number[]} nums
 * @return {number}
 */
var minimumAverageDifference = function(nums) {
    let max = Number.MAX_SAFE_INTEGER;
    const n = nums.length
    
    let toSum = nums.reduce((acc,curr)=>acc+curr,0)
    let leftSum = 0;
    let minIdx = -1;
    let minDiff = max;
    
    for(let i=0;i<n;i++){
        let currNum = nums[i]
        leftSum+=currNum;
        toSum-=currNum;
        
        let leftSize=i+1;
        let rightSize = n-i-1;
        
        let leftAvg=Math.floor(leftSum/leftSize)
        let rightAvg=rightSize===0? 0:Math.floor(toSum/rightSize)
        
        let absDiff = Math.abs(leftAvg-rightAvg)
        
        if(absDiff<minDiff){
            minIdx=i;
            minDiff=absDiff;
        }
    }
    return minIdx
};