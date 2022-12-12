/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function(n) {
    let result=[0,1,2]
    for(let i=3;i<=n;i++){
        result[i]=result[i-2]+result[i-1]
    }
    
    return result[n]
};
    