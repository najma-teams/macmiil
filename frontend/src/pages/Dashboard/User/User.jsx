import React, { useEffect, useState } from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { getproductfn } from '../../../redux/slice/productSlice/getAllProduct';
import { FaEllipsisVertical } from "react-icons/fa6";
import { MdOutlineAdd } from "react-icons/md";
import { BiEdit } from "react-icons/bi";
import { MdDeleteOutline } from "react-icons/md";
import { getallgetmanager } from '@/redux/slice/manegerSlice/GetAllUser';

const columns = [
  { field: 'id', headerName: 'id', width: 180 },
  { field: 'name', headerName: 'name', width: 190 },
  {
    field: 'user_email ',
    headerName: 'user_email',
    type: 'email',
    width: 190,
  },
  {
    field: 'isActive',
    headerName: 'isActive',
    type: 'boolen',
    width: 190,
  },
  {
    field: 'role',
    headerName: 'role',
    type: 'text',
    width: 190,
  },
  {
    field: 'actions',
    headerName: 'actions',
    width: 200,
    renderCell: (params) => {
      const [isDivVisible, setIsDivVisible] = useState(false);
      const userId = params.row.id; 

      const handleButtonClick = () => {
        setIsDivVisible(true);
      };

      const handleOutsideClick = () => {
        setIsDivVisible(false);
      };

      const navigate = useNavigate();
      const dispatch = useDispatch();
      const ListUser = useSelector((state) => state.getAllUser);

      useEffect(() => {
        dispatch(getallgetmanager());
      }, []);

      const deleteFn =() =>{
        // const { id } = useParams();
      
        const RemoveState = useSelector((state) => state.removeproduct);
      
        useEffect(() => {
            console.log(userId)
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
                    navigate(`update/${userId}`);
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




const Alluser = () => {
  const dispatch = useDispatch();
  const getUser = useSelector((state) => state.getAllUser);
  const data = getUser?.data?.result;
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getallgetmanager());
  }, []);

  const [user, setUser] = useState(data ?? []);
  useEffect(() => {
    setUser(data?? []);
  }, [data]);



  return (
    <div >
      <div className='tex ml-4 translate-y-3'>
        <p className='text-black text-2xl font-bold'>USER</p>
        <p>This site of User</p>
      </div>
      <div className='h-[550px] w-full p-[8px] relative'>
        <DataGrid
          rows={user}
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
          <Link to={'Createuser'}>
            <div className='bg-[#999b9f] rounded-[10px] p-[17px]'>
              <MdOutlineAdd  className='text-[20px] text-white' />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Alluser;