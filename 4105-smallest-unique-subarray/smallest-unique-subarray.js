var smallestUniqueSubarray = function(nums) {
    const n = nums.length;
    const BASE = 100003n;
    const MOD1 = 1000000007n;
    const MOD2 = 1000000009n;

    const pow1 = new Array(n + 1);
    const pow2 = new Array(n + 1);
    pow1[0] = 1n;
    pow2[0] = 1n;

    for (let i = 1; i <= n; i++) {
        pow1[i] = (pow1[i - 1] * BASE) % MOD1;
        pow2[i] = (pow2[i - 1] * BASE) % MOD2;
    }

    const canFindUnique = (len) => {
        let h1 = 0n;
        let h2 = 0n;

        for (let i = 0; i < len; i++) {
            const val = BigInt(nums[i]);
            h1 = (h1 * BASE + val) % MOD1;
            h2 = (h2 * BASE + val) % MOD2;
        }

        const counts = new Map();
        const makeKey = (a, b) => `${a}#${b}`;

        let key = makeKey(h1, h2);
        counts.set(key, 1);

        for (let i = len; i < n; i++) {
            const outVal = BigInt(nums[i - len]);
            const inVal = BigInt(nums[i]);

            h1 = (h1 - ((outVal * pow1[len - 1]) % MOD1) + MOD1) % MOD1;
            h1 = (h1 * BASE + inVal) % MOD1;

            h2 = (h2 - ((outVal * pow2[len - 1]) % MOD2) + MOD2) % MOD2;
            h2 = (h2 * BASE + inVal) % MOD2;

            key = makeKey(h1, h2);
            counts.set(key, (counts.get(key) || 0) + 1);
        }

        for (const freq of counts.values()) {
            if (freq === 1) return true;
        }
        return false;
    };

    let low = 1;
    let high = n;
    let ans = n;

    while (low <= high) {
        const mid = low + Math.floor((high - low) / 2);
        if (canFindUnique(mid)) {
            ans = mid;
            high = mid - 1;
        } else {
            low = mid + 1;
        }
    }

    return ans;
};