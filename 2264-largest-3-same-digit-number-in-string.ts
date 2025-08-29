function largestGoodInteger(num: string): string {
    if (num.includes("999"))
        return "999";
    if (num.includes("888"))
        return "888";
    if (num.includes("777"))
        return "777";
    if (num.includes("666"))
        return "666";
    if (num.includes("555"))
        return "555";
    if (num.includes("444"))
        return "444";
    if (num.includes("333"))
        return "333";
    if (num.includes("222"))
        return "222";
    if (num.includes("111"))
        return "111";
    if (num.includes("000"))
        return "000";
    return "";
};
