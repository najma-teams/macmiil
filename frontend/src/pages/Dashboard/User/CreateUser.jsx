
import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { resetproductState } from '@/redux/slice/productSlice/CreateProduct';
import { Link, useNavigate } from 'react-router-dom';
import { createUserFn, reset } from '@/redux/slice/manegerSlice/Register';

const CreateUser = () => {
  const dispatch = useDispatch();
 
//   const initialValues = {
//     name: '',
//     user_email: '',
//     password: '',
   
//   };


//  const onSubmit(values) {
//     const data = {
//       firstname: values.firstname,
//       lastname: values.lastname,
//       phone: values.phone,
//       username: values.username,
//       password: values.password,
//       branchId:branchId
//     };
//     toast.loading('Loading...', { id: toastId });
//     dispatch(signUpFn(data));
//   },

  

//   const onSubmit = async (values) => {
  

//     const data = new FormData();
//     // data.append("name", values.name);
//     // data.append("user_email", values.user_email);
//     // data.append("password", values.password);


//     // Perform your logic here with the data object
//     console.log(values.name,values.user_email,values.password)
//     dispatch(createUserFn(data));
//  }

//  const validationSchema = yup.object({
//   name: yup.string().required(),
//   user_email: yup.string().email().required(),
//   password: yup.string().required(),
 
// });
  const createUserState = useSelector((state) => state.createUser);

  const navigate = useNavigate();


  // useEffect(() => {
  //   if (createUserState.isSuccess        ) {
  //     // dispatch(reset());
  //     navigate('/Dashboard/User');
  //   }
  // }, [createUserState.isSuccess]);

  const formik = useFormik({
    initialValues: {
      name: '',
      user_email: '',
      password: '',
     
    },
    onSubmit(values) {
      const data = {
        name: values.name,
        user_email: values.user_email,
        password: values.password,
       
      };
      dispatch(createUserFn(data));
    }, 
    validationSchema: yup.object({
      name: yup.string().required(),
      password: yup.string().required(),
      user_email: yup
      .string()
      .email('Please add valid username')
      .required('Username is required'),
  }), 
 });

  const { values, errors, handleSubmit, handleChange,handleBlur } = formik;

  return (
    <div className='w-[70%] m-auto bg-white shadow-lg mt-4'>
      <h1 className='p-3 text-[24px] font-bold'>Add User</h1>
      <form onSubmit={handleSubmit}>
        <div className="text-section p-4">
          <div className='inputs md:grid md:grid-cols-2 md:gap-3 sm:block '>
            <div className='sm:mb-5'>
              <input
                type="text"
                className='outline-none border-[2px] border-[#e5e5e5] rounded-[10px] p-3'
                placeholder='Enter Your Name'
                name='name'
                onBlur={handleBlur}
                value={values.name}
                onChange={handleChange}
              />
                       <p className=" text-red-500">
                                 {formik.touched.name && errors.name}
                </p>
            </div>
            <div className='sm:mb-5'>
              <input
                type="email"
                className='outline-none border-[2px] border-[#e5e5e5] rounded-[10px] p-3'
                placeholder='Enter Your Email'
                name='user_email'
                onBlur={handleBlur}
                value={values.user_email}
                onChange={handleChange}
              />
                        <p className=" text-red-500">
                                 {formik.touched.user_email && errors.user_email}
                </p>
            </div>
            <div className='sm:mb-5'>
              <input
                type="text"
                className='outline-none border-[2px] border-[#e5e5e5] rounded-[10px] p-3'
                placeholder='Enter Your Password'
                name='password'
                onBlur={handleBlur}
                value={values.password}
                onChange={handleChange}
              />
                        <p className=" text-red-500">
                                 {formik.touched.password && errors.password}
                </p>
            </div>
          </div>
          <div>
            <div className="close grid grid-cols-2">
            <Link to={'/Dashboard/User'}>
                          <button className='text-center hover:bg-[#5ebec4] hover:text-[#ffff] border border-[#191a1a] w-[70%] rounded-[15px]'>Close</button>
            </Link>
              <button type='submit' className='text-center text-black bg-[#5ebec4] hover:bg-[#fafdfd] hover:text-[#ffff] border border-[#5ebec4] w-[70%] rounded-[15px]'>Add</button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;