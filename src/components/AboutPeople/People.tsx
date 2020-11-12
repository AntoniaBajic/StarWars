import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State } from '../../Slice/slice';

const People: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { peopleList } = useSelector((state: State) => state);
  const peopleData = peopleList.filter((people) => people.name === name)[0];
  return (
    <div className='people'>
      About People
      <div className='MatchesBG'>
        <div>Name: {peopleData.name}</div>
        <div>Height: {peopleData.height}</div>
        <div>Mass: {peopleData.mass}</div>
        <div>Hair color: {peopleData.hair_color}</div>
        <div>Skin color: {peopleData.skin_color}</div>
        <div>Eye color: {peopleData.eye_color}</div>
        <div>Birth year: {peopleData.birth_year}</div>
        <div>Movies:</div>
        {peopleData.films.map((film, index) => {
          return (
            <div key={film}>
              <Link to={''}>{index + 1}. Movie</Link>
            </div>
          );
        })}
      </div>
      <Link to='/' className='button'>
        BACK TO SEARCH
      </Link>
    </div>
  );
};

export default People;
