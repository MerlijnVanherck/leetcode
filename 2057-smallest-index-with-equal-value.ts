function smallestEqual(nums: number[]): number {
    return nums.findIndex((n, i) => i % 10 === n);
};
