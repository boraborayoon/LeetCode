/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    let queue = [];
    let isVisited={0:true}
    

    queue.push(...rooms[0])
    while(queue.length>0){
        let nextVisit = queue.pop()
        if(!isVisited[nextVisit]){
            queue.push(...rooms[nextVisit])
            isVisited[nextVisit] = true
        }
    }

    return Object.keys(isVisited).length === rooms.length
};