"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.frequencyCountString = frequencyCountString;
function frequencyCountString(str) {
    let strArr = str.split('');
    let strMap = new Map();
    strArr.forEach(element => {
        if (strMap.has(element)) {
            strMap.set(element, strMap.get(element) + 1);
        }
        else {
            strMap.set(element, 1);
        }
    });
    return strMap;
}
//# sourceMappingURL=frequencyCount.js.map