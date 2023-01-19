/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraysDivByK = function(nums, k) {
    let count=0
    let map = new Map()
    map.set(0,1)
    
    let subsum=0;
    
    for(let num of nums){
        subsum+=num
        let mod=subsum%k
        mod = mod<0 ? mod+k : mod
        let tmp=map.get(mod)===undefined? 0: map.get(mod)
        
        count+=tmp
        map.set(mod,tmp+1)
    }
    
    return count
};