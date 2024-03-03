import styles from './Tbody.module.css';
import useTable from '../../hooks/useTable';
import { useContext } from 'react';
import { stateContext } from '../../StateContext';

interface TbodyProps {
  rows: number;
  page: number;
}

const Tbody = ({ rows, page }: TbodyProps) => {
  const data = useContext(stateContext);
  const { slice } = useTable(data, page, rows);

  return (
    <tbody className={styles.tbody}>
      {slice.map((item, index) => {
        const columns = Object.values(item);

        return (
          <tr key={index} className={styles.rows}>
            {columns.map((column, index) => {
              return column === null ? (
                <td className={styles.valueNull} key={index}>
                  <span>{'Отсутствует'}</span>
                </td>
              ) : (
                <td className={styles.value} key={index}>
                  <span>{column}</span>
                </td>
              );
            })}
          </tr>
        );
      })}
    </tbody>
  );
};

export default Tbody;
