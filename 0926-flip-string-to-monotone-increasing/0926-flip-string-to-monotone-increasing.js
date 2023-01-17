/**
 * @param {string} s
 * @return {number}
 */
var minFlipsMonoIncr = function(s) {
    let zero = 0;
    let one = 0;
    let min = s.length+1;
    
    for(let i=1; i<s.length; i++){
        if(s[i-1] === '1'){
            one++
        }
    }
    min = Math.min(min , one)
    for(let i=s.length - 2; i>=0; i--){
        if(s[i+1] === '0'){
            zero++
        }
        if(s[i] === '1'){
            one--
        }
        min = Math.min(min , zero + one)
    }
    return min
};