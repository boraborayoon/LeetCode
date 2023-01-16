/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval)
    intervals.sort((a,b)=> a[0]-b[0])
    
    let result= [intervals[0]]
    
    for(let i=1;i<intervals.length;i++){
        if(result[result.length-1][1] >= intervals[i][0]){
            result[result.length-1][1] = Math.max(result[result.length-1][1], intervals[i][1])
        }else{
            result.push(intervals[i])
        }
    }
    return result
};