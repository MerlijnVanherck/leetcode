function twoSum(nums: number[], target: number): number[] {
	let sortedNums = nums.toSorted((a, b) => a - b);

	for (let i = 0; i < nums.length - 1; i++) {
	  for (let j = i + 1; j < nums.length; j++) {
	    if (sortedNums[i] + sortedNums[j] === target) 
	      return [nums.indexOf(sortedNums[i]), nums.lastIndexOf(sortedNums[j])];
	    else if (sortedNums[i] + sortedNums[j] > target)
	      break;
	  }
	}

	return [];
}
