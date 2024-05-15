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


  export const getproductfn = createAsyncThunk(
    'getallmedicine', 
    async(_,{rejectWithValue,getState}) =>{
        try {
            
            const res = await axios.get(`${Url}/pro/all`);
            // console.log(res)
            return res.data
        } catch (error) {
            console.log(error)
            if (error instanceof AxiosError)
            return rejectWithValue(error.response?.data.message || errorMsg)
        return rejectWithValue(errorMsg)
        }
    }
  );



  export const GetproductSlice = createSlice({
    name: 'list product',
    reducers: {},
    initialState,
    extraReducers(builder) {
      // PENDING
      builder.addCase(getproductfn.pending, () => ({
        ...initialState,
        isLoading: true,
      }));
  
      // fulffiled
      builder.addCase(getproductfn.fulfilled, (_, action) => ({
        ...initialState,
        isSuccess: true,
        data: action.payload,
      }));
  
      // rejected
  
      builder.addCase(getproductfn.rejected, (_, action) => ({
        ...initialState,
        isError: true,
        errorMsg: action.payload,
      }));
    },
  })