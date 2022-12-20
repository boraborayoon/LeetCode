/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let stack = [];
    let isVisited={0:true}
    
    stack.push(...rooms[0])
    while(stack.length>0){
        let nextVisit = stack.pop()
        if(!isVisited[nextVisit]){
            stack.push(...rooms[nextVisit])
            isVisited[nextVisit] = true
        }
    }

    return Object.keys(isVisited).length === rooms.length
};