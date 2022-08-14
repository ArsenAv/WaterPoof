import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';
import axios from 'axios'

export const getCatsData = createAsyncThunk(
    'CatSlice/getCatsData',
    async ({limit, category_ids}, thunkAPI) => {
        console.log(typeof(category_ids));
        const params = {
            limit: limit,
            category_ids: category_ids ? Number(category_ids) : '',
          };
      try {
        const response = await axios.get(`https://api.thecatapi.com/v1/images/search`, {params}, {
          withCredentials: true,
        });
        return thunkAPI.fulfillWithValue(response.data);
      } catch (err) {
        return thunkAPI.rejectWithValue();
      }
    },
);

export const CatSlice = createSlice({
    name: 'CatSlice',
    initialState: {
      catImages: [],
      limit: 10,
    }, 
    reducers: {
        changeLimit: (state, action) => {
            state.limit = state.limit + 10;
        },
        resetLimit: (state, action) => {
            state.limit = 10;
            state.catImages = [];
        },
    },
    extraReducers: {
        [getCatsData.fulfilled]: (state, action) => {
          state.catImages = state.catImages.concat(action.payload);
        },
        [getCatsData.rejected]: (state, action) => {
            console.log('Api Error')
        },
      },
})


 
export const {changeLimit, resetLimit} = CatSlice.actions
export default CatSlice.reducer