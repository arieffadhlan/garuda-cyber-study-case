import Image from "next/image";
import paymentMethods from "@/constants/payment-methods";

const CheckoutPaymentForm = () => {
  return (
    <div className="flex flex-col bg-neutral-1 border rounded-lg shadow-sm">
      <div className="px-4 py-3 border-b">
        <span className="font-semibold text-base xs:text-lg">
          Payment Method
        </span>
      </div>
      <div className="flex flex-col gap-4 p-4">
        {paymentMethods.map((paymentMethod) => (
          <button
            type="button"
            key={paymentMethod.id} 
            className="flex items-center gap-2 py-3.5 px-4 border rounded-lg bg-white text-black shadow-sm" 
          >
            <div className="flex justify-center items-center w-12 xs:w-14">
              <Image 
                src={paymentMethod.image} 
                alt={paymentMethod.name} 
                priority={true} 
                width={24} 
                className="object-contain"
              />
            </div>
            <span className="font-medium text-sm">
              {paymentMethod.name}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}

export default CheckoutPaymentForm;