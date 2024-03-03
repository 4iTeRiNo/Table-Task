import { useEffect, useReducer, useState } from 'react';
import { stateContext } from './StateContext';
import { API_URL, authorizationString, rowsTable } from './constants';
import { TResults, initialState } from './types';

import './App.css';
import Footer from './components/Footer/Footer';
import Loader from './components/Loader/Loader';
import Tbody from './components/Tbody/Tbody';
import Thead from './components/Thead/Thead';
import dataReducer from './dataReducer';
import axios from 'axios';
import { useFilterData } from './hooks/useFilterData';
import Search from './components/SearchInput/SearchInput';

function App() {
  const [rows, setRows] = useState<number>(15);
  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState('');
  const [value, setValue] = useState<keyof TResults>('product');
  console.log(value);

  const [state, dispatch] = useReducer(dataReducer, initialState);

  useEffect(() => {
    dispatch({ type: 'request', payload: [], error: null });

    dispatch({ type: 'loading', payload: [], error: null });

    axios({
      method: 'post',
      url: API_URL,
      headers: {
        'Content-Type': 'application/json',
        'X-Auth': authorizationString,
      },
      data: {
        action: 'get_ids',
        params: { offset: 0, limit: 100 },
      },
    }).then((responsive) => {
      axios({
        method: 'post',
        url: API_URL,
        headers: {
          'Content-Type': 'application/json',
          'X-Auth': authorizationString,
        },
        data: {
          action: 'get_items',
          params: { ids: responsive.data.result },
        },
      }).then(
        (res) => {
          dispatch({
            type: 'success',
            payload: res.data.result,
            error: null,
          });
        },

        (error) => dispatch({ type: 'failure', payload: [], error: error }),
      );
    });
  }, []);

  const data = useFilterData(state.data, searchValue, value);

  return (
    <div className="App">
      {state.status === 'loading' && <Loader />}
      {state.data && (
        <stateContext.Provider value={data}>
          <Search data={data} onChange={setSearchValue} setValue={setValue} />
          <table className="table">
            <Thead />
            <Tbody rows={rows} page={page} />
          </table>
          <Footer
            page={page}
            rows={rows}
            setPage={setPage}
            setRows={setRows}
            rowsTable={rowsTable}
          />
        </stateContext.Provider>
      )}
      {state.status === 'error' && <span>Error: {state.error}</span>}
    </div>
  );
}

export default App;
