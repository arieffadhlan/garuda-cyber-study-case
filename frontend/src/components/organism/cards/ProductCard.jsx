import Image from "next/image";

const ProductCard = ({ product }) => {
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
      </div>
    </div>
  );
}

export default ProductCard;