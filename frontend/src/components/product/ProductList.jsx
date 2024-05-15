import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { CreateCartFn } from "../../redux/slice/cart/createCart";

const ProductList = ({ Product, GridList }) => {
  console.log(Product);
  const dispatch = useDispatch();

  const addToCart = (product) => {
    const { price, id, qty, image, Name,total } = product;
    const data = {
      quant: qty,
      price,
      id,
      image,
      Name,
      total
    };
  
    // Retrieve existing cart data from localStorage
    const existingCartData = localStorage.getItem('cartData');
    let cartData = [];
  
    if (existingCartData) {
      // Parse the existing cart data into an array of objects
      cartData = JSON.parse(existingCartData);
    }
  
    // Ensure cartData is an array
    if (!Array.isArray(cartData)) {
      cartData = [];
    }
  
    // Append the new product data to the cart data
    cartData.push(data);
  
    // Store the updated cart data in localStorage
    localStorage.setItem('cartData', JSON.stringify(cartData));
  
    console.log(data);
  };

  return (
    <div className={` shop-product-wrap row justify-content-center w-[100%] ${GridList ? "grid" : "list"}`}>
      {Product?.map((product, i) => (
        <div key={i} className=' col-lg-4 col-md-6 col-12'>
          <div className="product-item">
            {/* image */}
            <div className="product-thumb">
              <div className="w-[100%] ">
                <img
                  src={product.image}
                  alt=""
                  className="object-cover w-[100%] h-[290px] "
                />
              </div>   
              {/* PRODUCT LINK */}
              <div className="product-action-link">
                <Link to={`/shop/${product.id}`}><i className='icofont-eye'></i></Link>
                <a href="#">
                  <i className='icofont-heart'></i>
                </a>
                <button onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </div>
            {/* product contact */}
            <div className="product-content">
              <h5>
                <Link to={`/shop/${product.id}`}>{product.Name}</Link>
              </h5>
              <h6>$ {product.price}</h6>
              <h6> {product.qty}</h6>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;