function findMinimumOperations(s1: string, s2: string, s3: string): number {
    let commonLength = 0;

    for (let i = 0; i < Math.min(s1.length, s2.length, s3.length); i++) {
        if (s1[i] === s2[i] && s2[i] === s3[i])
            commonLength++;
        else
            break;
    }

    if (commonLength === 0)
        return -1;
    else
        return (s1.length + s2.length + s3.length) - (commonLength * 3);
};
