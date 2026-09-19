/**
 * @param {number} radius
 * @param {number} xCenter
 * @param {number} yCenter
 * @param {number} x1
 * @param {number} y1
 * @param {number} x2
 * @param {number} y2
 * @return {boolean}
 */
var checkOverlap = function(radius, xCenter, yCenter, x1, y1, x2, y2) {
    let xc;
    let yc;
    if(x1 >= xCenter){
        xc=x1;
    }else if(x2 < xCenter){
        xc=x2;
    }else xc=xCenter;
    if(y1>yCenter){
        yc=y1;
    }else if(y2<yCenter){
        yc=y2;
    }else yc=yCenter;
    let dist=Math.sqrt((xc-xCenter)*(xc-xCenter) + (yc-yCenter)*(yc-yCenter));
    if(dist<radius){
        return true;
    }else if(dist===radius){
        return true;
    }else return false;
};