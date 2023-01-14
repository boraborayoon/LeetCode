/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} baseStr
 * @return {string}
 */
var smallestEquivalentString = function(s1, s2, baseStr) {
    let string={}
    let characters='abcdefghijklmnopqrstuvwxyz'
    
    for(let c of characters){
        string[c]=c
    }
    
    for(let i=0;i<s1.length;i++){
        let ss1=dfs(s1[i])
        let ss2=dfs(s2[i])
        if(ss1===ss2) continue
        if(ss1<ss2) string[ss2]=ss1
        else string[ss1]=ss2
    }
    
    function dfs(x){
        if(string[x]===x) return x
        return string[x]=dfs(string[x])
    }
    
    let result=''
    for(let i=0;i<baseStr.length;i++){
        result+=dfs(baseStr[i])
    }
    return result
};