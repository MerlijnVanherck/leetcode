function divideString(s: string, k: number, fill: string): string[] {
    if (s.length % k !== 0)
        s = s.concat(fill.repeat(k - (s.length % k)));

    const list = new Array<string>();

    for (let i = 0; i < s.length; i += k)
        list.push(s.slice(i, i + k));

    return list;
};
