import React from 'react';
import { Link } from 'react-router-dom';

const Matches: React.FC = () => {
  return (
    <div className='MatchesBG'>
      <span className='Results'>Results</span>
      <div>
        <Link to='/people' className='button'>
          PersonName
        </Link>
      </div>
      <div>
        <Link to='/movies' className='button'>
          MovieName
        </Link>
      </div>

      {/* <div className='divider' />
      <p className='There-are-zero-matches-Use-the-form-to-search-for'>
        There are zero matches.
        <br /> Use the form to search for People or Movies.
  </p>*/}
    </div>
  );
};

export default Matches;
