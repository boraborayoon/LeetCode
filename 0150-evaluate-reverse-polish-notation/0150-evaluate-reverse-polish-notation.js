/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
    let stack = [];
    
    for(let i=0;i<tokens.length;i++){
        if(tokens[i]==='+'){
            let num1=+stack.pop()
            let num2=+stack.pop()
            stack.push(num1+num2)
        }
        else if(tokens[i]==='-'){
            let num1=+stack.pop()
            let num2=+stack.pop()
            stack.push(num2-num1)
        }
        else if(tokens[i]==='*'){
            let num1=+stack.pop()
            let num2=+stack.pop()
            stack.push(num1*num2)
        }
        else if(tokens[i]==='/'){
            let num1=+stack.pop()
            let num2=+stack.pop()
            stack.push(Math.trunc(num2/num1))
        }
        else{
            stack.push(tokens[i])
        }
    }
    return stack[0]
};