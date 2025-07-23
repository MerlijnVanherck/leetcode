function countSubarrays(nums: number[], k: number): number {
  const medianIndex = nums.findIndex(n => n === k);

  const startMap = new Map<number, number>();
  let startBalance = 0;
  for (let start = medianIndex - 1; start >= 0; start--) {
    startBalance += nums[start] < k ? -1 : 1;
    startMap.set(startBalance, (startMap.get(startBalance) ?? 0) + 1);
  }

  const endMap = new Map<number, number>();
  let endBalance = 0;
  for (let end = medianIndex + 1; end < nums.length; end++) {
    endBalance += nums[end] < k ? -1 : 1;
    endMap.set(endBalance, (endMap.get(endBalance) ?? 0) + 1);
  }

  let count = 0;
  for (const [k, v] of endMap) {
    count += v * (startMap.get(-k) ?? 0)
    count += v * (startMap.get(1-k) ?? 0)
  }
  
  return 1
    + (startMap.get(0) ?? 0)
    + (endMap.get(0) ?? 0)
    + (startMap.get(1) ?? 0)
    + (endMap.get(1) ?? 0)
    + count;
};
