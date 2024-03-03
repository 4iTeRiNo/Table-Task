import { SetStateAction, Dispatch, useContext } from 'react';
import styles from './Footer.module.css';
import RowPerPage from './Pagination/RowPerPage';
import Pagination from './Pagination/Pagination';
import useTable from '../../hooks/useTable';
import { stateContext } from '../../StateContext';

interface FooterProps {
  page: number;
  rowsTable: number[];
  rows: number;
  setPage: Dispatch<SetStateAction<number>>;
  setRows: Dispatch<SetStateAction<number>>;
}

const Footer = ({ setPage, page, rowsTable, rows, setRows }: FooterProps) => {
  const data = useContext(stateContext);

  const { range } = useTable(data, page, rows);

  return (
    <footer className={styles.footer}>
      <div className={styles.paginationWrapper}>
        <RowPerPage rows={rows} rowsTable={rowsTable} setRows={setRows} />
        <Pagination page={page} range={range} setPage={setPage} />
      </div>
    </footer>
  );
};

export default Footer;
