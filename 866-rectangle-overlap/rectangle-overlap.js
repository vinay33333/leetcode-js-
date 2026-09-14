/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function(rec1, rec2) {
    let [x1,y1,x2,y2]=rec1;
    let [a1,b1,a2,b2]=rec2;
    if(!(b1>=y2)&&!(y1>=b2)&&!(a1>=x2)&&!(x1>=a2)) return true;
    return false;
};