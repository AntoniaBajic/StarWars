import React from 'react';
import { Link } from 'react-router-dom';

const People: React.FC = () => {
  return (
    <div className='people'>
      About People
      <div className='MatchesBG'>
        <span>Name:</span>
        <span>Height:</span>
        <span>Mass:</span>
        <div>Films:</div>
        <Link to='/movies'>NameOfMovie</Link>
      </div>
      <Link to='/' className='button button-dark'>
        BACK TO SEARCH
      </Link>
    </div>
  );
};

export default People;
