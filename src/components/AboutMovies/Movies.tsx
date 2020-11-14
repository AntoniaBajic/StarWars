import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State } from '../../Slice/slice';

const Movies: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const { moviesList } = useSelector((state: State) => state);
  const movieData = moviesList.filter((movie) => movie.title === title)[0];
  return (
    <div className='About'>
      <div className='MatchesBG'>
        <div>
          Opening crawl:<span className='data'> {movieData.opening_crawl}</span>
        </div>
        <div className='movieTitle'>
          Title: <span className='data'> {movieData.title}</span>
        </div>
      </div>
      <Link to='/' className='SearchBackButton'>
        <span className='SEARCH-BACK'>BACK TO SEARCH</span>
      </Link>
    </div>
  );
};

export default Movies;
