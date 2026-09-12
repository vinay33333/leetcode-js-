/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
/**
 * @param {number[][]} intervals
 * @return {number[]}
 */
var maximumWeight = function(intervals) {
    const n = intervals.length;
    // Map intervals to include their original indices
    const arr = intervals.map((x, i) => [x[0], x[1], x[2], i]);
    
    // Sort by start time to facilitate binary search for next non-overlapping interval
    arr.sort((a, b) => a[0] - b[0]);

    // Precompute binary search targets: for each interval i, find the first interval j whose start > arr[i][1]
    const nextIdx = new Int32Array(n);
    for (let i = 0; i < n; i++) {
        let low = i + 1, high = n, idx = n;
        const target = arr[i][1];
        while (low < high) {
            let mid = (low + high) >> 1;
            if (arr[mid][0] > target) {
                idx = mid;
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        nextIdx[i] = idx;
    }

    // Memoization table: memo[i][quota] = {weight, selected_indices_array}
    const memo = Array.from({ length: n }, () => Array(5).fill(null));

    function solve(i, quota) {
        if (quota === 0 || i === n) {
            return { weight: 0, indices: [] };
        }
        if (memo[i][quota] !== null) {
            return memo[i][quota];
        }

        // Option 1: Skip current interval
        const skip = solve(i + 1, quota);

        // Option 2: Take current interval
        const nextIntervalIndex = nextIdx[i];
        const nextRes = solve(nextIntervalIndex, quota - 1);
        
        const takeWeight = arr[i][2] + nextRes.weight;
        // Construct new indices array and keep it sorted
        const takeIndices = [...nextRes.indices, arr[i][3]];
        takeIndices.sort((a, b) => a - b);

        let chosen;
        if (takeWeight > skip.weight) {
            chosen = { weight: takeWeight, indices: takeIndices };
        } else if (takeWeight < skip.weight) {
            chosen = skip;
        } else {
            // Weights are equal: pick the lexicographically smaller index array
            if (isLexicographicallySmaller(takeIndices, skip.indices)) {
                chosen = { weight: takeWeight, indices: takeIndices };
            } else {
                chosen = skip;
            }
        }

        return memo[i][quota] = chosen;
    }

    function isLexicographicallySmaller(arr1, arr2) {
        for (let i = 0; i < Math.min(arr1.length, arr2.length); i++) {
            if (arr1[i] !== arr2[i]) return arr1[i] < arr2[i];
        }
        return arr1.length < arr2.length;
    }

    const result = solve(0, 4);
    return result.indices;
};