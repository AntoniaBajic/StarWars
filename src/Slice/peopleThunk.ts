import { createAsyncThunk } from '@reduxjs/toolkit';
import StarWarsApi from '../util';

const fetchPeople = createAsyncThunk('starWars/fetchPeople', async () => {
  return await StarWarsApi.getPeople();
});

export default fetchPeople;
