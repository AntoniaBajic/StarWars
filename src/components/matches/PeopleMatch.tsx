import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  name: string;
}
const PeopleMatch: React.FC<Props> = ({ name }) => {
  return (
    <div className='MatchesSM'>
      <Link to={`/people/${name}`} className='button'>
        {name}
      </Link>
    </div>
  );
};

export default PeopleMatch;
