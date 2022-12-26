/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    const map = new Map()
    return moveJump(0)
    
    
    function moveJump(num){
        if(map.has(num)) return map.get(num)
        
        if(num>=nums.length) return false
        if(num===nums.length-1) return true
        
        for(let i=1;i<=nums[num];i++){
            if(num+i < nums.length && moveJump(num+i)){
                return true
            }
        }
        map.set(num,false)
        return false
    }
};