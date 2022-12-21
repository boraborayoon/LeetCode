/**
 * @param {number} n
 * @param {number[][]} dislikes
 * @return {boolean}
 */
var possibleBipartition = function(n, dislikes) {
    const graph = makeGraph(n,dislikes)
    const isVisited = new Array(n+1).fill(-1)
    
    for(let i=1;i<=n ; i++){
        if(isVisited[i]===-1){
            if(!dfs(i,1)) return false
        }
    }
    function dfs(curr, curColor){
        if(isVisited[curr]!==-1) return isVisited[curr] === curColor
        isVisited[curr] = curColor
        for(let i=0;i<graph[curr].length;i++){
            if(!dfs(graph[curr][i],1 -curColor)) return false
        }
        return true
    }
    return true
};
function makeGraph(n,edges){
    const arr = Array.from({length:n+1},()=>[])
    for(let [src,dest] of edges){
        arr[src].push(dest)
        arr[dest].push(src)
    }
    return arr
}