
/**
 * @param {number[]} nums
 * @param {number} x
 * @param {number} k
 * @return {number}
 */
var minOperations = function(nums, x, k) {
    const n = nums.length;

    const vals = [...new Set(nums)].sort((a, b) => a - b);
    const m = vals.length;

    const getIndex = new Map();
    for (let i = 0; i < m; i++) {
        getIndex.set(vals[i], i + 1);
    }

    class Fenwick {
        constructor(n) {
            this.n = n;
            this.tree = new Float64Array(n + 1);
        }

        update(i, val) {
            while (i <= this.n) {
                this.tree[i] += val;
                i += i & -i;
            }
        }

        query(i) {
            let sum = 0;

            while (i > 0) {
                sum += this.tree[i];
                i -= i & -i;
            }

            return sum;
        }

        kth(k) {
            let idx = 0;

            for (let bit = 1 << Math.floor(Math.log2(this.n)); bit > 0; bit >>= 1) {
                let next = idx + bit;

                if (next <= this.n && this.tree[next] < k) {
                    idx = next;
                    k -= this.tree[next];
                }
            }

            return idx + 1;
        }
    }

    const countTree = new Fenwick(m);
    const sumTree = new Fenwick(m);

    const costs = new Array(n - x + 1);

    let windowSum = 0;

    function add(val, delta) {
        const idx = getIndex.get(val);

        countTree.update(idx, delta);
        sumTree.update(idx, val * delta);
    }

    for (let i = 0; i < x; i++) {
        add(nums[i], 1);
        windowSum += nums[i];
    }

    function calculateCost() {
        const medianIndex = countTree.kth(Math.ceil(x / 2));
        const median = vals[medianIndex - 1];

        const leftCount = countTree.query(medianIndex);
        const leftSum = sumTree.query(medianIndex);

        const rightCount = x - leftCount;
        const rightSum = windowSum - leftSum;

        return median * leftCount - leftSum
             + rightSum - median * rightCount;
    }

    for (let i = 0; i <= n - x; i++) {
        costs[i] = calculateCost();

        if (i < n - x) {
            add(nums[i], -1);
            windowSum -= nums[i];

            add(nums[i + x], 1);
            windowSum += nums[i + x];
        }
    }

    const INF = Infinity;

    let prev = new Array(n + 1).fill(0);

    for (let c = 1; c <= k; c++) {
        const curr = new Array(n + 1).fill(INF);

        for (let i = c * x; i <= n; i++) {
            const skip = curr[i - 1];
            const take = prev[i - x] + costs[i - x];

            curr[i] = Math.min(skip, take);
        }

        prev = curr;
    }

    return prev[n];
};
