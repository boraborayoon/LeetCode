/**
 * @param {number[]} nums
 * @param {number[]} queries
 * @return {number[]}
 */
var answerQueries = function(nums, queries) {
    nums.sort((a,b)=>a-b)
    let answer = [];
    
    for(let val of queries){
        let sum=0;
        let arr = [];
        
        for(let ele of nums){
            sum+=ele;
            if(sum <= val){
                arr.push(ele)
            }else{
                break;
            }
        }
        answer.push(arr.length)
    }
    return answer
};