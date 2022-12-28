/**
 * @param {number[]} piles
 * @param {number} k
 * @return {number}
 */
var minStoneSum = function(piles, k) {
    let sum =0;
    let element;
    let half;
    
    const pq = new MaxPriorityQueue({priority: (bid) => bid})
    
    for(let i=0;i<piles.length;i++){
        sum+=piles[i]
        pq.enqueue(piles[i])
    }
    
    for(let i=0;i<k;i++){
        element = pq.dequeue().element;
        half = Math.floor(element/2)
        sum-=half;
        pq.enqueue(element - half)
    }
    
    return sum
};