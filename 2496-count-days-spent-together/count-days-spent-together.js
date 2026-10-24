/**
 * @param {string} arriveAlice
 * @param {string} leaveAlice
 * @param {string} arriveBob
 * @param {string} leaveBob
 * @return {number}
 */
var countDaysTogether = function(arriveAlice, leaveAlice, arriveBob, leaveBob) {
    const toDate = (str) => new Date(`2021-${str}`);

    const aliceStart = toDate(arriveAlice);
    const aliceEnd = toDate(leaveAlice);
    const bobStart = toDate(arriveBob);
    const bobEnd = toDate(leaveBob);

    const overlapStart = new Date(Math.max(aliceStart, bobStart));
    const overlapEnd = new Date(Math.min(aliceEnd, bobEnd));
    const diffDays = (overlapEnd - overlapStart) / (1000 * 60 * 60 * 24);
    return diffDays >= 0 ? diffDays + 1 : 0;
};