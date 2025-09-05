function longestCommonPrefix(strs: string[]): string {
  const maxPrefixLength = Math.min(...strs.map(s => s.length));

  for (let i = 0; i <= maxPrefixLength; i++) {
    for (const s of strs)
      if (s[i] !== strs[0][i])
        return s.slice(0, i);
  }

  return strs[0];
} 
