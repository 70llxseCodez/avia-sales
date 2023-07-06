import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const searchId = 'df5c1efcbf7747b7511fdbe8ab878d3c';

export const getAirlines = createAsyncThunk('@@airlines/getitems', async(_, { rejectWithValue }) => {
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