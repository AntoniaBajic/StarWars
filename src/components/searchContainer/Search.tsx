import React, { useState } from 'react';
import { useAppDispatch } from '../../store';
import Slice from '../../Slice/slice';

const { actions } = Slice;
const Search: React.FC = () => {
  const [type, setType] = useState('PEOPLE');
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (type === 'PEOPLE') {
      dispatch(
        actions.filterResult({
          name: 'PEOPLE',
          value: event.target.value,
        })
      );
    } else {
      dispatch(
        actions.filterResult({
          name: 'MOVIE',
          value: event.target.value,
        })
      );
    }
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
        {/* <p className='What-are-you-searching-for'>
          What are you searching for?
        </p> */}
        {/* <div className='ellipses'>
          <span className='ellipses'>
            <input
              className='Ellipse'
              type='radio'
              name='type'
              value='People'
              checked
            />
            <span className='People'> People</span>
          </span>
          <span className='ellipses'>
            <input
              className='Ellipse'
              type='radio'
              name='type'
              value='People'
            /> 

            <span className='Movies'> Movies</span>
          </span>
        </div>*/}

        <label>Showing 5 results of 10: </label>
        <select name='starwars' id='starwars' onChange={handleType}>
          <option value='PEOPLE'>People</option>
          <option value='MOVIE'>Movies</option>
        </select>
      </form>
      <form className='form'>
        <input
          className='Rectangle'
          placeholder='e.g. Chewbacca, Yoda, Boba Fett'
          value={inputValue}
          onChange={handleInputChange}
        ></input>
      </form>
      <form className='form'>
        <button className='SearchButton-Disabled'>
          <span className='SEARCH'>SEARCH</span>
        </button>
      </form>
    </div>
  );
};
export default Search;
