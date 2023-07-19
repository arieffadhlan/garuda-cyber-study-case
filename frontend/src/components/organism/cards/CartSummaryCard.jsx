"use client";

import { useSelector } from "react-redux";

const CartSummaryCard = () => {
  const { carts } = useSelector((state) => state.cart);

  const tax = carts.reduce((nextValue, current) => {
    return nextValue + ((current.quantity * current.product.price) * (10/100))
  }, 0);

  const totalAmmount = tax + carts.reduce((nextValue, current) => {
    return nextValue + (current.quantity * current.product.price)
  }, 0);


  return (
    <div className="flex flex-[50%] flex-col h-fit bg-neutral-1 border rounded-lg shadow-sm">
      <div className="px-4 py-3 border-b">
        <span className="font-semibold text-base xs:text-lg">
          Cart Summary
        </span>
      </div>
      <div className="flex flex-col px-4 divide-y divide-gray-200">
        {carts.map((item) => (
          <div className="flex justify-between gap-0.5 py-4 text-sm">
            <span className="font-medium">
              {item.quantity} x {item.product.name}
            </span>
            <strong className="whitespace-nowrap font-semibold text-emerald-700">
              Rp {(item.quantity * item.product.price).toLocaleString("id-ID")}
            </strong>
          </div>
        ))}
      </div>
      <div className="flex flex-col gap-1 px-4 py-3 border-t">
        <div className="flex justify-between items-center text-sm">
          <span className="font-semibold">Tax</span>
          <strong className="font-semibold text-emerald-700">
            Rp {tax.toLocaleString("id-ID")}
          </strong>
        </div>
        <div className="flex justify-between items-center text-sm">
          <span className="font-semibold">Total</span>
          <strong className="font-bold text-emerald-700">
            Rp {totalAmmount.toLocaleString("id-ID")}
          </strong>
        </div>
      </div>
    </div>
  );
}

export default CartSummaryCard;