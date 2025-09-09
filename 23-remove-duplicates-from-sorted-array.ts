function removeDuplicates(nums: number[]): number {
    for (let i = 0; i < nums.length; i++)
        if (nums.indexOf(nums[i]) !== i)
            nums[i] = 101;

    nums.sort((a, b) => a - b);

    return nums.length - nums.reduce((p, c) => c === 101 ? p + 1 : p, 0);
};
