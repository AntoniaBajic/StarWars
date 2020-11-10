import React from 'react';

const Search: React.FC = () => {
  return (
    <div className='SearchContainer'>
      <form className='form'>
        <p className='What-are-you-searching-for'>
          What are you searching for?
        </p>
        <div className='ellipses'>
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
        </div>
      </form>
      <form className='form'>
        <input
          className='Rectangle'
          placeholder='e.g. Chewbacca, Yoda, Boba Fett'
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
