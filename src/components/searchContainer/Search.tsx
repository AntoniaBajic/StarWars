import React, { useState } from 'react';
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
    <div className='SearchContainer'>
      <form className='form'>
        <label className='Showing-results-of'>
          Showing {shownCount} results of {totalCount}:{' '}
        </label>
        <select name='starwars' id='starwars' onChange={handleType}>
          <option value='PEOPLE' className='People'>
            People
          </option>
          <option value='MOVIE' className='Movies'>
            Movies
          </option>
        </select>
      </form>

      <input
        className='Rectangle'
        placeholder='e.g. Chewbacca, Yoda, Boba Fett'
        value={inputValue}
        onChange={handleInputChange}
      ></input>

      <button
        className='SearchButton-Disabled'
        onClick={searchHandler}
        disabled={isSearching}
        style={isSearching ? { background: '#0ab463' } : {}}
      >
        <span className='SEARCH'>{isSearching ? 'SEARCHING' : 'SEARCH'}</span>
      </button>
    </div>
  );
};
export default Search;
