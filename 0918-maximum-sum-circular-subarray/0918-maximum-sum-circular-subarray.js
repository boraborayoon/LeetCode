/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubarraySumCircular = function(nums) {
    let n = nums.length;
    
    let curr = nums[0]
    let ans = nums[0]
    
    for(let i=1;i<n;i++){
        curr=nums[i]+Math.max(0,curr)
        ans=Math.max(ans,curr)
    }
    
    let rightSum = new Array(n)
    
    rightSum[n-1]=nums[n-1]
    
    for(let i=n-2;i>=0;i--){
        rightSum[i]=rightSum[i+1]+nums[i]
    }
    
    let maxRightSum = new Array(n)
    
    maxRightSum[n-1]=rightSum[n-1]
    
    for(let i=n-2;i>=0;i--){
        maxRightSum[i]=Math.max(maxRightSum[i+1], rightSum[i])
    }
    
    let leftSum=0;
    for(let i=0;i<n-2;i++){
        leftSum+=nums[i]
        ans=Math.max(ans,leftSum+maxRightSum[i+2])
    }
    return ans
    
};