import {createSlice, createAsyncThunk, PayloadAction} from '@reduxjs/toolkit';
import axios from 'axios'

type payload = {
    [key: string]: Array<object>;
};

const API_KEY: string = 'f6f77f01af59f1a7305cc96a68ce5caa'
export const getWaterData  = createAsyncThunk(
    'WaterSlice/getWaterData',
    async (location: string, thunkAPI) => {
      try {
        // @ts-ignore
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${location ? location : 'Yerevan'}&appid=${API_KEY}`, {}, {
          withCredentials: true,
        });
        return thunkAPI.fulfillWithValue(response.data);
      } catch (err) {
        return thunkAPI.rejectWithValue(err);
      }
    },
);
export const getAllWaterData  = createAsyncThunk(
    'WaterSlice/getAllWaterData',
    async (_, thunkAPI) => {
        try {
            // @ts-ignore
            const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?q=%D0%95%D1%80%D0%B5%D0%B2%D0%B0%D0%BD&appid=${API_KEY}`, {}, {
                withCredentials: true,
            });
            return thunkAPI.fulfillWithValue(response.data);
        } catch (err) {
            return thunkAPI.rejectWithValue(err);
        }
    },
);

const initialState = { waterData: {}, allLocationsData: [] }
export const WaterSlice = createSlice({
    name: 'WaterSlice',
    initialState,
    reducers: {

    },
    extraReducers: {
        [getWaterData.fulfilled.toString()]: (state, action: PayloadAction<object>) => {
            console.log(action)
            state.waterData = action.payload
        },
        [getWaterData.rejected.toString()]: (state, action: PayloadAction<object>) => {
            console.log('Api Error')
        },
        [getAllWaterData.fulfilled.toString()]: (state, action: PayloadAction<payload>) => {
            state.allLocationsData = action.payload.list.slice(0, 7)
        },
        [getAllWaterData.rejected.toString()]: (state, action: PayloadAction<object>) => {
            console.log('Api Error')
        },
      },
})


export default WaterSlice.reducer