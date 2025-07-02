function subsets(nums: number[]): number[][] {
    if (nums.length === 1)
        return [[], nums];
    
    const recurseSets = subsets(nums.slice(1));

    return [
        ...recurseSets,
        ...recurseSets.map(s => [nums[0], ...s]),
    ];
};
