/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    if(prices.length===1) return 0
    
    const dp = []
    for(let i=0;i<prices.length;i++){
        dp.push([0,0])
    }
    dp[0] = [prices[0]*-1,0]
    dp[1] = [Math.min(prices[0],prices[1])*-1, Math.max(0, prices[1] + dp[0][0])]
    
    for(let i=2;i<prices.length;i++){
        dp[i][0] = Math.max(dp[i-1][0], dp[i-2][1] - prices[i]);
        dp[i][1] = Math.max(dp[i-1][1], dp[i-1][0] + prices[i]);
    }
    let sum=0;
    for(let i=0;i<dp.length;i++){
        let tmp = Math.max(dp[i][0], dp[i][1])
        sum = Math.max(sum, tmp)
    }
    return sum
};