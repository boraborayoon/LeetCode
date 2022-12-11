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
 * @return {number}
 */
var maxPathSum = function(root) {
    let max = Number.MIN_SAFE_INTEGER;
    let pathMax = dfs(root)
    
    return Math.max(max,pathMax)
    
    function dfs(node){
        if(!node) return 0
        let left = dfs(node.left)
        let right = dfs(node.right)
        max = Math.max(max, node.val , left+node.val, right+node.val, left+right+node.val)
        return Math.max(node.val, left+node.val, right+node.val)
    }
}