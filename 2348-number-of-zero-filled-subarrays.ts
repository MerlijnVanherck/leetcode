function zeroFilledSubarray(nums: number[]): number {
    let sum = 0;
    let currentLength = 0;

    for (const n of nums) {
        if (n === 0)
            currentLength++;
        else if (currentLength > 0) {
            sum += subArrayCount(currentLength);
            currentLength = 0;
        }
    }

    sum += subArrayCount(currentLength);

    return sum;
};

function subArrayCount(length: number) {
    let sum = 0;

    while (length > 0)
        sum += length--;

    return sum;
}
