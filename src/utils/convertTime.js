const convertTime = (ms) => {
    if(!ms) {
        throw new Error('No value provided');
    }

    if(typeof ms !== 'number') {
        throw new Error('Provided value must be a number');
    }

    const minutes = Math.floor((ms / 1000 / 60) % 60);
    const hours = Math.floor(ms / 1000 / 60 / 60);

    let result = '';

    if (hours === 1) {
        result += hours + ' hour ';
    } else if (hours > 1) {
        result += hours + ' hours ';
    }

    if (minutes === 1) {
        result += minutes + ' minute';
    } else if (minutes > 1) {
        result += minutes + ' minutes';
    }

    return result;
}

export default convertTime;