function permAlone(str: string): number {
  function swap(s: string, i: number, j: number): string {
    const chars = s.split('');
    [chars[i], chars[j]] = [chars[j], chars[i]];
    return chars.join('');
  }

  function hasRepeat(s: string): boolean {
    const regex = /(.)\1/;
    return regex.test(s);
  }

  function permute(s: string, start: number, end: number): void {
    if (start === end) {
      if (!hasRepeat(s)) {
        counter++;
      }
    } else {
      for (let i = start; i <= end; i++) {
        s = swap(s, start, i);
        permute(s, start + 1, end);
        s = swap(s, start, i); // backtrack
      }
    }
  }

  let counter = 0;
  permute(str, 0, str.length - 1);
  return counter;
}


console.log(permAlone('aab')); // Output: 2
console.log(permAlone('aaa')); // Output: 0
console.log(permAlone('aabb')); // Output: 8
console.log(permAlone('abcdefa')); // Output: 3600
console.log(permAlone('abfdefa')); // Output: 2640
console.log(permAlone('zzzzzzzz')); // Output: 0
console.log(permAlone('a')); // Output: 1
console.log(permAlone('aaab')); // Output: 0
console.log(permAlone('aaabb')); // Output: 12

