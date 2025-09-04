function isPalindrome(x: number | string): boolean {
  x = x.toString();

  for (let i = 0; i < Math.floor(x.length / 2); i++) {
    if (x[i] !== x[x.length - (i + 1)])
      return false;
  }

  return true;
}
