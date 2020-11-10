import { createAsyncThunk } from '@reduxjs/toolkit';
import StarWarsApi from '../util';

const fetchMovies = createAsyncThunk('starWars/fetchMovies', async () => {
  return await StarWarsApi.getMovies();
});

export default fetchMovies;
