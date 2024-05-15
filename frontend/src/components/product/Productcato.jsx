import React, { useEffect } from 'react'
import Data from "../../products.json";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getproductfn } from "../../redux/slice/productSlice/getAllProduct"



const Productcato = ({selectedCategory,setProduct,menuItem,setItem,filterItem}) => {
    const dispatch = useDispatch();
    const getproduct = useSelector((state) => state.getproduct);
    // console.log(getproduct)
    const da = getproduct.data.result

  
    const navigate = useNavigate();
    useEffect(() => {
      dispatch(getproductfn());
    }, []);
  return (
    <>
    <div className="widget-header">
        <h5 className='ms-2'>All Categories</h5>
    </div>
    <div>
        <button  onClick={() => setProduct(da)} className={`m-2 ${selectedCategory === "All" ? "bg-warning" : "" } `}> All</button>
        {
            menuItem.map((val,id) =>{
                return(
                    <button
                    className={`m-2 ${selectedCategory === val ? "bg-warning" : ""}`} key={id} onClick={()=> filterItem(val)}>
                        {val}
                    </button>
                )
            })
        }
    </div>
    </>
  )
}

export default Productcato