/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    let n = points.length, res = 1;
    points.sort((x, y) => x - y);
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) { // initial two points
            let cnt = 0;
            for (let k = 0; k < n; k++) { // the third point
                if (threePointsInLine(points[i], points[j], points[k])) cnt++;
            }
            res = Math.max(res, cnt);
        }
    }
    return res;
};

const threePointsInLine = (p1, p2, p3) => { let [x1, y1] = p1, [x2, y2] = p2, [x3, y3] = p3; return (x2 - x1) * (y3 - y2) == (x3 - x2) * (y2 - y1); };