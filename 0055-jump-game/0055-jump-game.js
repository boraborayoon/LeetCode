/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    let flag = false;
    
    let numOfSteps = 0;
    
    for(let i=0;i<nums.length;i++){
        if(numOfSteps<0) return false
        if(i===nums.length-1 && numOfSteps>=0){
            flag = true
        }
        numOfSteps=Math.max(nums[i],numOfSteps)
        numOfSteps--;
    }
    return flag
};