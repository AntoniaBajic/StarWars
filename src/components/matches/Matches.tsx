import React, { Fragment } from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch } from '../../store';
import Slice, { State } from '../../Slice/slice';

import { People, Movie } from '../../Slice/types';
import MoviesMatch from './MoviesMatch';
import PeopleMatch from './PeopleMatch';

const { showMore } = Slice.actions;
const Matches: React.FC = () => {
  const { filterList, filterType, shownCount, totalCount } = useSelector(
    (state: State) => state
  );
  const filterListToShow = filterList.slice(0, shownCount);
  const dispatch = useAppDispatch();

  const loadMoreHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    dispatch(showMore());
  };

  return (
    <Fragment>
      {(filterListToShow as Array<Movie | People>).map((data) => {
        if (filterType === 'MOVIE') {
          return <MoviesMatch key={data.url} title={(data as Movie).title} />;
        } else {
          return <PeopleMatch key={data.url} name={(data as People).name} />;
        }
      })}
      {totalCount !== shownCount ? (
        <button className='SearchButton-Disabled' onClick={loadMoreHandler}>
          <span className='LOADMORE'>LOAD MORE</span>
        </button>
      ) : null}
      {/* <div className='divider' />
      <p className='There-are-zero-matches-Use-the-form-to-search-for'>
        There are zero matches.
        <br /> Use the form to search for People or Movies.
  </p>*/}{' '}
    </Fragment>
  );
};

export default Matches;
