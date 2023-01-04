/**
 * @param {number[]} tasks
 * @return {number}
 */
var minimumRounds = function(tasks) {
    let obj={}
    for(let i=0;i<tasks.length;i++){
        if(!obj[tasks[i]]){
            obj[tasks[i]]=0;
        }
        obj[tasks[i]]=obj[tasks[i]]+1;
    }
    let result=0
    let arr = Object.values(obj)
    
    for(let i=0;i<arr.length;i++){
        if(arr[i]<2){
            return -1
        }
        let temp=0;
        while(arr[i]>3){
            arr[i]-=3
            temp++
        }
        if(arr[i]) temp++
        result+=temp
    }
    
    return result
};