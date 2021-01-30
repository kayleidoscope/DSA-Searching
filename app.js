const {BinarySearchTree} = require('./binarySearchTree')

function binarySearch(array, value, start, end) {
    var start = start === undefined ? 0 : start;
    var end = end === undefined ? array.length : end;

    if (start > end) {
        return -1;
    }

    const index = Math.floor((start + end) / 2);
    const item = array[index];

    console.log(start, end);
    if (item == value) {
        return index;
    }
    else if (item < value) {
        return binarySearch(array, value, index + 1, end);
    }
    else if (item > value) {
        return binarySearch(array, value, start, index - 1);
    }
};

/*

1.

- First call: 0 to 10. Second call: 0 to 4. Third and final call: 3 to 4.
- First call: 0 to 10. Second call: 6 to 10. Third call: 6 to 7. Fourth and final call: 7 to 7.

*/

binarySearch([3, 5, 6, 8, 11, 12, 14, 15, 17, 18], 16, undefined, undefined)