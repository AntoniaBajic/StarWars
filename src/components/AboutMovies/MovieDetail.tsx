import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { Movie } from '../../Slice/types';

const MovieDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [movie, setMovie] = useState<Movie | null>();
  useEffect(() => {
    const fetchMovieData = async () => {
      try {
        const data = await fetch(`https://swapi.dev/api/films/${id}/`);
        if (data.ok) {
          const movieData: Movie = await data.json();
          setMovie(movieData);
        }
      } catch (err) {}
    };
    fetchMovieData();
  }, [id]);
  return (
    <div className='About'>
      <div className='MatchesBG'>
        <div>
          Opening crawl:<span className='data'> {movie?.opening_crawl}</span>
        </div>
        <div className='movieTitle'>
          Title:<span className='data'> {movie?.title}</span>
        </div>
      </div>
      <Link to='/' className='SearchBackButton'>
        <span className='SEARCH-BACK'>BACK TO SEARCH</span>
      </Link>
    </div>
  );
};

export default MovieDetail;
