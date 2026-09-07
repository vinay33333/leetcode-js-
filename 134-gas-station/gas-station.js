/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let total_gas=0;
    let total_cost=0;
    let n=gas.length;
    for(let i=0;i<n;i++){
        total_gas=total_gas+gas[i];
        total_cost=total_cost+cost[i];
    }
    if(total_cost > total_gas){
        return -1;
    }
    let curr_sum_gas=0;
    let first_idx=0;
    for(let i=0;i<n;i++){
        curr_sum_gas=curr_sum_gas+gas[i]-cost[i];
        if(curr_sum_gas<0){
            first_idx=i+1;
            curr_sum_gas=0;
        }
    }
    return first_idx;
};