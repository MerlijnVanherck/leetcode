function canConstruct(ransomNote: string, magazine: string): boolean {
  const map = new Map<string, number>();

  for (const c of ransomNote)
    map.set(c, (map.get(c) ?? 0) - 1);

  for (const c of magazine)
    map.set(c, (map.get(c) ?? 0) + 1);

  for (const n of map.values())
    if (n < 0)
      return false;

  return true;
}
