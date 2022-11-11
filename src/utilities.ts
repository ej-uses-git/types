/**
 * A function that takes an item from an array (and optionally its index),
 * and determines whether it is a desired item or not.
 */
export type FinderFunction = (arg: any, index?: number) => boolean;
