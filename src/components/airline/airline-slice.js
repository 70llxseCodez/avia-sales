import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const searchId = '3b1df86796b3cae8256caf45f496a37e';

export const getAirlines = createAsyncThunk('@@airlines/getitems', async (_, { rejectWithValue }) => {
  try {
    const res = await fetch(`https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`);
    if (!res.ok) {
      throw new Error('something went wrong');
    }
    const data = await res.json();
    if (data.stop && !data.tickets.length) {
      throw new Error('something went wrong');
    }
    return data.tickets;
  } catch (err) {
    return rejectWithValue(err.message);
  }
});

const airlineSlice = createSlice({
  name: '@@airlines',
  initialState: {
    error: null,
    loader: null,
    airlines: [],
  },

  extraReducers: (builder) => {
    builder
      .addCase(getAirlines.rejected, (state, action) => {
        state.loader = null;
        state.error = action.error.message;
      })
      .addCase(getAirlines.fulfilled, (state, action) => {
        state.error = null;
        state.loader = null;
        state.airlines = action.payload;
      })
      .addCase(getAirlines.pending, (state) => {
        state.error = null;
        state.loader = 'loading';
      });
  },
});
export const airlineReducer = airlineSlice.reducer;
