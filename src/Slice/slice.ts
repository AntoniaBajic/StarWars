import { createSlice } from '@reduxjs/toolkit';
import { Movie, People } from './types';
import fetchMovies from './moviesThunk';
import fetchPeople from './peopleThunk';

interface State {
  moviesList: Movie[];
  peopleList: People[];
  filterList: Movie[] | People[];
}

interface filteredPayload {
  name: 'MOVIE' | 'PEOPLE';
  value: string;
}

const initialState: State = {
  moviesList: [],
  peopleList: [],
  filterList: [],
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
      } else {
        filteredList = state.peopleList.filter((people) => {
          return people.name
            .toLowerCase()
            .includes(payload.value.toLowerCase());
        });
      }

      state.filterList = filteredList;
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
        return state;
      });
  },
});

export default slice;
