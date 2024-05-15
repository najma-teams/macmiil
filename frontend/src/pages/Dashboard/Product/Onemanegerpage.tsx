import React, {useState,useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { AppDispatch, RootState } from '../../../../redux/store';
import { getonemaneger } from '../../../../redux/slice/manegerSlice/OneUser';



const Onemanegerpage = () =>{
const { id } = useParams();
const dispatch = useDispatch<AppDispatch>()
const onemaneger = useSelector((state:RootState) => state.oneuser);
console.log(onemaneger)
useEffect(() =>{
    const data ={
        id
    }
dispatch(getonemaneger(data))
},[])

    return(
        <div className='lg:w-[70%] m-auto lg:translate-x-[-58px]'>
            <div className="card  bg-white text-black py-4 mt-12 ">
               <div className='bg-blue-950 py-3 translate-y-[-20px] w-full'>
               <h1 className='text-3xl font-bold p-2 text-white'>Maneger</h1>

               </div>
              <div className="p-5">
                  {/* name */}
               <div className='flex gap-5 items-center'>
               <label className=' text-[20px] font-bold '>Name:</label>
                <h1 className=' font-semibold text-[18px] text-gray-700'>{onemaneger.data.check?.FullName}</h1>
               </div>

               {/* email */}
               <div className='flex gap-5 items-center'>
               <label className=' text-[20px] font-bold '>Email:</label>
                <h1 className=' font-semibold text-[18px] text-gray-700'>{onemaneger.data.check?.Email}</h1>
               </div>
               
               {/* role */}
               <div className='flex gap-5 items-center'>
               <label className=' text-[20px] font-bold '>Role:</label>
                <h1 className=' font-semibold text-[18px] text-gray-700'>{onemaneger.data.check?.Role}</h1>
               </div>
               <Link to={`update/${id}`}>
                <button className=' px-3 py-2 bg-blue-950 rounded-lg hover:bg-blue-900 transition-all text-white font-semibold mt-5'>Update</button>
                </Link>
                <Link to={'/dashboard/Maneger'}>
                <button className=' px-3 py-2 bg-blue-950 rounded-lg hover:bg-blue-900 transition-all text-white font-semibold mt-5 ml-3'>back</button>
                </Link>
              </div>


            </div>
            

        </div>
    )
}

export default Onemanegerpage