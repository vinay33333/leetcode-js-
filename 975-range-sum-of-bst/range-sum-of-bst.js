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
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var rangeSumBST = function(root, low, high) {
    if(root===null) return 0;
    let s=0;
    if(root.val > low){
        s+=rangeSumBST(root.left,low,high);
    }
    if(root.val <high){
        s+=rangeSumBST(root.right,low,high);
    }
    if(root.val>=low&&root.val<=high){
        s=s+root.val;
    }
    return s;
};