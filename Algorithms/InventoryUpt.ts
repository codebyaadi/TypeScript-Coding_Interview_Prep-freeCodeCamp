function updateInventory(arr1: [number, string][], arr2: [number, string][]): [number, string][] {
  const inventoryMap: Map<string, number> = new Map();

  // Update quantities in the inventory map
  for (const [quantity, item] of [...arr1, ...arr2]) {
    inventoryMap.set(item, (inventoryMap.get(item) || 0) + quantity);
  }

  const newInventory: [number, string][] = Array.from(inventoryMap, ([item, quantity]) => [quantity, item]);

  // Sort the new inventory array alphabetically
  newInventory.sort((a, b) => a[1].localeCompare(b[1]));

  return newInventory;
}

// Example inventory lists
const curInv: [number, string][] = [
  [21, "Bowling Ball"],
  [2, "Dirty Sock"],
  [1, "Hair Pin"],
  [5, "Microphone"],
];

const newInv: [number, string][] = [
  [2, "Hair Pin"],
  [3, "Half-Eaten Apple"],
  [67, "Bowling Ball"],
  [7, "Toothpaste"],
];

const updatedInventory: [number, string][] = updateInventory(curInv, newInv);
console.log(updatedInventory);
