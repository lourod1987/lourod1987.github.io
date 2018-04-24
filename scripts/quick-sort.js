let uNums = [9, 8, 7, 5, 6, 3, 4, 1, 2, 10];


const quickSort = (nums) => {
    if (nums.length <= 1) {
        return nums;
    }
    
    const PIVOT = nums[nums.length - 1];
    let left = [];
    let right = [];
    
    for (let i = 0; i < nums.length - 1; i++) {
        if (nums[i] < PIVOT) {
            left.push(nums[i]);
        } else {
            right.push(nums[i]);
        }
    }
    
//    document.write(`<br>Left half of array: ${left}`);
//    document.write(`<br>Right half of array: ${right}`);
    
    return [...quickSort(left), PIVOT, ...quickSort(right)];
};

quickSort(uNums);