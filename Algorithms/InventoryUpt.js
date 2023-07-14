var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
function updateInventory(arr1, arr2) {
    var inventoryMap = new Map();
    // Update quantities in the inventory map
    for (var _i = 0, _a = __spreadArray(__spreadArray([], arr1, true), arr2, true); _i < _a.length; _i++) {
        var _b = _a[_i], quantity = _b[0], item = _b[1];
        inventoryMap.set(item, (inventoryMap.get(item) || 0) + quantity);
    }
    var newInventory = Array.from(inventoryMap, function (_a) {
        var item = _a[0], quantity = _a[1];
        return [quantity, item];
    });
    // Sort the new inventory array alphabetically
    newInventory.sort(function (a, b) { return a[1].localeCompare(b[1]); });
    return newInventory;
}
// Example inventory lists
var curInv = [
    [21, "Bowling Ball"],
    [2, "Dirty Sock"],
    [1, "Hair Pin"],
    [5, "Microphone"],
];
var newInv = [
    [2, "Hair Pin"],
    [3, "Half-Eaten Apple"],
    [67, "Bowling Ball"],
    [7, "Toothpaste"],
];
var updatedInventory = updateInventory(curInv, newInv);
console.log(updatedInventory);
