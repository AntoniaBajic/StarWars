import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { State } from '../../Slice/slice';

const Movies: React.FC = () => {
  const { title } = useParams<{ title: string }>();
  const { moviesList } = useSelector((state: State) => state);
  const movieData = moviesList.filter((movie) => movie.title === title)[0];
  return (
    <div className='movies'>
      About Movie
      <div className='MatchesBG'>
        <div>Opening crawl: {movieData.opening_crawl}</div>
        <div>Title: {movieData.title}</div>
      </div>
      <Link to='/' className='button'>
        BACK TO SEARCH
      </Link>
    </div>
  );
};

export default Movies;
