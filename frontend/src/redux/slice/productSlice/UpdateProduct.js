import { Url } from '@/redux/interfaces';
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMsg: '',
  data: {},
};

// register user fn
export const UpdateProductFn = createAsyncThunk(
  'product/update',
  async (data, { rejectWithValue,getState }) => {
    try {
      const {login}=getState()
   
      const res = await axios.put(
        `${Url}/pro/update`,
        data,
        {headers:{
          Authorization:`Bearer ${login.data?.token}`
        }}
      );

      if (res.data) {
        return res.data;
      }
    } catch (error) {
      console.log(error)
      return rejectWithValue(
        error.response?.data?.message || 'Something went wrongs.'
      );
    }
  }
);

export const UpdateProductlice = createSlice({
  name: 'update product slice',
  reducers: {
    resetproductState: () => initialState,
  },
  extraReducers(builder) {
    builder.addCase(UpdateProductFn.pending, () => ({
      ...initialState,
      isLoading: true,
    }));

    // fulfilled
    builder.addCase(UpdateProductFn.fulfilled, (_, action) => ({
      ...initialState,
      isSuccess: true,
      data: action.payload,
    }));

    // rejected

    builder.addCase(UpdateProductFn.rejected, (_, action) => ({
      ...initialState,
      isError: true,
      errorMsg: action.payload,
    }));
  },
  initialState,
});

export const { resetproductState } = UpdateProductlice.actions;
