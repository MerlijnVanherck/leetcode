function divideArray(nums: number[]): boolean {
    const map = new Map<number, number>();

    for (const n of nums)
        map.set(n, (map.get(n) ?? 0) + 1)

    for (const n of map.values())
        if (n % 2 === 1)
            return false;

    return true;
};
