import { TResults } from '../types';

export const isValue = (value: unknown): value is keyof TResults =>
  ['brand', 'id', 'price', 'product'].some((x) => x === value);
