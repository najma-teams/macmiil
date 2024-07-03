
import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { LuImagePlus } from "react-icons/lu";
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCatoryfn } from '@/redux/slice/Catorey/Catorey';
import { CreateCategoryFn } from '@/redux/slice/Catorey/CreateCategory';
import { CreateProductFn, resetproductState } from '@/redux/slice/productSlice/CreateProduct';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { UpdateProductFn } from '@/redux/slice/productSlice/UpdateProduct';
import { getoneproductfn } from '@/redux/slice/productSlice/Oneproduct';
import { getoneuserfn } from '@/redux/slice/manegerSlice/OneUser';
import { UpdateUserFn } from '@/redux/slice/manegerSlice/update';

const UpdateUser = () => {
  const {id} = useParams();
  const dispatch = useDispatch();


  const getOneUser = useSelector((state) => state.GetUser)
  useEffect(() => {
    dispatch(getoneuserfn(id));
  }, []);

  const initialValues = {
    name: '',
  
  };

  const validationSchema = yup.object({
    name: yup.string().required(),

  });



  const onSubmit = async (values) => {

    const data = {
      name: values.name,
     id:parseInt(id),
     
    };
    dispatch(UpdateUserFn(data));
  };

  useEffect(() =>{
    if(getOneUser.isSuccess){
        formik.setFieldValue('name',getOneUser.data?.user?.name); 

    }
  },[getOneUser.isSuccess])

  const navigate = useNavigate();
  const UpdateUser = useSelector((state) => state.updateUser);

  useEffect(() => {
    if (UpdateUser.isSuccess        ) {
      navigate('/Dashboard/User');
    }
  }, [UpdateUser.isSuccess]);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  const { values, errors, handleSubmit, handleChange,handleBlur } = formik;

  return (
    <div className='w-[70%] m-auto bg-white shadow-lg mt-4'>
      <h1 className='p-3 text-[24px] font-bold'>Update User</h1>
      <form onSubmit={handleSubmit}>
        <div className="text-section p-4">
          <div className='inputs md:grid md:grid-cols-2 md:gap-3 sm:block '>
            <div className='sm:mb-5'>
              <input
                type="text"
                className='outline-none border-[2px] border-[#e5e5e5] rounded-[10px] p-3'
                placeholder='Name'
                name='name'
                onBlur={handleBlur}
                value={values.name}
                onChange={handleChange}
              />
                       <p className=" text-red-500">
                                 {formik.touched.name && errors.name}
                </p>
            </div>
          </div>
          <div>
            <div className="close grid grid-cols-2">
            <Link to={'/Dashboard/User'}>
             <button className='text-center hover:bg-[#5ebec4] hover:text-[#ffff] border border-[#191a1a] w-[70%] rounded-[15px]'>Close</button>
            </Link>
              <button type='submit' className='text-center text-black bg-[#5ebec4] hover:bg-[#fafdfd] hover:text-[#ffff] border border-[#5ebec4] w-[70%] rounded-[15px]'>Save</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default UpdateUser;