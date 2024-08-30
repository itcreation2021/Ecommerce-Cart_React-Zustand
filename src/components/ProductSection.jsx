import React, { useEffect } from 'react'
import MaxWidthWrapper from './MaxWidthWrapper'
import ProductCard from './ProductCard'
import useProductStore from '../store/useProductStore'
import Loading from './Loading'
const ProductSection = () => {

    const { products, loading, error, fetchProducts } = useProductStore();

    useEffect(() => {
        fetchProducts();
    }, [fetchProducts])
    
    if (loading) {
       return <Loading/>
    }

    if (error) {
        return <div className=' text-center text-xl pt-20 text-red-500'> {error} </div>
    }

  return (
    <MaxWidthWrapper>
      <section className=" grid grid-cols-3 gap-10 my-10 py-10">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </section>
    </MaxWidthWrapper>
  );
}

export default ProductSection