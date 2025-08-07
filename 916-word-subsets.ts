function wordSubsets(words1: string[], words2: string[]): string[] {
    const universalStrings = new Array<string>();
    const universalMap = getUniversalMap(words2);
    
    for (const word of words1) {
        const wordMap = getLetterMap(word);
        let isUniversal = true;

        for (const entry of universalMap.entries())
            if ((wordMap.get(entry[0]) ?? 0) < entry[1])
                isUniversal = false;
        
        if (isUniversal)
            universalStrings.push(word);
    }

    return universalStrings;
};

function getUniversalMap(words: string[]): Map<string, number> {
    const map = new Map<string, number>();

    for (const word of words)
        for (const entry of getLetterMap(word).entries())
            if ((map.get(entry[0]) ?? 0) < entry[1])
                map.set(entry[0], entry[1]);

    return map;
}

function getLetterMap(word: string): Map<string, number> {
    const map = new Map<string, number>();

    for (const letter of word)
        map.set(letter, 1 + (map.get(letter) ?? 0));

    return map;
}
