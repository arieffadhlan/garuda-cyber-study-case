"use client";

import Image from "next/image";
import { useDispatch, useSelector } from "react-redux";

import paymentMethods from "@/constants/payment-methods";
import { setSelectedPaymentMethod } from "@/redux/features/transaction/transactionSlice";

const CheckoutPaymentForm = () => {
  const dispatch = useDispatch();
	const { selectedPaymentMethod } = useSelector((state) => state.transaction);

  const handleSelectedPaymentMethod = (paymentMethod) => {
		dispatch(setSelectedPaymentMethod(paymentMethod));
	}
  
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
            onClick={() => handleSelectedPaymentMethod(paymentMethod.name)} 
            className={`${selectedPaymentMethod === paymentMethod.name 
              ?	"border-emerald-800"
              : "border-[#EAEAEA]"}
              flex items-center gap-4 py-3.5 px-4 border rounded-lg bg-neutral-1 text-neutral-5 shadow-2xs`
            }
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