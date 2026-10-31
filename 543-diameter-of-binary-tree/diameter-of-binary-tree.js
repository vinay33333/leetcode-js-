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
var diameterOfBinaryTree = function(root) {
    function h_fun(root){
        if(root===null) return 0;
        let l_h=h_fun(root.left);
        let r_h=h_fun(root.right);
        return Math.max(l_h,r_h)+1;
    }
    if(root===null) return 0;
    let l_n=diameterOfBinaryTree(root.left);
    let r_n=diameterOfBinaryTree(root.right);
    let comb_n=h_fun(root.left)+h_fun(root.right);
    return Math.max(comb_n , Math.max(l_n,r_n));
};