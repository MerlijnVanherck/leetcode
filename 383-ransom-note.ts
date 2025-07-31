function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Array<number>('z'.charCodeAt(0) + 1).fill(0);

  for (let i = 0; i < ransomNote.length; i++)
    map[ransomNote.charCodeAt(i)] -= 1;

  for (let i = 0; i < magazine.length; i++)
    map[magazine.charCodeAt(i)] += 1;

  if (map.findIndex(n => n < 0) === -1)
    return true;
  else
    return false;
}
