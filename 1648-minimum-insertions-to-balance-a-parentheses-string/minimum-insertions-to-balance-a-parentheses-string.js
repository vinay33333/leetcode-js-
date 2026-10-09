/**
 * @param {string} s
 * @return {number}
 */
var minInsertions = function(s) {
    let insertions = 0;
    let openCount = 0; // Number of unmatched '('

    for (let i = 0; i < s.length; i++) {
        if (s[i] === '(') {
            // If we have an odd expectation of closing parentheses from before,
            // we need to insert one ')' to close out the previous single ')' situation.
            if (openCount % 2 !== 0) {
                insertions++;
                openCount--; // Consumes one required closing parity
            }
            openCount += 2; // Each '(' needs 2 ')'
        } else {
            // Found ')'
            openCount--;
            // If openCount drops below 0, it means we found a ')' without a matching '('
            if (openCount < 0) {
                insertions++; // Insert a '(' to match this ')'
                openCount += 2; // That inserted '(' now needs 2 ')' (one is satisfied by current 's[i]')
            }
        }
    }

    // Any remaining open '(' will each need 2 ')'
    return insertions + openCount;
};