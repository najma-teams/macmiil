import React, { useEffect, useState } from "react";
import Data from "../../products.json";
import ProductList from "./ProductList";
import Pagination from "./Pagination";
import Search from "./Search";
import Productcato from "./Productcato";
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { getproductfn } from "../../redux/slice/productSlice/getAllProduct"


const Showresult = "Showing 01 - 12 of 139 Results";

const Product = () => {


  const dispatch = useDispatch();
  const getproduct = useSelector((state) => state.getproduct);

  const da = getproduct.data?.result

  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getproductfn());
  }, []);

  
  const [Products, setProduct] = useState(da);
  const [GridList, setGridList] = useState(true);
  // console.log(Products);

  // pagination
  const [currentPage, setcurrentPage] = useState(1);
  const productsPerPage = 6;
  const indexOfLastProduct = currentPage * productsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
  const currentProduct = getproduct.data?.result?.slice(
    indexOfFirstProduct,
    indexOfLastProduct
  );
  // console.log(currentProduct)

  // function to change the current page
  const paginate = (pageNumber) => {
    setcurrentPage(pageNumber);
  };

  // filter producs based on category

  const [selectedCategory, setSelectedCategory] = useState("All");
  const menuItem = [...new Set(getproduct.data?.result?.map((val) => val.catogery))];
  const filterItem = (curcat) => {
    const newItem = getproduct.data?.result?.filter((newval) => {
      
      return newval.catogery === curcat;
    });
    setSelectedCategory(curcat);
    setProduct(newItem);
  };

  return (
      <div className="shop-page padding-tb">
        <div className="contaner  md:grid grid-cols-3 gap-3">
          {/* <div className=" flex gap-4"> */}

          <div className=" w-[80%] mx-auto">
              <aside>
                <Search GridList={GridList} Products={Products} />
                <Productcato 
                 
                 filterItem = {filterItem}
                 setItem ={setProduct}
                 menuItem ={menuItem}
                 setProduct ={setProduct}
                 selectedCategory = {selectedCategory}
                />
              </aside>
            </div>

            <div className="col-span-2 ml-4  md:order-first">
              <article>
                <div className=" shop-title d-flex flex-wrap w-[95%] justify-content-between bg-[#d7d8d9]">
                  <p>{Showresult}</p>
                  <div
                    className={`product-view-mode ${
                      GridList ? "gridActive" : "listActive"
                    } flex items-center`}
                  >
                    <a className="grid" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-ghost"></i>
                    </a>
                    .
                    <a className="list" onClick={() => setGridList(!GridList)}>
                      <i className="icofont-listine-dots"></i>
                    </a>
                  </div>
                </div>
                <div>
                  <ProductList GridList={GridList} Product={currentProduct} />
                </div>
                <Pagination
                  productsPerPage={productsPerPage}
                  totalProduct={getproduct.data?.result?.length}
                  paginate={paginate}
                  activepage={currentPage}
                />
              </article>
            </div>

           
          {/* </div> */}
        </div>
       </div>
  );
};

export default Product;
