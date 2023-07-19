"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setVoucher } from "@/redux/features/cart/cartSlice";

import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import Button from "@/components/atoms/Button";

const CheckoutVoucherForm = () => {
  const dispatch = useDispatch();
  const { transactions } = useSelector((state) => state.transaction);
  const [voucherCode, setVoucherCode] = useState(null);

  const handleInputChange = (event) => {
    setVoucherCode(event.target.value);
  }

  const applyVoucher = () => {
    transactions.find((transaction) => {
      if (transaction?.voucher.code === voucherCode) {
        dispatch(setVoucher(voucherCode));
        setVoucherCode(null)
      } else {
        alert("Incorrect voucher code.")
      }
    });
  }
  
  return (
    <div className="flex flex-col bg-neutral-1 border rounded-lg shadow-sm">
      <div className="px-4 py-3 border-b">
        <span className="font-semibold text-base xs:text-lg">
          Voucher
        </span>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-1">
          <Label id="voucher">Voucher Code</Label>
          <Input onChange={handleInputChange} type="text" name="voucher" hookForm={false} placeholder="Voucher code" />
        </div>
        <Button type="button" onClick={applyVoucher} className="w-full">
          Apply
        </Button>
      </div>
    </div>
  );
}

export default CheckoutVoucherForm;