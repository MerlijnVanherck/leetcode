function beautifulSubstrings(s: string, k: number): number {
  let count = 0;
  const isVowelArray = mapStringToIsVowelArray(s);

  for (let size = 2; size <= s.length; size += 2) {
    if (size < Math.sqrt(k))
      continue;

    for (let index = 0; index <= s.length - size; index++)
      if (isBeautiful(isVowelArray, index, index + size, k))
        count++;
  }

  return count;
};

function isBeautiful(isVowelArray: number[], start: number, end: number, k: number): boolean {
  const vowels = countVowels(isVowelArray, start, end);
  const consonants = end - start - vowels;

  return (vowels === consonants) && ((vowels * consonants) % k === 0);
}

function countVowels(isVowelArray: number[], start: number, end: number): number {
  let count = 0;

  for (let i = start; i < end; i++)
    count += isVowelArray[i];

  return count;
}

function mapStringToIsVowelArray(s: string): number[] {
  const array: number[] = [];

  for (let i = 0; i < s.length; i++) {
    if (s[i] === 'a' || s[i] === 'e' || s[i] === 'i' || s[i] === 'o' || s[i] === 'u')
      array.push(1);
    else
      array.push(0);
  }

  return array;
}
