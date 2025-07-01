function possibleStringCount(word: string): number {
  let count = 1;

  for (let i = 0; i < word.length - 1; i++)
    if (word[i] === word[i + 1])
      count++;

  return count;
};
