/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function(tokens) {
  let stack = [];
    
    for(let i=0;i<tokens.length;i++){
        if(Number(tokens[i]) || tokens[i]==='0'){
            stack.push(tokens[i])
        }else{
            let num1=Number(stack.pop())
            let num2=Number(stack.pop())
            if(tokens[i]==='+'){
                stack.push(String(num1+num2))
            }
            else if(tokens[i]==='-'){
                stack.push(String(num2-num1))
            }
            else if(tokens[i]==='*'){
                stack.push(String(num1*num2))
            }
            else{
                if(num1===0 || num2===0){
                    stack.push("0")
                }
                else if(num2/num1>0){
                    stack.push(String(Math.floor(num2/num1)))
                }
                else{
                    stack.push(String(Math.ceil(num2/num1)))
                }
            }
        }
    }
    return Number(stack[0])
};