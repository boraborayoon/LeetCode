/**
 * @param {number[][]} grid
 * @return {number}
 */
var uniquePathsIII = function(grid) {
    let row = grid.length;
    let column = grid[0].length;
    
    let directions = [[1,0],[0,1],[-1,0],[0,-1]]
    let non=0;
    let startX,startY;
    
    for(let i=0;i<row;i++){
        for(let j=0;j<column;j++){
            if(grid[i][j]===1){
                startX = i;
                startY = j;
            }else if(grid[i][j]===0){
                non++;
            }
        }
    }
    const compute = (x,y,count)=>{
        if(x>=row || y>= column || x<0 || y<0) return 0
        if(grid[x][y]===-1 || grid[x][y]==='x') return 0
        if(grid[x][y]===2 && count === non+1) return 1
        let res = 0;
        let oldValue = grid[x][y]
        grid[x][y] = 'x'
        for(let [dx,dy] of directions){
            let curRes = compute(x+dx,y+dy,count+1)
            res = curRes+res
        }
        grid[x][y] = oldValue;
        return res;
    }
    return compute(startX,startY,0)
};