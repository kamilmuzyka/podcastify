function capitalizeString(string) {
    if(!string) {
        console.error('No value provided');
        return;
    }

    if (typeof string !== 'string') {
        console.error('Provided value must be a string');
        return;
    }

    return string[0].toUpperCase() + string.substring(1);
}

export default capitalizeString;