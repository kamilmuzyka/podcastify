const capitalizeString = (string) => {
    if(!string) {
        throw new Error('No value provided');
    }

    if (typeof string !== 'string') {
        throw new Error('Provided value must be a string');
    }

    return string[0].toUpperCase() + string.substring(1);
}

export default capitalizeString;