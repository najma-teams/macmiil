import React, { useEffect, useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';

import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { getproductfn } from "../../../redux/slice/productSlice/getAllProduct"
import { Button } from '@chakra-ui/react';
import { AddCircleOutlineOutlined } from '@mui/icons-material';
import CreateProduct from './CreateProduct';

const columns = [
  { field: 'id', headerName: 'ID', width: 180 },
  { field: 'Name', headerName: 'First name', width: 190 },
  { field: 'image', headerName: ' image', width: 190 , renderCell:(params) =>{
    return(
      <div className='w-[18%] mt-2'>
        <img src={params.row.image} alt="" />
      </div>
    )
  } },


  
  {
    field: 'price',
    headerName: 'price',
    type: 'number',
    width: 190,
    
  },
  {
    field: 'qty',
    headerName: 'qty',
    type: 'number',
    width: 190,
  },

 
];



const Productdash = () => {
  

  const dispatch = useDispatch();
  const getproduct = useSelector((state) => state.getproduct);

  const da = getproduct?.data?.result
  console.log(da)


  
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getproductfn());
  }, []);
  
  
  const [Products, setProduct] = useState(da ?? []);
  useEffect(() => {
    setProduct(da ?? []);
  }, [da]);
  // style={{ height: 550, width: '100%' ,margin:"5px",}}
  return (
<div>

  <div className="tex ml-4 translate-y-3">
      <p className=' text-black text-2xl  font-bold'>PRODUCT</p>
      <p>This site of product</p>
  </div>
<div className=' h-[550px] w-full p-[8px] relative   '>
      <DataGrid
        rows={Products}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: { page: 0, pageSize: 5 },
          },
        }}
        pageSizeOptions={[5, 10]}
        checkboxSelection
      />


<div className='absolute bottom-[5rem] right-5  '>
<Link to={"Createproduct"}>
<CreateProduct/>

</Link>
</div>

    </div>

</div>


  )
}

export default Productdash