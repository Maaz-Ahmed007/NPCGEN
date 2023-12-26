"use client";

import { useState } from "react";

export default function useLocalStorage(key: any, initialValue: any) {
    const [state, setState] = useState(() => {
        try {
            const serializedData = window.localStorage.getItem(key);
            return serializedData ? JSON.parse(serializedData) : initialValue;
        } catch (error) {
            console.log(
                `Error getting data from Local Storage(${key}):`,
                error
            );
        }
    });

    const setValue = (value: any) => {
        try {
            const valueToStore =
                value instanceof Function ? value(state) : value;
            window.localStorage.setItem(key, JSON.stringify(valueToStore));
            setState(value);
            window.location.reload();
        } catch (error) {
            console.error(
                `Error getting data from Local Storage(${key}):`,
                error
            );
        }
    };

    return [state, setValue];
}
