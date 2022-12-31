/**
 * @param {number[][]} tasks
 * @return {number[]}
 */
var getOrder = function(tasks) {
    tasks = tasks
    .map((task, index) => ({
      startTime: task[0],
      processingTime: task[1],
      index
    }))
    .sort((a, b) => a.startTime - b.startTime)
    
    
    const pq = new MinPriorityQueue({ 
        compare: (a, b) => {
            if (a.processingTime === b.processingTime){
                return a.index - b.index
        } 
        return a.processingTime - b.processingTime
        }
    })
                                   
    let currentTime = 0
    let taskIndex = 0
    const result = []
    
    while(result.length < tasks.length){
        while(taskIndex <tasks.length && tasks[taskIndex].startTime <= currentTime){
            pq.enqueue(tasks[taskIndex])
            taskIndex ++
        }
    
        if(!pq.isEmpty()){
            const bestFit = pq.dequeue()
            result.push(bestFit.index)
            currentTime += bestFit.processingTime
        } else if (taskIndex < tasks.length) {
            currentTime=tasks[taskIndex].startTime
        }
    }
    return result
};