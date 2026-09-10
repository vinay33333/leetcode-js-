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
var averageOfSubtree = function(root) {
    let res=0;
    function dfs(node){
        if(!node) return [0,0];
        let [ls,lcnt]=dfs(node.left);
        let [rs,rcnt]=dfs(node.right);
        let curr_sum=ls+rs+node.val;
        let curr_cnt=1+lcnt+rcnt;
        if(Math.floor(curr_sum/curr_cnt)===node.val) res++;
        return [curr_sum,curr_cnt];
    }
    dfs(root);
    return res;
};