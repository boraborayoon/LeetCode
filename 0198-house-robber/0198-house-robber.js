/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length<=2) return Math.max(...nums);
    let n1 = nums[0];
    let n2 = Math.max(n1, nums[1]);
    for(let i=2;i<nums.length ; i++){
        const currentMax = Math.max(n2, n1+nums[i]);
        n1=n2;
        n2=currentMax;
    }
    return n2
};