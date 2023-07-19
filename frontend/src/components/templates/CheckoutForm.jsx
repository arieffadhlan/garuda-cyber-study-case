"use client";

import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { ToastContainer } from "react-toastify";

import CheckoutUserForm from "../organism/forms/CheckoutUserForm";
import CheckoutPaymentForm from "../organism/forms/CheckoutPaymentForm";
import Button from "../atoms/Button";
import { checkout } from "@/redux/features/transaction/transactionAction";

const CheckoutForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user } = useSelector((state) => state.auth);
  const { carts } = useSelector((state) => state.cart);
	const { selectedPaymentMethod } = useSelector((state) => state.transaction);

  const cartData = [carts.map((item) => {
    return { 
      userId: user.data.id,
      productId: item.product.id,
      quantity: item.quantity
    }
  })];

  const tax = carts.reduce((nextValue, current) => {
    return nextValue + ((current.quantity * current.product.price) * (10/100))
  }, 0);

  const totalAmmount = tax + carts.reduce((nextValue, current) => {
    return nextValue + (current.quantity * current.product.price)
  }, 0);
  
  const handleFormSubmit = () => {
    if (!selectedPaymentMethod) {
      alert("Please choose a payment method.")
    } else {
      dispatch(checkout({
        cart: cartData,
        ammount: totalAmmount,
        paymentMethod: selectedPaymentMethod,
      }));
      router.push("/checkout/checkout-success");
    }
  }
  
  return (
    <form onSubmit={handleFormSubmit} className="flex flex-[50%] flex-col gap-9">
      <CheckoutUserForm />
      <CheckoutPaymentForm />
      <Button type="submit" className="px-5 py-3.5">
        Continue
      </Button>

      {/* Alert */}
      <div className="Toastify__toast-auth">
        <ToastContainer />
      </div>
    </form>
  );
}

export default CheckoutForm;