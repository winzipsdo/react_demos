export default function cubic_bezier(ratio, x1, y1, x2, y2) {
    let spotA = {x: 0, y: 0};
    let spotB = {x: x1, y: y1};
    let spotC = {x: x2, y: y2};
    let spotD = {x: 1, y: 1};
    let spotFinal = {
        x: spotA.x
        - spotA.x * ratio ** 1 * 3
        + spotA.x * ratio ** 2 * 3
        - spotA.x * ratio ** 3
        + spotB.x * ratio ** 1 * 3
        - spotB.x * ratio ** 2 * 6
        + spotB.x * ratio ** 3 * 3
        + spotC.x * ratio ** 2 * 3
        - spotC.x * ratio ** 3 * 3
        + spotD.x * ratio ** 3 ,

        y: spotA.y
        - spotA.y * ratio ** 1 * 3
        + spotA.y * ratio ** 2 * 3
        - spotA.y * ratio ** 3
        + spotB.y * ratio ** 1 * 3
        - spotB.y * ratio ** 2 * 6
        + spotB.y * ratio ** 3 * 3
        + spotC.y * ratio ** 2 * 3
        - spotC.y * ratio ** 3 * 3
        + spotD.y * ratio ** 3
    };
    return (spotFinal.y);
}