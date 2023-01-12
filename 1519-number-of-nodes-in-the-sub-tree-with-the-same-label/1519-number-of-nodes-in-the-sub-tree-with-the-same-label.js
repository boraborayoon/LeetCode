/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @return {number[]}
 */
var countSubTrees = function(n, edges, labels) {
    const adj = [];
    
    for(let i=0;i<n;i++){
        adj[i]=[]
    }
    
    for(const [m,n] of edges){
        adj[m].push(n)
        adj[n].push(m)
    }
    
    const count = new Array(n).fill(0)
    
    dfs(0,-1)
    
    return count
    
    
    function dfs(node, parent){
        const label = labels.charCodeAt(node)-97
        const charCount = new Array(26).fill(0)
        charCount[label]=1;
        
        for(let child of adj[node]){
            if(child === parent) continue;
            const subCount = dfs(child,node)
            for(let i=0;i<26;i++){
                charCount[i]+=subCount[i]
            }
        }
        count[node]=charCount[label]
        return charCount
    }
};
