import { useRef, useEffect } from 'react';

const useKey = (key, cb) => {
    const callbackRef = useRef(cb);

    useEffect(() => {
        callbackRef.current = cb;
    });

    useEffect(() => {
        const handle = (e) => {
            if (e.code === key) {
                callbackRef.current(e);
            }
        }
        document.addEventListener('keydown', handle);
        return () => {
            document.removeEventListener('keydown', handle);
        }
    }, [key]);
}

export default useKey;