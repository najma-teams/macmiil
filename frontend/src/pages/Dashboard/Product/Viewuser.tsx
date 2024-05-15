import React from 'react'
import style from './user.module.css'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux"
import { AppDispatch, RootState } from "../../../../redux/store"
import { useNavigate } from "react-router-dom"
import  {useState,useEffect} from 'react'
import toast from "react-hot-toast"
import {AiOutlineUsergroupAdd,AiOutlineUser,AiOutlineArrowLeft} from 'react-icons/ai'
import { reset, editmaneger } from "../../../../redux/slice/manegerSlice/update"




const Viewuser = () => {
  const { id } = useParams();
  const toastId : string = "ToastuserReg"
  const editelice  = useSelector((state:RootState)=>state.edite)
const dispatch = useDispatch<AppDispatch>()
const navigate = useNavigate()
// const [lastName,setLastName] = useState("")
const [FullName,setFullName] = useState('')
const [Role,setRole] = useState('')
const [Password,setPassword] = useState("")

useEffect(()=>{
  if(editelice.isSuccess){
    toast.success("successfull",{id:toastId})
    navigate('/dashboard/Maneger')
  }
  
  if(editelice.isError){
    toast.error(editelice.errorMsg,{id:toastId})
  }
  dispatch(reset())


},[editelice.isError,editelice.isSuccess])

const submitHandle = (e:React.FormEvent) =>{
  e.preventDefault()
  const data:any = {
    id,
    Role,
    FullName,
    Password
  }
  toast.loading("loading...",{id:toastId})
  dispatch(editmaneger(data))
}




    const [age, setAge] = React.useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value);
  };
  return (
    <div >
           <form className={style.view__form} onSubmit={submitHandle}>
           <Link to={'/dashboard/Maneger/'}> 
<div className={style.out} >
   <AiOutlineArrowLeft  />
 </div>
</Link>
<div className={style.name}>
   <div className={style.form_group}>
     <label htmlFor="name">FirstName</label>
     <input
       type="text"
       id="name"
       name="name"
       value={FullName}
       onChange={e=> setFullName(e.target.value)}

     />
   </div>
   
   <div className={style.form_group}>
     <label htmlFor="email">Role</label>
     <input
       type="text"
       id="email"
       name="email"
       value={Role}
       onChange={e=> setRole(e.target.value)}
     />
   </div>
   
   </div>

   <button type="submit">{editelice.isLoading ? 'Loading...' : 'update'}</button>
 </form>
    </div>
  )
}

export default Viewuser