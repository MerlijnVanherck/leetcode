function findClosest(x: number, y: number, z: number): number {
    const diff = Math.abs(x - z) - Math.abs(y - z);

    if (diff < 0)
      return 1;
    else if (diff > 0)
      return 2;
    else
      return 0;
};
