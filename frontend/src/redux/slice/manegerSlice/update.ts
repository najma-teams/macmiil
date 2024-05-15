import { createAsyncThunk, createSlice } from 
'@reduxjs/toolkit';
import axios, { AxiosError } from 'axios';
import { Url, errorMsg } from '../../interfaces';



interface maneger{
  id: number,
  FullName: string,
  Email: string,
  Password: number,
  Role: string
  createdAt: Date
}

const initialState = {
    isLoading: false,
    isError: false,
    isSuccess: false,
    errorMsg: '',
    data: {} as maneger,
  };
// API REQ -> EDITING product

export const editmaneger = createAsyncThunk("maneger/new", async (datas:maneger,{rejectWithValue}) => {
  
      try {
        const token = JSON.parse(localStorage.getItem('userInfo')!).token;
  
        const  res  = await axios.put(
        `${Url}/maneger/update/${datas.id}`,
          {
            FullName: datas.FullName,
            Role: datas.Role,
            // Password: datas.Password,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }

          
  
       
        );
  console.log(res)
        return res.data;
      } catch (error) {
        if(error instanceof AxiosError){
          // return rejectWithValue(error.response?.data.message || errorMsg)
          
      }
      return rejectWithValue(errorMsg)
      }
    }
  );

  export const editmanegerSlice = createSlice({
    name:"maneger",
    reducers:{
        reset : () => initialState
    },
    initialState,
    extraReducers: (builder)=>{
        builder.addCase(editmaneger.pending,()=>({
            ...initialState,
            isLoading:true
        }))
        builder.addCase(editmaneger.fulfilled,(_,action)=>({
            ...initialState,
            isSuccess:true,
            datas : action.payload 

        }))
        builder.addCase(editmaneger.rejected,(_,action)=>({
            ...initialState,
            isError:true,
            errorMsg : String(action.payload)
        }))
    }
})

export const {reset} = editmanegerSlice.actions