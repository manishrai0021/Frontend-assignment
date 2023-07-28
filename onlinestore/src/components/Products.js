import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from '../api/index'

const Products = () => {
//     const dispatch = useDispatch();
// //   const {product} = uses()
//     const {products} = useSelector((state) => state.products);
//   //   const error = useSelector((state) => state.products.error);

//     useEffect(() => {
//       dispatch(fetchProducts());
//     }, [dispatch]);

//     console.log(products);
  const products = [
    {
    "id": 1,
    "title": "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
    "price": 109.95,
    "description": "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
    "category": "men's clothing",
    "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
    "rating": {
      "rate": 3.9,
      "count": 120
    }
  }
]

  return (
    <div className="grid grid-flow-row grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-14 p-16 lg:px-44">
      {products.map((product) => {
        return (
          <div className="flex flex-col justify-center items-center gap-4 border-2 border-blue-100 shadow-lg p-4 rounded-lg hover:scale-105 cursor-pointer ">
            <h2 className="font-semibold text-xl ">{product.title}</h2>
            <div className="border-2 rounded-lg w-full flex justify-center p-2 overflow-hidden">
              <img
                src={product.image}
                alt=""
                className="w-[170px] h-[170px] px-4 hover:scale-105"
              />
            </div>
            <p className="font-semibold text-lg">Rs. {product.price}</p>
            <p className="italic h-[50px] overflow-hidden">
              {product.description}
            </p>
            <div className="flex justify-end w-full">
              <Link
                to="/product"
                className="bg-blue-400 hover:bg-blue-500 text-white font-semibold rounded-lg p-2"
              >
                Read More
              </Link>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Products;
