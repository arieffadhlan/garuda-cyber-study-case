"use client";

import PageLoading from "@/components/templates/PageLoading";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSelector } from "react-redux";

import CartSummaryCard from "@/components/organism/cards/CartSummaryCard";
import CheckoutForm from "@/components/templates/CheckoutForm";
import Container from "@/components/templates/Container";

const CheckoutPage = () => {
  const router = useRouter();
  const { carts } = useSelector((state) => state.cart);
  
  useEffect(() => {
    if (carts.length < 1) router.back();
  }, []);

  if (carts.length < 1) {
    return <PageLoading />
  };

  return (
    <Container className="mt-[104px]">
      <div className="flex flex-col-reverse gap-6 2md:flex-row 2md:gap-15">
        <CheckoutForm />
        <CartSummaryCard />
      </div>
    </Container>
  );
}

export default CheckoutPage;