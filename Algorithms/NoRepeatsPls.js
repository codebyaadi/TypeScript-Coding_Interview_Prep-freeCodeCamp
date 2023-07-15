function permAlone(str) {
    function swap(s, i, j) {
        var _a;
        var chars = s.split('');
        _a = [chars[j], chars[i]], chars[i] = _a[0], chars[j] = _a[1];
        return chars.join('');
    }
    function hasRepeat(s) {
        var regex = /(.)\1/;
        return regex.test(s);
    }
    function permute(s, start, end) {
        if (start === end) {
            if (!hasRepeat(s)) {
                counter++;
            }
        }
        else {
            for (var i = start; i <= end; i++) {
                s = swap(s, start, i);
                permute(s, start + 1, end);
                s = swap(s, start, i); // backtrack
            }
        }
    }
    var counter = 0;
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
