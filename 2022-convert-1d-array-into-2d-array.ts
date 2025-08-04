function construct2DArray(original: number[], m: number, n: number): number[][] {
    if (m * n !== original.length)
        return [];

    const array = new Array<Array<number>>(m)
    for (let i = 0; i < array.length; i++)
        array[i] = original.slice(i * n, (i + 1) * n);

    return array;
};
