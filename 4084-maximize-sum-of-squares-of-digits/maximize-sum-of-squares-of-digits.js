/**
 * @param {number} num
 * @param {number} sum
 * @return {string}
 */
var maxSumOfSquares = function(num, sum) {
    if (sum < 0 || num * 9 < sum) {
        return "";
    }
    
    const result = new Array(num).fill(0);
    
    for (let i = 0; i < num; i++) {
        const val = Math.min(9, sum);
        result[i] = val;
        sum -= val;
    }
    
    return result.join('');
};