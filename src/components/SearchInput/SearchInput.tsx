import React from 'react';
import styles from './SearchInput.module.css';
import { TResults } from '../../types';
import Checkbox from '../Checkbox/Checkbox';

interface SearchProps {
  onChange: (value: string) => void;
  setValue: React.Dispatch<React.SetStateAction<keyof TResults>>;
  data: TResults[];
}

const Search = ({ onChange, setValue, data }: SearchProps) => {
  const column = Object.keys(Object.assign({}, ...data));
  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value);
  };

  return (
    <form autoCapitalize="false" className={styles.searchForm}>
      <div className={styles.checkboxWrapper}>
        {column.map((value, index) => (
          <Checkbox key={index} setValue={setValue} value={value} />
        ))}
      </div>

      <div className={styles.search}>
        <label htmlFor="search" className={styles.label}></label>
        <input
          id="search"
          className={styles.text}
          type="text"
          name="input"
          placeholder="Search..."
          onChange={handleSearch}
        />
      </div>
    </form>
  );
};

export default Search;
