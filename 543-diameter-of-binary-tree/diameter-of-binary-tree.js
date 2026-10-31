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
    let res=0;
    function h_fun(root){
        if(root===null) return 0;
        let l=h_fun(root.left);
        let r=h_fun(root.right);
        res=Math.max(res,l+r);
        return Math.max(l,r)+1;
    }
    h_fun(root);
    return res;
    
};