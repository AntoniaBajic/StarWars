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
    <div className='movies'>
      Movie Details
      <div className='MatchesBG'>
        <div>Opening crawl:{movie?.opening_crawl}</div>
        <div>Title:{movie?.title}</div>
      </div>
      <Link to='/' className='button button-dark'>
        BACK TO SEARCH
      </Link>
    </div>
  );
};

export default MovieDetail;
