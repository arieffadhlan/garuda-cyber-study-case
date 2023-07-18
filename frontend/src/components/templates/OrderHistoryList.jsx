import Button from "../atoms/Button";

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

const OrderHistoryList = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col bg-neutral-1 border rounded-lg shadow-sm">
        <div className="flex justify-between items-center px-4 py-3 border-b">
          <div className="flex flex-col gap-2.5 sm:flex-row sm:gap-9">
            <div className="flex flex-col gap-0.5 text-sm">
              <span className="font-semibold">Order Number:</span>
              <span className="font-medium text-[#595959]">20072023A8eWp5</span>
            </div>
            <div className="flex flex-col gap-0.5 text-sm">
              <span className="font-semibold">Order Date:</span>
              <span className="font-medium text-[#595959]">20 July 2023</span>
            </div>
            <div className="flex flex-col gap-0.5 text-sm">
              <span className="font-semibold">Total:</span>
              <span className="font-bold text-emerald-700">Rp 480.000</span>
            </div>
          </div>
        </div>
        <div className="flex flex-col px-4 divide-y divide-gray-200">
          {products.map((product) => (
            <div key={product.id} className="flex gap-4 py-4">
              <div className="overflow-hidden flex-shrink-0 w-16 h-16 rounded-md border border-gray-200">
                <img
                  src={product.imageSrc}
                  alt={product.imageAlt}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="flex flex-col gap-0.5 w-full">
                <div className="flex flex-col text-sm xs:flex-row xs:justify-between xs:items-center xs:text-base">
                  <span className="font-medium">{product.name}</span>
                  <strong className="font-bold">{product.price}</strong>
                </div>
                <span className="text-xs text-[#595959] xs:text-sm">Quantity: 1</span>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-end px-4 py-3 border-t">
          <Button>View Invoice</Button>
        </div>
      </div>
    </div>
  );
}

export default OrderHistoryList;