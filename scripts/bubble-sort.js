let uNums = [9, 8, 7, 5, 6, 3, 4, 1, 2, 10];


const bubbleSort = (nums) => {
	let x = 0;
	do {
		var swapped = false;
		for (let i = 0; i < nums.length; i++) {
			document.write(`<br>Iteration ${x}: ${nums}`);
			x++;
			if(nums[i] > nums[i + 1]) {
				const TEMP = nums[i];
				nums[i] = nums[i + 1];
				nums[i + 1] = TEMP;
				swapped = true;
			}
		}
	} while (swapped); 
	return document.write(`<br>final ordered array: ${nums}`);
}

bubbleSort(uNums);