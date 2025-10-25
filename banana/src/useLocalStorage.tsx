import { useEffect, useState } from 'react';

const useLocalStorage = (key: string, defaultValue: number) => {
    const [value, setValue] = useState(() => {
        const jsonValue = window.localStorage.getItem(key);
        if (jsonValue !== null) {
            return JSON.parse(jsonValue);
        }
        return defaultValue;
    });

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value));
    }, [key, value]);

    return [value, setValue];
};

export default useLocalStorage;
