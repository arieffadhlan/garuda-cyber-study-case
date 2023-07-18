"use client";

import Button from "../atoms/Button";
import Offcanvas from "../molecules/Offcanvas";

const products = [
  {
    id: 1,
    name: 'Throwback Hip Bag',
    href: '#',
    color: 'Salmon',
    price: '$90.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg',
    imageAlt: 'Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt.',
  },
  {
    id: 2,
    name: 'Medium Stuff Satchel',
    href: '#',
    color: 'Blue',
    price: '$32.00',
    quantity: 1,
    imageSrc: 'https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg',
    imageAlt:
      'Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch.',
  },
]

const CartList = () => {
  return (
    <Offcanvas title="Cart">
      {/* Cart List */}
      <div className="px-5 pb-5 mt-6">
        <div className="flow-root">
          <div className="-my-6 divide-y divide-gray-200">
            {products.map((product) => (
              <div key={product.id} className="flex py-6">
                <div className="overflow-hidden flex-shrink-0 w-24 h-24 rounded-md border border-gray-200">
                  <img
                    src={product.imageSrc}
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="flex flex-1 flex-col ml-4">
                  <div className="flex flex-col text-base">
                    <span className="font-normal">{product.name}</span>
                    <strong className="font-bold">{product.price}</strong>
                  </div>
                  <div className="flex flex-1 justify-between items-end text-sm">
                    <p className="text-[#595959]">Quantity: {product.quantity}</p>
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
            <strong className="font-bold">Rp 250.000</strong>
          </div>
          <p className="mb-0 text-sm text-[#595959]">Shipping and taxes calculated at checkout.</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-6">
          <Button className="w-full px-6 py-3">
            Checkout
          </Button>
          <div className="flex justify-center text-center text-sm">
            <span className="text-[#595959]">or</span>&nbsp;
            <button type="button" className="font-medium text-indigo-600 hover:text-indigo-500">
              Continue Shopping
            </button>
          </div>
        </div>
      </div>
    </Offcanvas>
  );
}

export default CartList;