import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Url, errorMsg } from '../../interfaces';



interface users{
    id: number,
    FullName: string,
    Email: string,
    Password: number,
    role: string
    createdAt: Date
}

const initialState = {
    data: {}as users,
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMsg: '',
  };

  // async Thunk


  export const countfn = createAsyncThunk(
    'get/count', 
    async(data:users,{rejectWithValue}) =>{
        try {
            const res = await axios.get(`${Url}/maneger/count`);
            return res.data
        } catch (error) {
            if (error instanceof AxiosError)
            return rejectWithValue(error.response?.data.message || errorMsg)
        return rejectWithValue(errorMsg)
        }
    }
  );

    // delete products



  export const countSlice = createSlice({
    name:"user",
    reducers:{
        // resetAllProduct :() => initialState,
    },
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(countfn.pending,() =>({
            ...initialState,
            isLoading :true
        }));
        builder.addCase(countfn.fulfilled,(_,action) =>({
            ...initialState,
            isSuccess :true,
            data:action.payload
        }));
        builder.addCase(countfn.rejected,(_,action) =>({
            ...initialState,
            isError :true,
            errorMsg:String(action.payload)
        }));
    }
  })