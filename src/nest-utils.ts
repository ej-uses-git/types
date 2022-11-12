/**
 * A function that takes an error and handles it,
 * either returning some value to be sent to the client or
 * throwing a different error.
 */
export type ErrorHandlerFunc = (error?: any) => void | any;

/**
 * A constructor function, extended by a class.
 */
export type Constructor = new (...args: any[]) => any;
