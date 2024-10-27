import { ChangeEvent, ReactNode } from "react";

export const renderIf = (condition: boolean) => (component: React.ReactElement | ReactNode) => condition ? component : null;

export const arrObjToKeyArr = (obj: Array<Record<string, any>>, key: string) => obj.map(x => x[key]);

export const arrObjToHashMap = (arrObj: Array<Record<string, any>>, key: string) => arrObj.reduce((acc, curr) => ({ ...acc, [curr[key]]: curr }), {});

export type EventRes = { name: string, value: string | number }

export const eventToObj = (func: (obj: EventRes) => void) => (event: ChangeEvent<EventRes>) => func({
    name: event.target.name,
    value: event.target.value
})

type Callback = (...args: any[]) => void;

export const throttle = (callback: Callback, delay: number): Callback => {
    let timer: NodeJS.Timeout | null = null; // Store timer reference

    return (...args: any[]) => {
        if (timer) return; // Exit if already throttled

        timer = setTimeout(() => {
            callback(...args); // Execute callback with args
            timer = null; // Reset timer
        }, delay);
    };
};
