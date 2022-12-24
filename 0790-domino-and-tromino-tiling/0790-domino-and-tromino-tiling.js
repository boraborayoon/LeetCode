/**
 * @param {number} n
 * @return {number}
 */
var numTilings = function(n) {
    const MOD = 10**9+7
    
    if(n<3) return n
    
    const dp = new Array(n+1).fill(0)
    dp[0]=1
    dp[1]=1;
    dp[2]=2;
    
    for(let i=3;i<=n;i++){
        dp[i]= 2 *dp[i-1]%MOD +dp[i-3]%MOD
    }
    
    return dp[n]%MOD
};