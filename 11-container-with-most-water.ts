function maxArea(height: number[]): number {
    let max = 0;
    let start = 0;
    let end = height.length - 1;

    while (start < end) {
        const area = Math.min(height[start], height[end]) * Math.abs(start - end);

        if (area > max)
            max = area;

        if (height[start] < height[end])
            start++;
        else
            end--;
    }

    return max;    
};
