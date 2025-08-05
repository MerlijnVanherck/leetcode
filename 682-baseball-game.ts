function calPoints(operations: string[]): number {
    const result = new Array<number>();

    for (const o of operations) {
        if (o === '+')
            result.push(result.at(-1) + result.at(-2));
        else if (o === 'D')
            result.push(2 * result.at(-1));
        else if (o === 'C')
            result.pop();
        else
            result.push(Number(o))
    }

    return result.reduce((pVal, cVal) => pVal + cVal, 0);
};
