import React from 'react';
import { Link } from 'react-router-dom';

const Movies: React.FC = () => {
  return (
    <div className='movies'>
      About Movie
      <div className='MatchesBG'>
        <div>Opening crawl:</div>
        <div>Title:</div>
      </div>
      <Link to='/' className='button button-dark'>
        BACK TO SEARCH
      </Link>
    </div>
  );
};

export default Movies;
