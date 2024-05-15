import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Url, errorMsg } from '../../interfaces';





const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMsg: '',
    data: {} ,
  };

  // async Thunk


  export const getAllCatoryfn = createAsyncThunk(
    'getallcatogaty', 
    async(_,{rejectWithValue,getState}) =>{
        try {
            
            const res = await axios.get(`${Url}/cate/all`);
            console.log(res)
            return res.data
        } catch (error) {
            console.log(error)
            if (error instanceof AxiosError)
            return rejectWithValue(error.response?.data.message || errorMsg)
        return rejectWithValue(errorMsg)
        }
    }
  );



  export const GetAllCatorySlice = createSlice({
    name: 'list product',
    reducers: {},
    initialState,
    extraReducers(builder) {
      // PENDING
      builder.addCase(getAllCatoryfn.pending, () => ({
        ...initialState,
        isLoading: true,
      }));
  
      // fulffiled
      builder.addCase(getAllCatoryfn.fulfilled, (_, action) => ({
        ...initialState,
        isSuccess: true,
        data: action.payload,
      }));
  
      // rejected
  
      builder.addCase(getAllCatoryfn.rejected, (_, action) => ({
        ...initialState,
        isError: true,
        errorMsg: action.payload,
      }));
    },
  })



