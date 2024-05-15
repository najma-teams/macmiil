import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getoneproductfn } from "../../redux/slice/productSlice/Oneproduct"
const Productdisplay = () => {

    const { id } = useParams();


    const dispatch = useDispatch();
    const getoneproduct = useSelector((state) => state.getoneproduct);
    // console.log(getoneproduct)
    // const da = getproduct.data.result

  
    const navigate = useNavigate();
    useEffect(() => {
      dispatch(getoneproductfn(id));
    }, []);

    const{ Name,price,stock,catogery,qty,image}= getoneproduct;
    
    const [prequantity,setQuantity] = useState(1)
    // const [coupon,setCoupon] = useState("")
    // const [size,setSize] = useState(" Select size")
    // const [color,setColor] = useState(" Select color")

    const des = "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt veniam harum nisi voluptas placeat expedita eos omnis obcaecati vel."

    const handleSizeChange = (e) =>{
        setSize(e.target.value);
    }

    const handleColorChange = (e) =>{
        setColor(e.target.value);
    } 

    const handleDecreas = () =>{
        if(prequantity > 1){
            setQuantity(prequantity -1)
        }
    }
    const handleIncrease = () =>{
        setQuantity(prequantity +1)
        
    }

    const handleSubmit = (e) =>{
        e.preventDefault();
        const product ={
            id,
            image,
            Name,
            price,
            qty:prequantity,     
            // size,
            // color,
            // coupon,
         }


        const existinCart = JSON.parse(localStorage.getItem("cart")) || [];
        const existingProductIndex = existinCart.findIndex((item) => item.id === id);

        if(existingProductIndex !== -1){
            existinCart[existingProductIndex].quantity += prequantity;
        }else{
            existinCart.push(product)
        }

        // update local storage
        localStorage.setItem("cart", JSON.stringify(existinCart));

        // reset form fields

        setQuantity(1);
        // setSize("Select Size");
        // setColor("Select Color");
        // setCoupon("")
    }

  return (
    <div>
        <form onSubmit={handleSubmit} >
        <div className='post-content'>
            <h4>{getoneproduct?.data?.result?.Name}</h4>
            <p className='rating '>
                <i className='icofont-star text-yellow-500'></i>
                <i className='icofont-star text-yellow-500'></i>
                <i className='icofont-star text-yellow-500'></i>
                <i className='icofont-star text-yellow-500'></i>
                <i className='icofont-star text-yellow-500'></i>
                {/* <span>{ratingsCount} review</span> */}
            </p>
            <h4>${getoneproduct?.data?.result?.price}</h4>
            <h6>{getoneproduct?.data?.result?.qty}</h6>
            <p>{des}</p>
        </div>


        <div>

        <div className=" flex items-center ">
            <div>            <p>card plus</p></div>
     <div className="cart-plus-minus">
       <div className=' dec qtybutton' onClick={handleDecreas}> -</div>
       <input className='cart-plus-minus-box' type="text" name='qtybutton' id='qtybutton' value={prequantity} onChange={(e) => setQuantity(parseInt(e.target.value,10))} />
       <div className='inc qtybutton' onClick={handleIncrease}>+</div>
   </div>

   
   </div>
            
         
          {/* button */}
         <div className="flex  justify-around  mt-3">
         <button type='submit' className=' lab-btn '>
            <span>Add to Cart</span>
          </button>
          <Link to={"/cart-page"}  className=' lab-btn bg-primary '>
            <span>Check out</span>
          </Link>
         </div>
          
        </div>
        </form>
    </div>
  )
}

export default Productdisplay



{/* <div className=' flex gap-5 '>
<div className=' select-product size '>
       <select value={size} onChange={handleSizeChange}>
           <option> Select Size</option>
           <option>SM</option>
           <option>MD</option>
           <option>LG</option>
           <option>XL</option>
           <option>XXL</option>
       </select>
   </div>
   <div className=' select-product color'>
       <select value={color} onChange={handleColorChange}>
           <option> Select color</option>
           <option>Pink</option>
           <option>Ash</option>
           <option>Red</option>
           <option>White</option>
           <option>Blue</option>
           <option>Black</option>
       </select>
   </div>
</div>

<div className="flex mt-3 ">
     card plus
     <div className="cart-plus-minus">
       <div className=' dec qtybutton' onClick={handleDecreas}> -</div>
       <input className='cart-plus-minus-box' type="text" name='qtybutton' id='qtybutton' value={prequantity} onChange={(e) => setQuantity(parseInt(e.target.value,10))} />
       <div className='inc qtybutton' onClick={handleIncrease}>+</div>
   </div>

   coupon field
   <div className="discount-code ">
       <input type="text" placeholder='Enter Discount code' onChange={(e) => setCoupon(e.target.value)} />
   </div>
</div> */}