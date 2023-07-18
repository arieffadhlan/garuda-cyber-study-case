"use client";

import { useEffect, useState } from "react";
import { ArrowPathIcon } from "@heroicons/react/24/outline"
import useProduct from "@/hooks/useProduct";
import ProductCard from "../organism/cards/ProductCard";
import Container from "./Container";

const ProductList = () => {
  const [productsLoading, setProductsLoading] = useState(false);
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    const fetchProducts = async () => {
      setProductsLoading(true);
      const data = await useProduct();

      setProducts(data);
      setProductsLoading(false);
    }

    fetchProducts();
  }, []);
  
  return (
    <Container className="mt-[104px]">
      {productsLoading ? (
        <div className="flex justify-center items-center">
          <ArrowPathIcon className="w-6 h-6 animate-spin text-emerald-800" />
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 2xs:grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </Container>
  );
}

export default ProductList;