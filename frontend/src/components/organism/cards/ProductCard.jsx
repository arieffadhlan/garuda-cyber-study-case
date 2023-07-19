"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "@/redux/features/cart/cartSlice";
import Button from "@/components/atoms/Button";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const { carts } = useSelector((state) => state.cart);
  const cartProduct = carts.find((item) => item.product.id === product.id);
  
  const addToCart = () => {
    if (cartProduct.quantity >= product.stock) {
      return;
    }

    if (carts.find((item) => item.product.id === product.id)) {
      dispatch(setCart(
        carts.map(item => {
          if (item.product.id === product.id) {
            return {...item, quantity: item.quantity + 1};
          } else {
            return item;
          }
        })
      ));
    } else {
      dispatch(setCart([...carts, { product, quantity: 1 }]));
    }
  }

  const removeFromCart = () => {
    if (carts.find((item) => item.product.id === product.id)?.quantity !== 1) {
      dispatch(setCart(
        carts.map(item => {
          if (item.product.id === product.id) {
            return {...item, quantity: item.quantity - 1};
          } else {
            return item;
          }
        })
      ));
    } else {
      dispatch(setCart(
        carts.filter((item) => item.product.id !== product.id)
      ));
    }
  }
  
  return (
    <div className="flex flex-col gap-3 w-full border border-[$757575] rounded-lg shadow-sm">
      {/* Product Image */}
      <div className="relative w-full h-[180px]">
        <Image 
          src={product.image} 
          fill={true}
          alt="Image" 
          className="object-cover" 
        />
      </div>
      {/* Product details */}
      <div className="flex flex-col gap-3 px-3 pb-3">
        <div className="flex flex-col gap-0.5">
          <span className="font-medium text-sm">
            {product.name}
          </span>
          <span className="font-medium text-xs text-[#595959]">
            Stock: {product.stock}
          </span>
        </div>
        <strong className="text-sm">
          Rp {product.price.toLocaleString("id-ID")}
        </strong>
        {carts.length > 0 && cartProduct?.quantity > 0 ? (
          <div className="grid grid-cols-3 place-items-center gap-2">
            <Button onClick={removeFromCart} className="w-full px-3 py-1.5 bg-red-800">-</Button>
            <span className="flex justify-center items-center w-full h-full px-3 border border-[#757575] rounded-lg text-sm">
              {cartProduct.quantity}
            </span>
            <Button onClick={addToCart} className="w-full px-3 py-1.5">+</Button>
          </div>
        ) : (
          product.stock > 0 ? (
            <Button onClick={addToCart} className="px-3 py-1.5">
              Add to Cart
            </Button>
          ) : (
            <Button className="px-3 py-1.5" disabled>
              Out of Stock
            </Button>
          )
        )}
      </div>
    </div>
  );
}

export default ProductCard;