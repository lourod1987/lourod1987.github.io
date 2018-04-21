let uNums = [9, 8, 7, 5, 6, 3, 4, 1, 2, 10];


const bubbleSort = (nums) => {
	do {
		var swapped = false;
		for (let i = 0; i < nums.length; i++) {
			document.write(`<br>${nums}`);
			
			if(nums[i] > nums[i + 1]) {
				const temp = nums[i];
				nums[i] = nums[i + 1];
				nums[i + 1] = temp;
				swapped = true;
			}
		}
	} while (swapped); 
	return document.write(`<br>${nums}`);
}

bubbleSort(uNums);