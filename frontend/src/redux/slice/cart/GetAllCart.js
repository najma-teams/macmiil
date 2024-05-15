import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Url, errorMsg } from '../../interfaces';





const initialState = {
    data: {},
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMsg: '',
  };

  // async Thunk


  export const getAllCartfn = createAsyncThunk(
    'get/allcart', 
    async(_,{rejectWithValue,getState}) =>{
        try {

            // const token = getState().auth.result.token;

            const {login} = getState()

            const res = await axios.get(`${Url}/cart/all`,
                {headers:{Authorization: `Bearer ${login.data?.token}`}}
            );
            
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
            return rejectWithValue(error.response?.data.message || errorMsg)
        return rejectWithValue(errorMsg)
        }
    }
  );

    // delete products



  export const GetAllCartSlice = createSlice({
    name:"user",
    reducers:{
        // resetAllProduct :() => initialState,
    },
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(getAllCartfn.pending,() =>({
            ...initialState,
            isLoading :true
        }));
        builder.addCase(getAllCartfn.fulfilled,(_,action) =>({
            ...initialState,
            isSuccess :true,
            data:action.payload
        }));
        builder.addCase(getAllCartfn.rejected,(_,action) =>({
            ...initialState,
            isError :true,
            errorMsg:String(action.payload)
        }));
    }
  })