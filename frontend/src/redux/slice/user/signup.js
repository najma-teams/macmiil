import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
// import { API } from '../../../utils/axios';
import { Url, errorMsg } from '../../interfaces';


const initialState = {
  isLoading: false,
  isSuccess: false,
  isError: false,
  errorMsg: '',
  data: {},
};

// register user fn
export const signUpFn = createAsyncThunk(
  'user/signup',
  async (data, { rejectWithValue }) => {
    try {
      const res = await axios.post(
        `${Url}/user/register`,
        data
      );

      if (res.data) {
        return res.data;
      }
    } catch (error) {
      return rejectWithValue(
        error.response?.data?.message || 'Something went wrong.'
      );
    }
  }
);

export const signUpSlice = createSlice({
  name: 'sign up slice',
  reducers: {
    resetSignupState: () => initialState,
  },
  extraReducers(builder) {
    builder.addCase(signUpFn.pending, () => ({
      ...initialState,
      isLoading: true,
    }));

    // fulfilled
    builder.addCase(signUpFn.fulfilled, (_, action) => ({
      ...initialState,
      isSuccess: true,
      data: action.payload,
    }));

    // rejected

    builder.addCase(signUpFn.rejected, (_, action) => ({
      ...initialState,
      isError: true,
      errorMsg: action.payload,
    }));
  },
  initialState,
});

export const { resetSignupState } = signUpSlice.actions;