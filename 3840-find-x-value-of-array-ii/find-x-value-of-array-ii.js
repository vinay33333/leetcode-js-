/**
 * @param {number[]} nums
 * @param {number} k
 * @param {number[][]} queries
 * @return {number[]}
 */
var resultArray = function(nums, k, queries) {
    const n = nums.length;
    for (let i = 0; i < n; i++) {
        nums[i] %= k;
    }
    for (let i = 0; i < queries.length; i++) {
        queries[i][1] %= k;
    }

    // Segment tree arrays stored flatly to avoid object overhead
    // treeProd[node] stores the product modulo k for the segment
    const treeProd = new Int32Array(4 * n);
    // treeRemain[node * k + r] stores the count of prefix products with remainder r
    const treeRemain = new Int32Array(4 * n * k);

    function merge(leftNode, rightNode, destNode) {
        const leftProd = treeProd[leftNode];
        const rightProd = treeProd[rightNode];
        treeProd[destNode] = (leftProd * rightProd) % k;

        const destOffset = destNode * k;
        const leftOffset = leftNode * k;
        const rightOffset = rightNode * k;

        for (let i = 0; i < k; i++) {
            treeRemain[destOffset + i] = treeRemain[leftOffset + i];
        }
        for (let i = 0; i < k; i++) {
            const idx = (i * leftProd) % k;
            treeRemain[destOffset + idx] += treeRemain[rightOffset + i];
        }
    }

    function build(cur, left, right) {
        if (left === right) {
            treeProd[cur] = nums[left];
            treeRemain[cur * k + nums[left]] = 1;
            return;
        }
        const mid = (left + right) >> 1;
        const leftChild = 2 * cur + 1;
        const rightChild = 2 * cur + 2;
        build(leftChild, left, mid);
        build(rightChild, mid + 1, right);
        merge(leftChild, rightChild, cur);
    }

    build(0, 0, n - 1);

    function update(treeIndex, lo, hi, i, val) {
        if (lo === hi) {
            const offset = treeIndex * k;
            for (let j = 0; j < k; j++) treeRemain[offset + j] = 0;
            treeRemain[offset + val] = 1;
            treeProd[treeIndex] = val;
            return;
        }
        const mid = (lo + hi) >> 1;
        const leftChild = 2 * treeIndex + 1;
        const rightChild = 2 * treeIndex + 2;
        if (i <= mid) {
            update(leftChild, lo, mid, i, val);
        } else {
            update(rightChild, mid + 1, hi, i, val);
        }
        merge(leftChild, rightChild, treeIndex);
    }

    // Temporary node storage for queries to avoid allocations
    const qProd = new Int32Array(1);
    const qRemain = new Int32Array(k);
    const tempRemain = new Int32Array(k);

    function query(treeIndex, lo, hi, i, j) {
        if (i <= lo && hi <= j) {
            qProd[0] = treeProd[treeIndex];
            const offset = treeIndex * k;
            for (let r = 0; r < k; r++) {
                qRemain[r] = treeRemain[offset + r];
            }
            return;
        }
        const mid = (lo + hi) >> 1;
        const leftChild = 2 * treeIndex + 1;
        const rightChild = 2 * treeIndex + 2;

        if (j <= mid) {
            query(leftChild, lo, mid, i, j);
        } else if (i > mid) {
            query(rightChild, mid + 1, hi, i, j);
        } else {
            query(leftChild, lo, mid, i, j);
            const lProd = qProd[0];
            for (let r = 0; r < k; r++) tempRemain[r] = qRemain[r];

            query(rightChild, mid + 1, hi, i, j);
            const rProd = qProd[0];
            
            qProd[0] = (lProd * rProd) % k;
            for (let r = 0; r < k; r++) {
                const leftVal = tempRemain[r];
                const rightVal = qRemain[i]; // placeholder, corrected below:
            }
            // Proper combination for overlapping split queries
            const combinedRemain = new Int32Array(k);
            for (let r = 0; r < k; r++) combinedRemain[r] = tempRemain[r];
            for (let r = 0; r < k; r++) {
                const idx = (r * lProd) % k;
                combinedRemain[idx] += qRemain[r];
            }
            for (let r = 0; r < k; r++) qRemain[r] = combinedRemain[r];
        }
    }

    const ans = [];
    for (const q of queries) {
        const [index, value, start, x] = q;
        update(0, 0, n - 1, index, value);
        query(0, 0, n - 1, start, n - 1);
        ans.push(qRemain[x]);
    }

    return ans;
};