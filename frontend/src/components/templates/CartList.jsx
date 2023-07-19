"use client";

import { useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import Button from "../atoms/Button";
import Offcanvas from "../molecules/Offcanvas";

const CartList = () => {
  const router = useRouter();
  const { carts } = useSelector((state) => state.cart);

  const totalAmmount = carts.reduce((nextValue, current) => {
    return nextValue + (current.quantity * current.product.price)
  }, 0);

  const checkoutCart = () => {
    router.push("/checkout");
  }
  
  return (
    <Offcanvas title="Cart">
      {carts.length > 0 ? (
        <>
          {/* Cart List */}
          <div className="px-5 pb-5 mt-6">
            <div className="flow-root">
              <div className="-my-6 divide-y divide-gray-200">
                {carts.map((item) => (
                  <div key={item.product.id} className="flex py-6">
                    <div className="overflow-hidden flex-shrink-0 w-24 h-24 rounded-md border border-gray-200">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>
                    <div className="flex flex-1 flex-col ml-4">
                      <div className="flex flex-col text-base">
                        <span className="font-normal">{item.product.name}</span>
                        <strong className="font-bold">{item.product.price}</strong>
                      </div>
                      <div className="flex flex-1 justify-between items-end text-sm">
                        <p className="text-[#595959]">Quantity: {item.quantity}</p>
                        <button type="button" className="font-medium text-red-600">
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* Subtotal */}
          <div className="flex flex-col gap-6 px-4 py-6 border-t border-gray-200 sm:px-6">
            <div className="flex flex-col gap-0.5">
              <div className="flex justify-between text-base">
                <span className="font-medium">Subtotal</span>
                <strong className="font-bold">Rp {totalAmmount.toLocaleString("id-ID")}</strong>
              </div>
              <p className="mb-0 text-sm text-[#595959]">Shipping and taxes calculated at checkout.</p>
            </div>
            <div className="flex flex-col justify-center items-center gap-6">
              <Button onClick={checkoutCart} className="w-full px-6 py-3">
                Checkout
              </Button>
            </div>
          </div>
        </>
      ) : (
        <div className="px-5 pb-5 mt-6">
          <span className="font-semibold text-emerald-800">
            Your cart is still empty.
          </span>
        </div>
      )}
    </Offcanvas>
  );
}

export default CartList;