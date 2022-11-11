/**
 * A function that takes an item from an array (and optionally its index),
 * and determines whether it is a desired item or not.
 */
export type FinderFunction = (arg: any, index?: number) => boolean;

export interface DefaultFindByOptions {
  matches: '===';
  recursive: true;
}

export interface FindByOptions {
  matches: '===' | '!==' | '>=' | '>' | '<=' | '<';
  recursive: boolean;
}
