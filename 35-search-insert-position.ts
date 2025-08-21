function searchInsert(nums: number[], target: number): number {
    const binarySearch = (startIndex: number, endIndex: number) => {            
        if (startIndex === endIndex) {
            if (nums[startIndex] < target)
                return startIndex + 1;
            else
                return startIndex;
        }
        
        const middleIndex = startIndex + Math.floor((endIndex - startIndex) / 2);

        if (nums[middleIndex] > target)
            return binarySearch(startIndex, middleIndex);
        else if (nums[middleIndex] < target)
            return binarySearch(middleIndex + 1, endIndex);
        else
            return middleIndex;
    };

    return binarySearch(0, nums.length - 1);
};
