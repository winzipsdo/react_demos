export default function cubic_bezier(ratio, x1, y1, x2, y2) {
    let spotA = {x: 0, y: 0};
    let spotB = {x: x1, y: y1};
    let spotC = {x: x2, y: y2};
    let spotD = {x: 1, y: 1};
    let spotAB = {
        x: spotA.x + (spotB.x - spotA.x) * ratio,
        y: spotA.y + (spotB.y - spotA.y) * ratio
    };
    let spotBC = {
        x: spotB.x + (spotC.x - spotB.x) * ratio,
        y: spotB.y + (spotC.y - spotB.y) * ratio
    };
    let spotCD = {
        x: spotC.x + (spotD.x - spotC.x) * ratio,
        y: spotC.y + (spotD.y - spotC.y) * ratio
    };
    let spotAB_BC = {
        x: spotAB.x + (spotBC.x - spotAB.x) * ratio,
        y: spotAB.y + (spotBC.y - spotAB.y) * ratio
    };
    let spotBC_CD = {
        x: spotBC.x + (spotCD.x - spotBC.x) * ratio,
        y: spotBC.y + (spotCD.y - spotBC.y) * ratio
    };
    let spotFinal = {
        x: spotAB_BC.x + (spotBC_CD.x - spotAB_BC.x) * ratio,
        y: spotAB_BC.y + (spotBC_CD.y - spotAB_BC.y) * ratio
    };
    return (spotFinal.y);
}