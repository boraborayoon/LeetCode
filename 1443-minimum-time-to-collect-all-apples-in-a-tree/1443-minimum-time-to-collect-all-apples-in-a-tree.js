/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {boolean[]} hasApple
 * @return {number}
 */
var minTime = function(n, edges, hasApple) {
    let direction = {}, isVisited ={}
    for(let edge of edges){
        if(!direction[edge[1]]) direction[edge[1]]=[]
        direction[edge[1]].push(edge[0])
        if(!direction[edge[0]]) direction[edge[0]]=[]
        direction[edge[0]].push(edge[1])
    }
    return dfs(0,direction,hasApple,isVisited)
};

function dfs (node,direction,hasApple,isVisited){
    isVisited[node] =true
    let res = 0;
    for(let element of direction[node]){
        if(isVisited[element]) continue
        res+=dfs(element,direction,hasApple,isVisited)
    }
    if((res>0 || hasApple[node]) && node!=0) res+=2
    
    return res
}