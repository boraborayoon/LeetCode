/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function(temperatures) {
    const len = temperatures.length
    const answer = new Array(len).fill(0)
    const stack = [];
    
    for(let i=0;i<len;i++){
        while(stack.length && temperatures[stack.at(-1)] < temperatures[i]){
            const current = stack.pop()
            answer[current] = i - current
        }
        stack.push(i)
    }
    return answer
};