import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="group flex flex-col gap-3 w-full border border-[$757575] rounded-lg shadow-sm">
      {/* Product Image */}
      <div className="relative w-full h-[180px]">
        <Image 
          src="https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg" 
          fill={true}
          alt="Image" 
          className="object-cover" 
        />
      </div>
      {/* Product details */}
      <div className="flex flex-col gap-3 px-3 pb-3">
        <div className="flex flex-col gap-0.5">
          <span className="font-medium text-sm">
            Black T-Shirt
          </span>
          <span className="font-medium text-sm text-[#595959]">
            Stock: 20
          </span>
        </div>
        <strong className="text-base">
          Rp 120.000
        </strong>
      </div>
    </div>
  );
}

export default ProductCard;