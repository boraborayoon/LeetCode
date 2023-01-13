/**
 * @param {number[]} parent
 * @param {string} s
 * @return {number}
 */
var longestPath = function(parent, s) {
    const n = parent.length;
    const adjList = Array.from(Array(n), ()=>new Array());
    for(let i = 0; i < n; i++){
        if(parent[i] === -1) continue;
        adjList[parent[i]].push(i);
    }
    let altPath = 0;
    const memo = {};
    
    let ans = Number.MIN_SAFE_INTEGER;

    for(let i = 0; i < n; i++){
        ans = Math.max(ans, dfs(i));
    }
    
    function dfs (i){
        if(memo[i]!=null){
            return memo[i];
        }
        let max1 = 0
        let max2 = 0;
        for(const j of adjList[i]){
            if(s[i] == s[j]) continue;
            const next = dfs(j);
            if(next > max1){
                max2 = max1;
                max1 = next;
            }else if(next > max2){
                max2 = next;
            }
        }
        if(!max1){
            return memo[i] = 1;
        }else if(max1 && !max2){
            return memo[i] = max1 + 1; 
        }else{
            altPath = Math.max(altPath, 1 + max1 + max2);
            return memo[i] = 1 + Math.max(max1, max2);
        }
    };
    
    return Math.max(altPath, ans)
};