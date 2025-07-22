function interchangeableRectangles(rectangles: number[][]): number {
  const ratios: Map<number, number> = new Map<number, number>();

  for (const rectangle of rectangles)
    ratios.set(
      rectangle[0] / rectangle[1],
      1 + (ratios.get(rectangle[0] / rectangle[1]) ?? 0)
    );

  let sum: number = 0;

  for (const amount of ratios.values())
    sum += combinations(amount);

  return sum;  
}

function combinations(n: number): number {
  if (n < 2)
    return 0;
  else
    return (n * (n - 1)) / 2;
}
