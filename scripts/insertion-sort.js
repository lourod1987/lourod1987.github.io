let uNums = [9, 8, 7, 5, 6, 3, 4, 1, 2, 10];

//i is 
const insertionSort = (nums) => {
	let x = 0;
	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			document.write(`<br>Iteration ${x}: ${nums}`);
			x++;
			if(nums[i] < nums[j]) {
				const spliced = nums.splice(i, 1);
				nums.splice(j, 0, spliced[0]);
			}
		}
	} 
	return document.write(`<br>final ordered array: ${nums}`);
}

insertionSort(uNums);