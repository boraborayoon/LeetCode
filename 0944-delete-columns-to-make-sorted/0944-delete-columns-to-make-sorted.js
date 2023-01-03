/**
 * @param {string[]} strs
 * @return {number}
 */
var minDeletionSize = function(strs) {
    let count=0;
    
    for(let i=0;i<strs[0].length;i++){
        let tmp=0
        for(let j=0;j<strs.length;j++){
            let curChar=strs[j][i]

                if(tmp>curChar.charCodeAt(0)){
                    count++;
                    break;
                }else{
                    tmp=curChar.charCodeAt(0)
                }
            
        }
    }
    return count
};