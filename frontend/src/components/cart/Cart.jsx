import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getAllCartfn } from "../../redux/slice/cart/GetAllCart"
import { RiDeleteBin6Line } from "react-icons/ri";

const Cart = () => {

  const dispatch = useDispatch();
  const getAllCart = useSelector((state) => state.getAllCart);

  // const da = getproduct.data?.result
  console.log(getAllCart)

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAllCartfn());
  }, []);

  const getCartData = () => {
    const cartData = localStorage.getItem('cartData');
    if (cartData) {
      return JSON.parse(cartData);
    }
    return null;
  };
  
  // Usage
  const cartData = getCartData();
  console.log(cartData);



  // const [cartItems, setCaritem] = useState([]);
  // useEffect(() => {
  //   const storedCartItem = JSON.parse(localStorage.getItem("cart")) || [];
  //   setCaritem(storedCartItem);
  // }, []);

  // console.log(cartItems)

  // const calculatetotalprice = (item) => {
  //   return item.price * item.quantity;
  // };

  // const handleIncreace = (item) => {
  //   item.quantity += 1;
  //   setCaritem([...cartItems]);

  //   // update local storage with new cart items

  //   localStorage.setItem("cart", JSON.stringify(cartItems));
  // };

  // const handleDecrease = (item) => {
  //   if (item.quantity > 1) {
  //     item.quantity -= 1;
  //     setCaritem([...cartItems]);

  //     // update local storage with new cart items

  //     localStorage.setItem("cart", JSON.stringify(cartItems));
  //   }
  // };

  // // REMOVE ITEM
  // const handleRemoveItem = (item) => {
  //   const updatedCart = cartItems.filter((cartItem) => cartItem.id !== item.id);

  //   // update new cart
  //   setCaritem(updatedCart);
  //   updateLocalStorage(updatedCart);
  // };

  // const updateLocalStorage = (cart) => {
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // };

  // // cart subtotal

  // const cartSubtotal = cartItems.reduce((total, item) => {
  //   return total + calculatetotalprice(item);
  // }, 0);

  // // order total
  // const orderTotal = cartSubtotal;
  return (
    <div>
      <div className="shop-cart mt-10 ">
      <div className="container">
        <div className="section-wrapper">
          {/* cart top */}
          <div className="cart-top">
            <table>
              <thead>
                <tr>
                  <th className="cat-product">Product </th>
                  <th className="cat-product">Price</th>
                  <th className="cat-product"> Quantity</th>
                  <th className="cat-product"> Total</th>
                  <th className="cat-product"> Edit</th>
                </tr>
              </thead>

              {/* table body */}
              <tbody>
                {
                  cartData.map((item,indx) =>(
                    <tr key={indx}>
                      <td className=" product-item cart-product">
                        <div className="p-thumb">
                          <Link to={"/shop"}> <img src={item?.image} alt="" className=" w-[50px]" /> </Link>
                        </div>
                        <div className="p-content">
                          <Link>{item?.Name}</Link>
                        </div>
                      </td>

                      <td className="cat-price">${item.price}</td>
                      <td className="cat-qauntity">
                        <div className="cart-plus-minus">
                          <div className="dec qtybutton">-</div>
                          <input type="text" className="cart-plus-minus-box" name="qtybutton" value={item.quant} />
                          <div className="inc qtybutton">+</div>
                        </div>

                      </td>

                      <td className="cat-toprice"> ${item.total}</td>
                      <td className="cat-edit">
                        <a href=""> <RiDeleteBin6Line className=" text-[18px]" /></a>
                     
                      </td>

                    </tr>
                  ))
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Cart;
