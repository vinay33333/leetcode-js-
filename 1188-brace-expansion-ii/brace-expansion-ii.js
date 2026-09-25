/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function(expression) {
    const s = new Set();
    const dfs = (exp) => {
        const j = exp.indexOf('}');
        if (j === -1) {
            s.add(exp);
            return;
        }
        const i = exp.lastIndexOf('{', j);
        const a = exp.substring(0, i);
        const c = exp.substring(j + 1);
        for (const b of exp.substring(i + 1, j).split(',')) {
            dfs(a + b + c);
        }
    };
    dfs(expression);
    return Array.from(s).sort();
};