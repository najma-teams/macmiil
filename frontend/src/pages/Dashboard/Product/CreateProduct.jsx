
import React, { useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import { LuImagePlus } from "react-icons/lu";
import * as yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getAllCatoryfn } from '@/redux/slice/Catorey/Catorey';
import { CreateCategoryFn } from '@/redux/slice/Catorey/CreateCategory';
import { CreateProductFn, resetproductState } from '@/redux/slice/productSlice/CreateProduct';
import { Link, useNavigate } from 'react-router-dom';

const CreateProduct = () => {
  const dispatch = useDispatch();
  const getCategory = useSelector((state) => state.getallcatory);
  const categoryList = getCategory?.data?.result;

  useEffect(() => {
    dispatch(getAllCatoryfn());
  }, []);
  const initialValues = {
    Name: '',
    qty: '',
    price: '',
    image: '',
    catId: '',
  };

  const validationSchema = yup.object({
    Name: yup.string().required(),
    qty: yup.string().required(),
    price: yup.string().required(),
    image: yup.string().required(),
    catId: yup.string().required()
  });

  

  const onSubmit = async (values) => {
    const selectedCategory = categoryList.find(category => category.cato === values.catId);
    let catId;
    
    if (selectedCategory) {
      catId = selectedCategory.catId;
  
      const data = new FormData();
      data.append("Name", values.Name);
      data.append("qty", values.qty);
      data.append("price", values.price);
      data.append("image", values.image); // Assuming values.image contains the file object
      data.append("catId", parseInt(catId));
  
      // Perform your logic here with the data object
      console.log(data)
      dispatch(CreateProductFn(data));
    } else {
      const newCategoryData = {
        cato: values.catId,
      };
  
      const createdCategory = await dispatch(CreateCategoryFn(newCategoryData));
      catId = createdCategory.payload?.result?.catId;
  
      const data = new FormData();
      data.append("Name", values.Name);
      data.append("qty", values.qty);
      data.append("price", values.price);
      data.append("image", values.image); // Assuming values.image contains the file object
      data.append("catId", parseInt(catId));
  
      // Perform your logic here with the data object
      dispatch(CreateProductFn(data));
    }
  };
  const createProductState = useSelector((state) => state.createproduct);

  const navigate = useNavigate();


  useEffect(() => {
    if (createProductState.isSuccess        ) {
      dispatch(resetproductState());
      navigate('/Dashboard/Product');
    }
  }, [createProductState.isSuccess]);

  const formik = useFormik({
    initialValues,
    onSubmit,
    validationSchema
  });

  const { values, errors, handleSubmit, handleChange,handleBlur } = formik;

  return (
    <div className='w-[70%] m-auto bg-white shadow-lg mt-4'>
      <h1 className='p-3 text-[24px] font-bold'>Add Product</h1>
      <form onSubmit={handleSubmit}>
        <div className="text-section p-4">
          <div className='inputs md:grid md:grid-cols-2 md:gap-3 sm:block '>
            <div className='sm:mb-5'>
              <input
                type="text"
                className='outline-none border-[2px] border-[#e5e5e5] rounded-[10px] p-3'
                placeholder='Name'
                name='Name'
                onBlur={handleBlur}
                value={values.Name}
                onChange={handleChange}
              />
                       <p className=" text-red-500">
                                 {formik.touched.Name && errors.Name}
                </p>
            </div>
            <div className='sm:mb-5'>
              <input
                type="text"
                className='outline-none border-[2px] border-[#e5e5e5] rounded-[10px] p-3'
                placeholder='Price'
                name='price'
                onBlur={handleBlur}
                value={values.price}
                onChange={handleChange}
              />
                        <p className=" text-red-500">
                                 {formik.touched.price && errors.price}
                </p>
            </div>
            <div className='sm:mb-5'>
              <input
                type="text"
                className='outline-none border-[2px] border-[#e5e5e5] rounded-[10px] p-3'
                placeholder='Qty'
                name='qty'
                onBlur={handleBlur}
                value={values.qty}
                onChange={handleChange}
              />
                        <p className=" text-red-500">
                                 {formik.touched.qty && errors.qty}
                </p>
            </div>
          </div>
          <div>
            <div className="label sm:block ">
              <label htmlFor="">Category</label>
            </div>
            <div className='sm:mb-5'>
              <input
                type="text"
                className='outline-none border-[2px] border-[#e5e5e5] rounded-[10px] p-3'
                placeholder='Category'
                name='catId'
                value={values.catId}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className='sm:mb-5 bg-[#5ebec4] text-center py-[13px] md:py-6  rounded-[10px] md:w-[50%] sm:w-[100%] '>
            <div className='flex justify-center items-center'>
              <LuImagePlus className='text-[48px] ' />
            </div>

            <input
  type="file"
  className="border-none md:ml-6"
  name="image"
  onBlur={handleBlur}
  onChange={(event) => {
    formik.setFieldValue("image", event.currentTarget.files[0]);
  }}
/>
              
          </div>
          <div>
            <div className="close grid grid-cols-2">
            <Link to={'/Dashboard/Product'}>
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

export default CreateProduct;