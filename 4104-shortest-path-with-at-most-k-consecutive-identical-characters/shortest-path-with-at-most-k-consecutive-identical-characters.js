/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {string} labels
 * @param {number} k
 * @return {number}
 */
var shortestPath = function(n, edges, labels, k) {
    if (n === 1) return 0;

    const g = Array.from({ length: n }, () => []);
    for (const [u, v, w] of edges) {
        g[u].push([v, w]);
    }

    const dist = Array.from({ length: n }, () => new Array(k + 1).fill(Infinity));
    dist[0][1] = 0;

    const pq = [[0, 0, 1]];

    while (pq.length > 0) {
        pq.sort((a, b) => a[0] - b[0]);
        const [d, u, cur] = pq.shift();

        if (u === n - 1) return d;
        if (d > dist[u][cur]) continue;

        for (const [v, w] of g[u]) {
            const nxt = (labels[v] === labels[u]) ? cur + 1 : 1;
            const nd = d + w;

            if (nxt <= k && nd < dist[v][nxt]) {
                dist[v][nxt] = nd;
                pq.push([nd, v, nxt]);
            }
        }
    }

    let ans = Infinity;
    for (let c = 1; c <= k; c++) {
        ans = Math.min(ans, dist[n - 1][c]);
    }

    return ans === Infinity ? -1 : ans;
};