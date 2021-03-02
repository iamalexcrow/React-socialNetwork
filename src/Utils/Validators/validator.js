export const required = value => {
    if (value) {
        return undefined;
    }
    return 'error field is required ';
    
}

export const maxLengthCreator = (maxLength) => (value) => {
    if (value && value.length > maxLength) {
        return `Length shouldn't be longer than ${maxLength} symbols`;
    }
    return undefined;
}
