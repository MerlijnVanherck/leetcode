function minimumAbsDifference(arr: number[]): number[][] {
    arr = arr.sort((a, b) => a - b);

    let minDiff = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length - 1; i++) {
        const diff = Math.abs(arr[i] - arr[i + 1])

        if (diff < minDiff)
            minDiff = diff;
    }

    const pairs = new Array<number[]>();

    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (Math.abs(arr[i] - arr[j]) === minDiff) {
                if (arr[i] < arr[j])
                    pairs.push([arr[i], arr[j]]);
                else
                    pairs.push([arr[j], arr[i]]);
            } else
                break;
        }
    }

    return pairs;
};
