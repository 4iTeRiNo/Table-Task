import { useEffect, useState } from 'react';
import { TResults } from '../types';

const filterData = (
  dataItem: TResults[],
  text: string,
  value: keyof TResults,
) => {
  return dataItem.filter((item) => {
    if (item[value] === null) {
      return;
    }
    return item[value].toString().toLowerCase().includes(text);
  });
};

export const useFilterData = (
  data: TResults[],
  text: string,
  value: keyof TResults,
) => {
  const [searchQuery, setSearchQuery] = useState<TResults[]>([]);

  useEffect(() => {
    const searchQuery = filterData(data, text, value);
    setSearchQuery([...searchQuery]);
  }, [setSearchQuery, text, data, value]);

  return searchQuery;
};
