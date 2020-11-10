import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { State } from '../../Slice/slice';

import { People, Movie } from '../../Slice/types';
import MoviesMatch from './MoviesMatch';
import PeopleMatch from './PeopleMatch';

const Matches: React.FC = () => {
  const { filterList, filterType } = useSelector((state: State) => state);
  return (
    <Fragment>
      {(filterList as Array<Movie | People>).map((data) => {
        if (filterType === 'MOVIE') {
          return <MoviesMatch key={data.url} title={(data as Movie).title} />;
        } else {
          return <PeopleMatch key={data.url} name={(data as People).name} />;
        }
      })}
      <button className='SearchButton-Disabled'>
        <span className='LOADMORE'>LOAD MORE</span>
      </button>
      {/* <div className='divider' />
      <p className='There-are-zero-matches-Use-the-form-to-search-for'>
        There are zero matches.
        <br /> Use the form to search for People or Movies.
  </p>*/}{' '}
    </Fragment>
  );
};

export default Matches;
