import React, { Fragment, useState } from 'react';
import { useAppDispatch } from '../../store';
import Slice, { State } from '../../Slice/slice';
import { useSelector } from 'react-redux';

const { actions } = Slice;
const Search: React.FC = () => {
  const [isSearching, setIsSearching] = useState(false);
  const [type, setType] = useState('PEOPLE');
  const [inputValue, setInputValue] = useState('');
  const { totalCount, shownCount } = useSelector((state: State) => state);

  const searchHandler = async (event: React.MouseEvent<HTMLButtonElement>) => {
    await setIsSearching(true);
    setTimeout(async () => {
      if (type === 'PEOPLE') {
        dispatch(
          actions.filterResult({
            name: 'PEOPLE',
            value: inputValue,
          })
        );
      } else {
        dispatch(
          actions.filterResult({
            name: 'MOVIE',
            value: inputValue,
          })
        );
      }
      await setIsSearching(false);
    }, 2000);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };
  const dispatch = useAppDispatch();

  const handleType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    if (value === 'PEOPLE') {
      dispatch(
        actions.filterResult({
          name: 'PEOPLE',
          value: inputValue,
        })
      );
    } else {
      dispatch(
        actions.filterResult({
          name: 'MOVIE',
          value: inputValue,
        })
      );
    }

    setType(value);
  };

  return (
    <Fragment>
      <div className='Search'>
        <div className='SearchContainer'>
          <input
            className='Rectangle'
            placeholder='Search Character'
            value={inputValue}
            onChange={handleInputChange}
          ></input>

          <button
            className='SearchButton-Disabled'
            onClick={searchHandler}
            disabled={isSearching}
            style={isSearching ? { background: '#0ab463' } : {}}
          >
            <span className='SEARCH'>
              {isSearching ? 'SEARCHING' : 'SEARCH CHARACTER'}
            </span>
          </button>
        </div>
      </div>
      <form className='form'>
        <label className='Showing-results-of'>
          Showing {shownCount} results of {totalCount}:{' '}
        </label>
        <div>
          <select name='starwars' id='starwars' onChange={handleType}>
            <option value='PEOPLE' className='People'>
              People
            </option>
            <option value='MOVIE' className='Movies'>
              Movies
            </option>
          </select>
        </div>
      </form>
    </Fragment>
  );
};
export default Search;
