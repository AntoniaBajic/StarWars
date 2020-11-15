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
      <div className='MatchesLists'>
        {(filterListToShow as Array<Movie | People>).map((data) => {
          if (filterType === 'MOVIE') {
            return <MoviesMatch key={data.url} title={(data as Movie).title} />;
          } else {
            return <PeopleMatch key={data.url} name={(data as People).name} />;
          }
        })}
      </div>

      {totalCount !== shownCount ? (
        <div className='LoadMoreButton'>
          <button className='LoadMore' onClick={loadMoreHandler}>
            <span className='LOADMORE'>LOAD MORE</span>
          </button>
        </div>
      ) : null}
    </Fragment>
  );
};

export default Matches;
