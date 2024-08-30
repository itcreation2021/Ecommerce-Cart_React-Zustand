import React, { useEffect } from 'react'
import MaxWidthWrapper from '../components/MaxWidthWrapper'
import ReviewStar from '../components/ReviewStar'
import { useParams } from 'react-router-dom'
import useProductStore from '../store/useProductStore'
import Loading from '../components/Loading'
import useCartStore from '../store/useCartStore'
const ProductDetail = () => {

    const { productId } = useParams();

  const { product, loading, error, fetchProduct } = useProductStore();
    const { addToCart } = useCartStore();


    useEffect(() => {
        fetchProduct(productId)
    },[productId,fetchProduct])


     if (loading) {
       return <Loading />;
     }

     if (error) {
       return (
         <div className=" text-center text-xl pt-20 text-red-500">
           {" "}
           {error}{" "}
         </div>
       );
     }
    
  return (
    <MaxWidthWrapper>
      {product && (
        <div className=" grid grid-cols-2 my-10 mt-28">
          <div className=" justify-center items-center flex ">
            <img src={product.thumbnail} alt="" className=" h-96" />
          </div>
          <div className=" flex flex-col gap-5 items-start">
            <h1 className=" text-2xl font-bold"> {product.title} </h1>
            <h1 className=" text-xl font-bold"> {product.price} </h1>
            <p className=" w-96 "> {product.description} </p>
            <ReviewStar rating={product.rating} />
            <button
              onClick={() => addToCart(product)}
              className=" rounded-full bg-primary  hover:bg-primary/90 px-5 py-3 text-center text-white"
            >
              Add To Cart
            </button>
          </div>
        </div>
      )}
    </MaxWidthWrapper>
  );
}

export default ProductDetail