/**
 * @param {number[][]} matrix
 * @return {number}
 */
var minFallingPathSum = function(matrix) {
    let sum = Number.MAX_SAFE_INTEGER;
    const dp = {};
    
    
    function dfs(round,col){
        const key = [round,col].join()
        if(key in dp) return dp[key]
        if(round === matrix.length) return 0
        if(col >= matrix.length || col< 0) return Number.MAX_SAFE_INTEGER
        
        const res = matrix[round][col] + Math.min(dfs(round+1,col),dfs(round+1,col-1),dfs(round+1, col+1))
        
        dp[key]=res
        
        return res
    }
    
    for(let i=0;i<matrix.length;i++){
        sum = Math.min(sum, dfs(0,i))
    }
    
    return sum
};