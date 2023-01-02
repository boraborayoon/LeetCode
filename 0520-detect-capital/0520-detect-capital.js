/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    let rest = word.substring(1)
    
    if(word===word.toLowerCase()){
        return true
    }else if(word===word.toUpperCase()){
        return true
    }else if(word[0]===word[0].toUpperCase() && rest===rest.toLowerCase()){
        return true
    }else{
        return false
    }
}