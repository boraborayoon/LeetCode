/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var preorderTraversal = function(root) {
    const result=[]
    const stack=[];
    let node = root;
    while(node!==null || stack.length!==0){
        if(node==null){
            node=stack.pop()
        }
        result.push(node.val)
        if(node.right){
            stack.push(node.right)
        }
        node=node.left
    }
    return result
    
};