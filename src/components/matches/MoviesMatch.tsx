import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  title: string;
}
const MoviesMatch: React.FC<Props> = ({ title }) => {
  return (
    <div className='MatchesBG'>
      <Link to='/films'>{title}</Link>
    </div>
  );
};

export default MoviesMatch;
