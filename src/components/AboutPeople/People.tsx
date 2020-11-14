import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State } from '../../Slice/slice';

const People: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { peopleList } = useSelector((state: State) => state);
  const peopleData = peopleList.filter((people) => people.name === name)[0];
  return (
    <div className='About'>
      <div className='AboutPeople'>
        <div>
          <div>
            Name: <span className='data'> {peopleData.name}</span>
          </div>
          <div>
            Height: <span className='data'> {peopleData.height}</span>
          </div>
          <div>
            Mass: <span className='data'> {peopleData.mass}</span>
          </div>
          <div>
            Hair color: <span className='data'> {peopleData.hair_color}</span>
          </div>
          <div>
            Skin color: <span className='data'> {peopleData.skin_color}</span>
          </div>
          <div>
            Eye color: <span className='data'> {peopleData.eye_color}</span>
          </div>
          <div>
            Birth year: <span className='data'> {peopleData.birth_year}</span>
          </div>
        </div>
        <div>
          Movies:
          <span className='data'>
            {peopleData.films.map((film, index) => {
              const id = film.match(/\d+/);
              return (
                <div key={film}>
                  <Link
                    to={`/movieDetail/${(id as RegExpMatchArray)[0]}`}
                    className='buttonMovies'
                  >
                    {index + 1}. Movie
                  </Link>
                </div>
              );
            })}{' '}
          </span>
        </div>
      </div>

      <Link to='/' className='SearchBackButton'>
        <span className='SEARCH-BACK'>BACK TO SEARCH</span>
      </Link>
    </div>
  );
};

export default People;
