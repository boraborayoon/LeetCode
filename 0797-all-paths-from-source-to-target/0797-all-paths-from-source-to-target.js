/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    const queue = [[0,[0]]]
    const answer = [];
    
    while(queue.length>0){
        const [n,pathArr] = queue.shift()
        if(n===graph.length-1){
            answer.push(pathArr)
        }
        const neigh = graph[n]
        for(let m of neigh){
            const nPath = [...pathArr,m]
            queue.push([m,nPath])
        }
    }
    return answer
};