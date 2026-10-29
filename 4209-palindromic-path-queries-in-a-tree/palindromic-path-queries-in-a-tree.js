/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} s
 * @param {string[]} queries
 * @return {boolean[]}
 */
var palindromePath = function(n, edges, s, queries) {
    const adj = Array.from({ length: n }, () => []);
    for (const [u, v] of edges) {
        adj[u].push(v);
        adj[v].push(u);
    }

    const chars = s.split('');
    const maskOf = (c) => 1 << (c.charCodeAt(0) - 97);

    const parent = new Int32Array(n);
    const depth = new Int32Array(n);
    const heavy = new Int32Array(n).fill(-1);
    const head = new Int32Array(n);
    const pos = new Int32Array(n);
    const sz = new Int32Array(n);

    function dfs1(u, p, d) {
        parent[u] = p;
        depth[u] = d;
        sz[u] = 1;
        let maxSub = 0;
        for (const v of adj[u]) {
            if (v !== p) {
                dfs1(v, u, d + 1);
                sz[u] += sz[v];
                if (sz[v] > maxSub) {
                    maxSub = sz[v];
                    heavy[u] = v;
                }
            }
        }
    }
    dfs1(0, -1, 0);

    let curPos = 0;
    function dfs2(u, h) {
        head[u] = h;
        pos[u] = curPos++;
        if (heavy[u] !== -1) {
            dfs2(heavy[u], h);
        }
        for (const v of adj[u]) {
            if (v !== parent[u] && v !== heavy[u]) {
                dfs2(v, v);
            }
        }
    }
    dfs2(0, 0);

    // Segment tree covering [0, n-1]
    const tree = new Int32Array(4 * n);

    function updateTree(node, l, r, idx, val) {
        if (l === r) {
            tree[node] = val;
            return;
        }
        const mid = (l + r) >> 1;
        if (idx <= mid) updateTree(2 * node, l, mid, idx, val);
        else updateTree(2 * node + 1, mid + 1, r, idx, val);
        tree[node] = tree[2 * node] ^ tree[2 * node + 1];
    }

    function queryTree(node, l, r, ql, qr) {
        if (ql > r || qr < l) return 0;
        if (ql <= l && r <= qr) return tree[node];
        const mid = (l + r) >> 1;
        return queryTree(2 * node, l, mid, ql, qr) ^ queryTree(2 * node + 1, mid + 1, r, ql, qr);
    }

    // Initialize segment tree with initial characters
    for (let i = 0; i < n; i++) {
        updateTree(1, 0, n - 1, pos[i], maskOf(chars[i]));
    }

    const result = [];

    for (const q of queries) {
        const parts = q.split(' ');
        if (parts[0] === 'update') {
            const u = parseInt(parts[1]);
            const c = parts[2];
            chars[u] = c;
            updateTree(1, 0, n - 1, pos[u], maskOf(c));
        } else {
            let u = parseInt(parts[1]);
            let v = parseInt(parts[2]);
            let pathMask = 0;

            while (head[u] !== head[v]) {
                if (depth[head[u]] > depth[head[v]]) {
                    pathMask ^= queryTree(1, 0, n - 1, pos[head[u]], pos[u]);
                    u = parent[head[u]];
                } else {
                    pathMask ^= queryTree(1, 0, n - 1, pos[head[v]], pos[v]);
                    v = parent[head[v]];
                }
            }

            if (depth[u] > depth[v]) {
                pathMask ^= queryTree(1, 0, n - 1, pos[v], pos[u]);
            } else {
                pathMask ^= queryTree(1, 0, n - 1, pos[u], pos[v]);
            }

            // Check if pathMask has at most one bit set (palindrome condition)
            result.push(pathMask === 0 || (pathMask & (pathMask - 1)) === 0);
        }
    }

    return result;
};