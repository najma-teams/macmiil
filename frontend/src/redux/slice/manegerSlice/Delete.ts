import { createAsyncThunk, createSlice } from 
'@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Url, errorMsg } from '../../interfaces';



interface maneger{
    id: number,
    FullName: string,
    Email: string,
    Password: number,
    createdAt: Date
}

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMsg: '',
    data: [] as maneger[],
  };


     // delete products

export const deleteuser = createAsyncThunk(
    '/products/delete',
    async (id:number, { rejectWithValue }) => {
      try {  
        console.log(id)
        const res =  await axios.delete( `${Url}/maneger/delete/${id}` );
        return res.data
        
      } catch (error) {
        console.log(error);
        if (error instanceof AxiosError)
        return rejectWithValue(error.response?.data.message || errorMsg)
    return rejectWithValue(errorMsg)
      }
    }
  );

  export const deleteManegerSlice = createSlice({
    name:"deleteuser",
    reducers:{
        // resetAllProduct :() => initialState,
    },
    initialState,
    extraReducers:(builder)=>{
        builder.addCase(deleteuser.pending,() =>({
            ...initialState,
            isLoading :true
        }));
        builder.addCase(deleteuser.fulfilled,(_,action) =>({
            ...initialState,
            isSuccess :true,
            data:action.payload
        }));
        builder.addCase(deleteuser.rejected,(_,action) =>({
            ...initialState,
            isError :true,
            errorMsg:String(action.payload)
        }));
    }
  })