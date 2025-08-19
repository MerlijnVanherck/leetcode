function convert(s: string, numRows: number): string {
    let result = '';
    
    for (let row = 0; row < numRows; row++)
        for (let i of getRowIndexes(row, numRows)) {
            if (i >= s.length)
                break;
            else
                result = result.concat(s[i]);
        }

    return result;
};

function* getRowIndexes(row: number, totalRows: number) {
  const maxJump = totalRows === 1 ? 1 : 2 * (totalRows - 1);
  const difference = totalRows === 1
    ? 0
    : Math.round((1 + (row / (totalRows - 1))) * maxJump) % maxJump;

  let jumpOne: number;
  let jumpTwo: number;
  
  if (difference === maxJump || difference === 0)
    jumpOne = jumpTwo = maxJump;
  else {
    jumpOne = maxJump - difference;
    jumpTwo = difference;
  }

  let index = row;
  while (true) {
    yield index;
    index += jumpOne;
    yield index;
    index += jumpTwo;
  }
}
