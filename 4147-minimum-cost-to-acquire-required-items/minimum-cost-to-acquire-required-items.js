/**
 * @param {number} cost1
 * @param {number} cost2
 * @param {number} costBoth
 * @param {number} need1
 * @param {number} need2
 * @return {number}
 */
var minimumCost = function(cost1, cost2, costBoth, need1, need2) {
    let final_cost=0;
    if(cost1+cost2 <= costBoth){
        final_cost=cost1*need1 + cost2*need2;
    }else {
        let c3=Math.min(need1,need2);
        final_cost=c3*costBoth;
        need1=need1-c3;
        need2=need2-c3;
    if(need1>0){
        final_cost=final_cost+need1*Math.min(cost1,costBoth);
    }else if(need2>0){
        final_cost=final_cost+need2*Math.min(cost2,costBoth);
    }}
    return final_cost;
};