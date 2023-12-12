
export const printObject = (arg: unknown): any => {
    console.log(arg);
}

export function functionGeneric<T>(arg: T): T {
    return arg;
}

export const arrowGeneric = <T>(arg: T): T => arg;

export const genericExample = <T>(arg: T): T => arg;