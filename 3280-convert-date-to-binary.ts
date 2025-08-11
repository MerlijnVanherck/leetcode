function convertDateToBinary(date: string): string {
    const convertToBinary = (n: string) => parseInt(n).toString(2);
    const [ year, month, day ] = date.split('-', 3).map(convertToBinary);

    return `${year}-${month}-${day}`;    
};
