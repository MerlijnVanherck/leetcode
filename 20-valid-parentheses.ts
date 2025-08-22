function isValid(s: string): boolean {
    let stack = new Array<string>();

    for (const c of s) {
        switch (c) {
            case '(':
            case '[':
            case '{':
                stack.push(c);
                break;
            case ')':
                if ('(' !== stack.pop())
                    return false;
                break;
            case ']':
                if ('[' !== stack.pop())
                    return false;
                break;
            case '}':
                if ('{' !== stack.pop())
                    return false;
                break;
            default:
                return false;
        }
    }

    if (stack.length > 0)
        return false;
    else
        return true;
};
