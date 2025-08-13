function isPowerOfThree(n: number): boolean {
    if (n < 1)
        return false;

    return Number.isInteger(Number((Math.log(n) / Math.log(3)).toFixed(10)))
};
