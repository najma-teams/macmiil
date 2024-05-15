import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getproductfn } from "../../redux/slice/productSlice/getAllProduct"


const Search = ({Products,GridList}) => {
  const dispatch = useDispatch();
  const getproduct = useSelector((state) => state.getproduct);
  // console.log(getproduct)
  const da = getproduct.data.result
  // console.log(da)

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getproductfn());
  }, []);
  const [searchTerm , setSearchTerm] = useState("");
  const filteredProduct = getproduct.data?.result?.filter((product) => product.Name.toLowerCase().includes(searchTerm.toLowerCase()))
  // console.log(filteredProduct)
  return (
    <div className=' widget widget-search'>
      <form className=' search-wrapper mb-3' >
        <input type="text" name='search' id='search' placeholder='search...' defaultValue={searchTerm} onChange={(e) => setSearchTerm(e.target.value)} />
        <button type='submit'>
          <i className='icofont-search-2'></i>
        </button>
      </form>




      {/* showing search reult*/}
      <div>
        {
          searchTerm && filteredProduct.map((product) =>(
            <Link key={product.id} to={`/shop/${product.id}`}>
            <div className="d-flex gap-3 p-2">
              <div>
                <div className='pro-thumb h-25'>
                  <img src={product.image} alt="" width={70} className=' flex-{grow|shrink}-0' />
                </div>
              </div>

              <div className="product-content">
                <p>
                  <Link to={`/shop/${product.id}`} >{product.Name}</Link>
                </p>
                <h6>${product.price}</h6>
              </div>

            </div>
            </Link>
          ))
        }
      </div>
    </div>
  )
}

export default Search