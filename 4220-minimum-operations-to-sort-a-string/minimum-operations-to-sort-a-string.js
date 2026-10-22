/**
 * @param {string} s
 * @return {number}
 */
var minOperations = function(s) {
    const n = s.length;
    let sorted = true;
    
    // Check if the string is already sorted
    for (let i = 1; i < n; i++) {
        if (s[i] < s[i - 1]) {
            sorted = false;
            break;
        }
    }
    
    if (sorted) {
        return 0;
    }
    
    // If length is 2 and not sorted, it's impossible
    if (n === 2) {
        return -1;
    }
    
    // Find min and max characters
    let mn = s[0];
    let mx = s[0];
    for (let i = 1; i < n; i++) {
        if (s[i] < mn) mn = s[i];
        if (s[i] > mx) mx = s[i];
    }
    
    // If min is at the start or max is at the end, 1 operation is enough
    if (s[0] === mn || s[n - 1] === mx) {
        return 1;
    }
    
    // Check if min or max is in the interior
    for (let i = 1; i < n - 1; i++) {
        if (s[i] === mn || s[i] === mx) {
            return 2;
        }
    }
    
    return 3;
};