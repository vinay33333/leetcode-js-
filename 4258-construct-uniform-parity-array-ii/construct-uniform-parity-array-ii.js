/**
 * @param {number[]} nums1
 * @return {boolean}
 */
var uniformArray = function(nums1) {
    let minOdd = Number.MAX_SAFE_INTEGER;
    
    // Find the minimum odd number in the array
    for (const x of nums1) {
        if (x % 2 === 1) {
            minOdd = Math.min(minOdd, x);
        }
    }
    
    // Check if any even number is strictly less than the minimum odd number
    for (const x of nums1) {
        if (x % 2 === 0 && minOdd !== Number.MAX_SAFE_INTEGER && x < minOdd) {
            return false;
        }
    }
    
    return true;
};