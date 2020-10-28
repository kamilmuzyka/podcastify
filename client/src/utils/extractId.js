const extractId = (path) => {
    if(!path) {
        throw new Error('No value provided');
    }

    if(typeof path !== 'string') {
        throw new Error('Provided value must be a string');
    }

    return path.substring(path.lastIndexOf('/') + 1);
}

export default extractId;