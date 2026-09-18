/**
 * @param {string} s
 * @return {string[]}
 */
var maxNumOfSubstrings = function(s) {
    const n = s.length;
    const left = Array(26).fill(n);
    const right = Array(26).fill(-1);
    for (let i = 0; i < n; ++i) {
        const idx = s.charCodeAt(i) - 97;
        left[idx] = Math.min(left[idx], i);
        right[idx] = i;
    }

    let res = [];
    let lastRight = -1;
    const getValidRight = (start) => {
        let r = right[s.charCodeAt(start) - 97];
        for (let j = start; j <= r; ++j) {
            const idx = s.charCodeAt(j) - 97;
            if (left[idx] < start) return -1;
            r = Math.max(r, right[idx]);
        }
        return r;
    };
    for (let i = 0; i < n; ++i) {
        if (i === left[s.charCodeAt(i) - 97]) {
            const validR = getValidRight(i);
            if (validR !== -1) {
                if (i <= lastRight) {
                    res[res.length - 1] = s.substring(i, validR + 1);
                } else {
                    res.push(s.substring(i, validR + 1));
                }
                lastRight = validR;
            }
        }
    }

    return res;
};