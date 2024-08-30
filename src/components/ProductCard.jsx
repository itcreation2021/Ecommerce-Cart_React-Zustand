import React from 'react'
import ReviewStar from './ReviewStar'
import { Link } from 'react-router-dom'
import useCartStore from '../store/useCartStore'

const ProductCard = ({ product }) => {
  
  const { addToCart } = useCartStore();

  return (
    <div className=" flex w-full flex-col overflow-hidden rounded-lg border border-primary/30 shadow-primary shadow-sm">
      <Link to={`product/${product.id}`}>
        <div className=" flex flex-col justify-center items-center overflow-hidden rounded-xl ">
          <img
            src={product.thumbnail}
            alt=""
            className=" object-cover object-center hover:scale-125 transition-all duration-300"
          />
          <h3 className=" text-xl mt-5 font-bold text-primary">
            {" "}
            {product.title}{" "}
          </h3>
        </div>
      </Link>
      <div className=" mt-4 px-5 pb-5 flex flex-col items-center">
        <div className=" my-5 flex items-center justify-between gap-20">
          <p className=" text-2xl font-bold"> ${product.price} </p>
          <ReviewStar rating={product.rating} />
        </div>
        <button onClick={()=>addToCart(product)} className=" rounded-full bg-primary  hover:bg-primary/90 px-5 py-3 text-center text-white">
          Add To Cart
        </button>
      </div>
    </div>
  );
}

export default ProductCard