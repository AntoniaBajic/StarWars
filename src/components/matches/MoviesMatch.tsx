import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
}
const MoviesMatch: React.FC<Props> = ({ title }) => {
  return (
    <div className='MatchesSM'>
      <Link to={`/movies/${title}`} className='button '>
        {title}
      </Link>
    </div>
  );
};

export default MoviesMatch;
