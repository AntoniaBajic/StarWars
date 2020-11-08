import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { Movie, People } from './types';
import StarWarsApi from '../util';

interface State {
  moviesList: Movie[];
  peopleList: People[];
}

const fetchMovies = createAsyncThunk('starWars/fetchMovies', async () => {
  return await StarWarsApi.getMovies();
});

const fetchPeople = createAsyncThunk('starWars/fetchPeople', async () => {
  return await StarWarsApi.getPeople();
});

const initialState: State = {
  moviesList: [],
  peopleList: [],
};

const slice = createSlice({
  name: 'starWars',
  initialState: initialState,
  reducers: {
    getMovies: (state) => {
      return state;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.fulfilled, (state, action) => {
        state.moviesList = action.payload;
        return state;
      })
      .addCase(fetchPeople.fulfilled, (state, action) => {
        state.peopleList = action.payload;
        return state;
      });
  },
});

export default slice.reducer;
