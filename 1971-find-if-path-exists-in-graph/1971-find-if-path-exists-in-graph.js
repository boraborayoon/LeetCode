/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} source
 * @param {number} destination
 * @return {boolean}
 */
var validPath = function(n, edges, source, destination) {
    const graph = {}
    edges.forEach(([a,b])=>{
        if(!graph[a]){
            graph[a]=[b]
        }else{
            graph[a].push(b)
        }
        if(!graph[b]){
            graph[b]=[a]
        }else{
            graph[b].push(a)
        }
    })
    
    const isVisited = new Array(n).fill(false)
    const queue = [source]
    
    while(queue.length>0){
        const current = queue.shift()
        if(current === destination) return true
        isVisited[current] = true
        graph[current].forEach((neigh)=>{
            if(!isVisited[neigh]){
                queue.push(neigh)
            }
        })
    }
    return false
};
