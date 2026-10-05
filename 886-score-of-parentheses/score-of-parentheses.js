/**
 * @param {string} s
 * @return {number}
 */
var scoreOfParentheses = function(s) {
    let stack = [0];
    for (let char of s) {
        if (char === '(') {
            stack.push(0);
        } else {
            let v = stack.pop();
            let top = stack.pop();
            stack.push(top + Math.max(2 * v, 1));
        }
    }
    return stack[0];
};