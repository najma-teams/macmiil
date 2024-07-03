import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getproductfn } from '../../../redux/slice/productSlice/getAllProduct';
import { FaEllipsisVertical } from "react-icons/fa6";
import { MdOutlineAdd } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";

const columns = [
  { field: 'id', headerName: 'ID', width: 180 },
  { field: 'Name', headerName: 'First name', width: 190 },
  {
    field: 'image',
    headerName: 'Image',
    width: 190,
    renderCell: (params) => {
      return (
        <div className='w-[18%] mt-2'>
          <img src={params.row.image} alt='' />
        </div>
      );
    },
  },
  {
    field: 'price',
    headerName: 'Price',
    type: 'number',
    width: 190,
  },
  {
    field: 'qty',
    headerName: 'Quantity',
    type: 'number',
    width: 190,
  },
  {
    field: 'actions',
    headerName: 'Actions',
    width: 200,
    renderCell: (params) => {
      const [isDivVisible, setIsDivVisible] = useState(false);
      const productId = params.row.id; 

      const handleButtonClick = () => {
        setIsDivVisible(true);
      };

      const handleOutsideClick = () => {
        setIsDivVisible(false);
      };

      const navigate = useNavigate();
      const dispatch = useDispatch();
      const ListProduct = useSelector((state) => state.getproduct);

      useEffect(() => {
        dispatch(getproductfn());
      }, []);

      const deleteFn =() =>{
        const { id } = useParams();
      
        const RemoveState = useSelector((state) => state.removeproduct);
      
        useEffect(() => {
            console.log(id)
        //   dispatch(UserRemoveFn(id));
        }, []);
      }

      return (
        <div>
          {!isDivVisible && (
            <button className="butt" onClick={handleButtonClick}>
              <FaEllipsisVertical className="text-[18px] ml-[50px] mt-[6px]" />
            </button>
          )}

          {isDivVisible && (
            <div className="hidden-div absolute ">
              <FaEllipsisVertical
                className="mt-[15px] ml-[65px] text-[18px] "
                onClick={handleOutsideClick}
              />

              <div className="relative top-[-5px] left-6 bg-[#c2d5ef] p-4 flex gap-2 rounded-sm shadow-sm">
                <BiEdit
                  className="text-[18px]"
                  onClick={() => {
                    navigate(`update/${productId}`);
                  }}
                />
                <MdDeleteOutline className="text-[18px]" 
                 onClick={deleteFn}/>
              </div>
            </div>
          )}
        </div>
      );
    },
  },
];




const Productdash = () => {
  const dispatch = useDispatch();
  const getproduct = useSelector((state) => state.getproduct);
  const da = getproduct?.data?.result;
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getproductfn());
  }, []);

  const [Products, setProduct] = useState(da ?? []);
  useEffect(() => {
    setProduct(da ?? []);
  }, [da]);


console.log(da)
  return (
    <div >
      <div className='tex ml-4 translate-y-3'>
        <p className='text-black text-2xl font-bold'>PRODUCT</p>
        <p>This site of product</p>
      </div>
      <div className='h-[550px] w-full p-[8px] relative'>
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

   

        <div className='absolute bottom-[5rem] right-5'>
          <Link to={'Createproduct'}>
            <div className='bg-[#999b9f] rounded-[10px] p-[17px]'>
              <MdOutlineAdd  className='text-[20px] text-white' />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Productdash;