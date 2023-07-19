"use client";

import { useEffect } from "react";
import Image from "next/image";
import { useDispatch } from "react-redux";

import { clearCartState } from "@/redux/features/cart/cartSlice";
import { clearSelectedPaymentMethod } from "@/redux/features/transaction/transactionSlice";

import ButtonLink from "@/components/atoms/ButtonLink";
import Container from "@/components/templates/Container";
import paymentSuccessfull from "@/assets/images/payment-successfull.svg";

const PaymentSuccess = () => {
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(clearCartState());
    dispatch(clearSelectedPaymentMethod());
  }, []);
  
  return (
    <Container className="mt-32 mt mb-16">
      <div className="flex flex-col items-center gap-9 w-full xs:w-fit xs:mx-auto">
        <div className="flex flex-col items-center gap-4.5">
          <Image src={paymentSuccessfull} alt="Flight tickets not found" />
          <span className="font-medium text-base text-center text-black">
						<strong className="font-semibold text-emerald-700">Payment Success!</strong><br />
						Thanks for ordering.
          </span>
        </div>
        <div className="flex flex-col w-full gap-3">
					<ButtonLink href="/">
						Back to Home
					</ButtonLink>
        </div>
      </div>
    </Container>
  )
}

export default PaymentSuccess;