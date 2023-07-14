"use strict";
function updateInventory(arr1, arr2) {
  const inventoryMap = /* @__PURE__ */ new Map();
  for (const [quantity, item] of [...arr1, ...arr2]) {
    inventoryMap.set(item, (inventoryMap.get(item) || 0) + quantity);
  }
  const newInventory = Array.from(inventoryMap, ([item, quantity]) => [quantity, item]);
  newInventory.sort((a, b) => a[1].localeCompare(b[1]));
  return newInventory;
}
const curInv = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"]
];
const newInv = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"]
];
const updatedInventory = updateInventory(curInv, newInv);
console.log(updatedInventory);
//# sourceMappingURL=InventoryUpt.js.map
