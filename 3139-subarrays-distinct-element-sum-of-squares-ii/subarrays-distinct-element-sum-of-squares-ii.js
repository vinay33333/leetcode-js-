/**
 * @param {number[]} nums
 * @return {number}
 */
var sumCounts = function(nums) {
    const MOD = 10n ** 9n + 7n;
    const n = nums.length;
    const countTotal = new Float64Array(4 * n);
    const sqTotal = new Float64Array(4 * n);
    const lazy = new Float64Array(4 * n);
    
    function push(node, l, r) {
        if (lazy[node] !== 0) {
            const x = lazy[node];
            const mid = (l + r) >> 1;
            apply(node * 2, l, mid, x);
            apply(node * 2 + 1, mid + 1, r, x);
            
            lazy[node] = 0;
        }
    }
    
    function apply(node, l, r, x) {
        const len = BigInt(r - l + 1);
        const c = BigInt(countTotal[node]);
        const s = BigInt(sqTotal[node]);
        const bx = BigInt(x);
        
        const newS = (s + 2n * bx * c + len * bx * bx) % MOD;
        const newC = (c + len * bx) % MOD;
        
        sqTotal[node] = Number(newS);
        countTotal[node] = Number(newC);
        lazy[node] += x;
    }
    
    function update(node, l, r, ql, qr) {
        if (ql <= l && r <= qr) {
            apply(node, l, r, 1);
            return;
        }
        push(node, l, r);
        const mid = (l + r) >> 1;
        if (ql <= mid) update(node * 2, l, mid, ql, qr);
        if (qr > mid) update(node * 2 + 1, mid + 1, r, ql, qr);
        
        countTotal[node] = (countTotal[node * 2] + countTotal[node * 2 + 1]) % Number(MOD);
        sqTotal[node] = (sqTotal[node * 2] + sqTotal[node * 2 + 1]) % Number(MOD);
    }
    
    const lastSeen = new Map();
    let totalSum = 0n;
    
    for (let r = 0; r < n; r++) {
        const num = nums[r];
        const lastIdx = lastSeen.has(num) ? lastSeen.get(num) : -1;
        
        update(1, 0, n - 1, lastIdx + 1, r);
        lastSeen.set(num, r);
        
        totalSum = (totalSum + BigInt(sqTotal[1])) % MOD;
    }
    
    return Number(totalSum);
};