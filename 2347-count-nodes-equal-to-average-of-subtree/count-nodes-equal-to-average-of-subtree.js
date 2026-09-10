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
    function dfs_alg(node){
        if(!node) return [0,0];
        let [l_sum , l_cnt] =dfs_alg(node.left);
        let [r_sum,r_cnt]=dfs_alg(node.right); 
        let curr_sum=l_sum+r_sum+node.val;
        let curr_cnt=l_cnt+r_cnt+1;
        if(Math.floor(curr_sum /curr_cnt)===node.val){
            res=res+1;
        }
        return [curr_sum,curr_cnt];
    }
    dfs_alg(root);
    return res;
};