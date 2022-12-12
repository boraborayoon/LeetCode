/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    if(n<4) return n
    
    let memo = [0,1,2,3]
    
    
    for (let i = 4; i < n; i++) {
        memo[i] = memo[i-1]+memo[i-2]
    }
    
    return memo[n-1]+memo[n-2]
};