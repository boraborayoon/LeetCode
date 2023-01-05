/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
    const n = points.length
    let count = 1
    
    if(n===0) return 0
    if(n===1) return 1
    
    points.sort((a,b)=>a[1]-b[1])
    
    let pointer=0;
    for(let i=1;i<n;i++){
        if(points[pointer][1]>=points[i][0]) continue
        else{
            pointer=i
            count++
        }
    }
    
    return count
};