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
export const RemoveProductFn = createAsyncThunk(
  'product/remove',
  async (id, { rejectWithValue,getState }) => {
    try {
      const {login}=getState()
   
      const res = await axios.delete(
        `${Url}/soft/${id}`,
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

export const RemoveProductlice = createSlice({
  name: 'remove product slice',
  reducers: {},
  extraReducers(builder) {
    builder.addCase(RemoveProductFn.pending, () => ({
      ...initialState,
      isLoading: true,
    }));

    // fulfilled
    builder.addCase(RemoveProductFn.fulfilled, (_, action) => ({
      ...initialState,
      isSuccess: true,
      data: action.payload,
    }));

    // rejected

    builder.addCase(RemoveProductFn.rejected, (_, action) => ({
      ...initialState,
      isError: true,
      errorMsg: action.payload,
    }));
  },
  initialState,
});

