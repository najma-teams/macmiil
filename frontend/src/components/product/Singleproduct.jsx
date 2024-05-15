import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Productdisplay from './Productdisplay';

import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getoneproductfn } from "../../redux/slice/productSlice/Oneproduct"
import Reviewproduct from './Reviewproduct';


const Singleproduct = () => {
    const { id } = useParams();


    const dispatch = useDispatch();
    const getoneproduct = useSelector((state) => state.getoneproduct);
    // console.log(getoneproduct)
    // const da = getproduct.data.result

  
    const navigate = useNavigate();
    useEffect(() => {
      dispatch(getoneproductfn(id));
    }, []);
    // const [product, setProduct] = useState([]);
    // console.log(product)
    // const {id} = useParams();

    // clg(id)
    //  useEffect(() =>{
    //     fetch("/src/products.json").then(res => res.json()).then(data => setProduct(data))
    //  },[])
    //  const result = product.filter((p)=> p.id === id)
    //  console.log(result)
  return (


<div className='shop-single mt-3 '>
  <div className="container">
    <div className="row justify-center">
      <div className=' col-lg-8 col-12'>
        <article>
          <div className='product-details'>
            <div className="row items-center">
            <div className="col-md-6 col-12">
            <div className="imge w-[100%]">
            
         

            <Zoom>
                                <picture>
                                <img
                              alt="That Wanaka Tree, New Zealand by Laura Smetsers"
                              src={getoneproduct?.data?.result?.image}
                              width="500" className=' w-[100%]'
                            />
                                </picture>
                          
                          </Zoom>
                    </div>
            </div>
              <div className="col-md-6 col-12">
                
              <div className="text ">
       
                   <Productdisplay />
               </div>
              </div>
            </div>
          </div>



          {/* review */}
          <div className="review">
          <Reviewproduct/>
          </div>
        </article>
      </div>






      <div className=' col-lg-4 col-12'>lest side</div>

    </div>
  </div>

</div>
  )
}

export default Singleproduct