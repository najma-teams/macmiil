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
export const CreateCategoryFn = createAsyncThunk(
  'category/create',
  async (data, { rejectWithValue ,getState}) => {
    try {
      const {login}=getState()
      const res = await axios.post(
        `${Url}/cate/new`,
        data,
        {headers:{
          Authorization:`Bearer ${login.data?.token}`
        }}
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

export const createCategorySlice = createSlice({
  name: 'create category slice',
  reducers: {
    resetcategoryState: () => initialState,
  },
  extraReducers(builder) {
    builder.addCase(CreateCategoryFn.pending, () => ({
      ...initialState,
      isLoading: true,
    }));

    // fulfilled
    builder.addCase(CreateCategoryFn.fulfilled, (_, action) => ({
      ...initialState,
      isSuccess: true,
      data: action.payload,
    }));

    // rejected

    builder.addCase(CreateCategoryFn.rejected, (_, action) => ({
      ...initialState,
      isError: true,
      errorMsg: action.payload,
    }));
  },
  initialState,
});

export const { resetcategoryState } = createCategorySlice.actions;
