const convertTime = (ms) => {
    if(!ms) {
        console.error('No value provided');
        return;
    }

    if(typeof ms !== 'number') {
        console.error('Provided value must be a number');
        return;
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