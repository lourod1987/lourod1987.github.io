let uNums = [9, 8, 7, 5, 6, 3, 4, 1, 2, 10];


const mergeSort = (nums) => {
    if (nums.length < 2) {
        return nums;
    }
    
    const LENGTH = nums.length;
    const MIDDLE = Math.floor(LENGTH / 2);
    const LEFT = nums.slice(0, MIDDLE);
    const RIGHT = nums.slice(MIDDLE, LENGTH);
    
    const sortedLeft = mergeSort(LEFT);
    const sortedRight = mergeSort(RIGHT);
    
    document.write(`<br>Left half of array: ${sortedLeft}`);
    document.write(`<br>Right half of array: ${sortedRight}`);
    
    return stitch(sortedLeft, sortedRight);
};

const stitch = (left, right) => {
    const RESULTS = [];
    
    while (left.length && right.length) {
        if (left[0] <= right[0]) {
            RESULTS.push(left.shift());
        } else {
            RESULTS.push(right.shift());
        }
    }
    
    while (left.length) {
        RESULTS.push(left.shift());
    }
    
    while (right.length) {
        RESULTS.push(right.shift());
    }
    return RESULTS;
    
   /*alternative way to return without while loops return RESULTS.concat(left, right);*/
    /*ES6 feature that spreads called arrays into new array return [...RESULTS, ...left, ...right]*/
};

mergeSort(uNums);