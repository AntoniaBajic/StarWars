import React from 'react';
import Search from '../searchContainer/Search';
import Matches from '../matches/Matches';

const SearchList: React.FC = () => {
  return (
    <div className='SearchListArea'>
      <Search />
      <Matches />
    </div>
  );
};

export default SearchList;
