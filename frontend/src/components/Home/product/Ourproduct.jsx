import React, { useState } from "react";
import { Link } from "react-router-dom";

const Ourproduct = () => {
  const ProductData = [
    {
      imgUrl: "src/assets/images/categoryTab/01.jpg",
      cate: "Shoes",
      title: "Nike Premier X",
      author: "assets/images/course/author/01.jpg",
      brand: "Nike",
      price: "$199.00",
      id: 1,
    },
    {
      imgUrl: "src/assets/images/categoryTab/02.jpg",
      cate: "Bags",
      title: "Asthetic Bags",
      author: "assets/images/course/author/02.jpg",
      brand: "D&J Bags",
      price: "$199.00",
      id: 2,
    },
    {
      imgUrl: "src/assets/images/categoryTab/03.jpg",
      cate: "Phones",
      title: "iPhone 12",
      author: "src/assets/images/categoryTab/brand/apple.png",
      brand: "Apple",
      price: "$199.00",
      id: 3,
    },
    {
      imgUrl: "src/assets/images/categoryTab/04.jpg",
      cate: "Bags",
      title: "Hiking Bag 15 Nh100",
      author: "assets/images/course/author/04.jpg",
      brand: "Gucci",
      price: "$199.00",
      id: 4,
    },
    {
      imgUrl: "src/assets/images/categoryTab/05.jpg",
      cate: "Shoes",
      title: "Outdoor Sports Shoes",
      author: "assets/images/course/author/05.jpg",
      brand: "Nike",
      price: "$199.00",
      id: 5,
    },
    {
      imgUrl: "src/assets/images/categoryTab/06.jpg",
      cate: "Beauty",
      title: "COSRX Snail Mucin",
      author: "assets/images/course/author/06.jpg",
      brand: "Zaara",
      price: "$199.00",
      id: 6,
    },
    {
      imgUrl: "src/assets/images/categoryTab/07.jpg",
      cate: "Bags",
      title: "Look Less Chanel Bag ",
      author: "assets/images/course/author/01.jpg",
      brand: "Gucci",
      price: "$199.00",
      id: 7,
    },
    {
      imgUrl: "src/assets/images/categoryTab/08.jpg",
      cate: "Shoes",
      title: "Casual Sneakers",
      author: "assets/images/course/author/02.jpg",
      brand: "Bata",
      price: "$199.00",
      id: 8,
    },
  ];
  const [items, setItems] = useState(ProductData);
  const filterItem = (categItem) => {
    const updateItem = ProductData.filter((curElem) => {
        return curElem.cate === categItem
    })

    setItems(updateItem)
  };
  return (
    <div className=" course-section style-3 padding-tb">
      <div className="course-shape one">
        {/* {" "} */}
        <img src="/src/assets/images/shape-img/icon/01.png" alt="" />
      </div>
      <div className="course-shape two">
        {/* {" "} */}
        <img src="/src/assets/images/shape-img/icon/02.png" alt="" />
      </div>

      <div className="container">
        <div className="section-header">
          <h2 className="title">Our Product</h2>
          <div className=" course-filter-group">
            <ul className=" lab-ul">
              <li onClick={() => setItems(ProductData)}>All</li>
              <li onClick={() => filterItem("Shoes")}>Shoes</li>
              <li onClick={() => filterItem("Bags")}>Bags</li>
              <li onClick={() => filterItem("Phones")}>Phones</li>
              <li onClick={() => filterItem("Beauty")}>Beauty</li>
            </ul>
          </div>
        </div>

        {/* select body */}

        <div className="section-wrapper">
          <div className="  grid lg:grid-cols-4 gap-3 mx-auto">
            {items.map((product) => (
              <div key={product.id} className="col">
                <div className="course-item style-4">
                  <div className="course-inner">
                    <div className="course-thub">
                      <img className=" w-full" src={product.imgUrl} alt="" />
                      <div className="course-categor ml-6 mt-6">
                        <div className="course-cate">
                          <a href="#"> {product.cate}</a>
                        </div>
                        <div className="course-rew flex  justify-between items-center  ">
                          <div>
                            <p className="rati ">
                              <i className="icofont-star text-yellow-500"></i>
                              <i className="icofont-star text-yellow-500"></i>
                              <i className="icofont-star text-yellow-500"></i>
                              <i className="icofont-star text-yellow-500"></i>
                              <i className="icofont-star text-yellow-500"></i>
                              <span> review</span>
                            </p>
                          </div>

                          <div className="course-pric  bg-red-100 px-2 py-2 mr-3  ">
                            {product.price}
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* content */}
                    <div className="course-content">
                      <div className=" flex justify-between   ">
                        <Link to={`/shop/${product.id}`}>
                          <h6> {product.title} </h6>
                        </Link>
                        <div className="course-autho">
                          <Link to={"/"} className="ca-name">
                            {" "}
                            {product.brand}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ourproduct;
