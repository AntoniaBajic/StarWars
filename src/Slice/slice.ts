import { createSlice } from '@reduxjs/toolkit';
import { Movie, People } from './types';
import fetchMovies from './moviesThunk';
import fetchPeople from './peopleThunk';

export interface State {
  moviesList: Movie[];
  peopleList: People[];
  filterList: Movie[] | People[];
  filterType: 'MOVIE' | 'PEOPLE';
  totalCount: number;
  shownCount: number;
}

interface filteredPayload {
  name: 'MOVIE' | 'PEOPLE';
  value: string;
}

const initialState: State = {
  moviesList: [],
  peopleList: [],
  filterList: [],
  filterType: 'PEOPLE',
  totalCount: 0,
  shownCount: 0,
};

const slice = createSlice({
  name: 'starWars',
  initialState: initialState,
  reducers: {
    filterResult: (state, { payload }: { payload: filteredPayload }) => {
      let filteredList: Movie[] | People[] = [];
      if (payload.name === 'MOVIE') {
        filteredList = state.moviesList.filter((movie) => {
          return movie.title
            .toLowerCase()
            .includes(payload.value.toLowerCase());
        });
        if (filteredList.length >= 5) {
          state.totalCount = filteredList.length;
          state.shownCount = 5;
        } else {
          state.totalCount = state.shownCount = filteredList.length;
        }
        state.filterType = 'MOVIE';
      } else {
        filteredList = state.peopleList.filter((people) => {
          return people.name
            .toLowerCase()
            .includes(payload.value.toLowerCase());
        });
        if (filteredList.length >= 5) {
          state.totalCount = filteredList.length;
          state.shownCount = 5;
        } else {
          state.totalCount = state.shownCount = filteredList.length;
        }
        state.filterType = 'PEOPLE';
      }

      state.filterList = filteredList;
      return state;
    },
    showMore: (state) => {
      if (state.shownCount + 5 > state.totalCount) {
        state.shownCount = state.totalCount;
      } else {
        state.shownCount += 5;
      }
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        console.log(action);
        state.moviesList = action.payload;
        return state;
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.peopleList = action.payload;
        state.filterList = action.payload;
        state.shownCount = 5;
        state.totalCount = action.payload.length;
        return state;
      });
  },
});

export default slice;
