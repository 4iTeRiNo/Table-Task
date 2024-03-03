import { useContext } from 'react';

import styles from './Thead.module.css';
import { stateContext } from '../../StateContext';

const Thead = () => {
  const data = useContext(stateContext);
  const column = Object.keys(Object.assign({}, ...data));

  return (
    <thead className={styles.thead}>
      <tr className={styles.column}>
        {column.map((value, index) => (
          <th className={styles.content} key={index}>
            {value}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default Thead;
