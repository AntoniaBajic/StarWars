import React from 'react';

const Matches: React.FC = () => {
  return (
    <div className='MatchesBG'>
      <span className='Results'>Results</span>

      <div className='divider' />
      <p className='There-are-zero-matches-Use-the-form-to-search-for'>
        There are zero matches.
        <br /> Use the form to search for People or Movies.
      </p>
    </div>
  );
};

export default Matches;
