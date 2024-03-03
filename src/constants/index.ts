import CryptoJS from 'crypto-js';

export const API_URL = 'http://api.valantis.store:40000/';
export const rowsTable = [5, 10, 15, 20, 30, 40, 50];
export const filterKeyValue = ['brand', 'price', 'product'];

export const password = 'Valantis';
export const timestamp = new Date()
  .toISOString()
  .slice(0, 10)
  .split('-')
  .join('');
export const data = `${password}_${timestamp}`;

export const authorizationString = CryptoJS.MD5(data).toString();
