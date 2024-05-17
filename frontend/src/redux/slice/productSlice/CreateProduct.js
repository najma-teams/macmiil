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
export const CreateProductFn = createAsyncThunk(
  'product/create',
  async (data, { rejectWithValue,getState }) => {
    try {
      const {login}=getState()
   
      const res = await axios.post(
        `${Url}/pro/new`,
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

export const createProductlice = createSlice({
  name: 'create product slice',
  reducers: {
    resetproductState: () => initialState,
  },
  extraReducers(builder) {
    builder.addCase(CreateProductFn.pending, () => ({
      ...initialState,
      isLoading: true,
    }));

    // fulfilled
    builder.addCase(CreateProductFn.fulfilled, (_, action) => ({
      ...initialState,
      isSuccess: true,
      data: action.payload,
    }));

    // rejected

    builder.addCase(CreateProductFn.rejected, (_, action) => ({
      ...initialState,
      isError: true,
      errorMsg: action.payload,
    }));
  },
  initialState,
});

export const { resetproductState } = createProductlice.actions;
