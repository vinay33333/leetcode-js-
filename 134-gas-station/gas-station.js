/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let n=gas.length;
    let total_gas=0;
    let total_cost=0;
    for(let i=0;i<n;i++){
        total_gas=total_gas+gas[i];
        total_cost=total_cost+cost[i];
    }
    if(total_cost > total_gas) return -1;
    let start_idx=0;
    let curr_sum=0;
    for(let i=0;i<n;i++){
        curr_sum=curr_sum+gas[i]-cost[i];
        if(curr_sum<0){
            start_idx=i+1;
            curr_sum=0;
        }
    }
    return start_idx;
};