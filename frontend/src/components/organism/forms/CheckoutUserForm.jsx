"use client";

import { useSelector } from "react-redux";
import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";

const CheckoutUserForm = () => {
  const { user } = useSelector((state) => state.auth);
  
  return (
    <div className="flex flex-col bg-neutral-1 border rounded-lg shadow-sm">
      <div className="px-4 py-3 border-b">
        <span className="font-semibold text-base xs:text-lg">
          Shipping Information
        </span>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <div className="flex flex-col gap-1">
          <Label id="name">Name</Label>
          <Input type="text" name="name" hookForm={false} value={user?.data?.name ?? ""} placeholder="Your name" readOnly disabled />
        </div>
        <div className="flex flex-col gap-1">
          <Label id="email">Email</Label>
          <Input type="email" name="email" hookForm={false} value={user?.data?.email ?? ""} placeholder="example@gmail.com" readOnly disabled />
        </div>
        <div className="flex flex-col gap-1">
          <Label id="phone_number">Phone Number</Label>
          <Input type="number" name="phone_number" hookForm={false} value={user?.data?.phone_number ?? ""} placeholder="08123456789" readOnly disabled />
        </div>
        <div className="flex flex-col gap-1">
          <Label id="address">Address</Label>
          <Input type="text" name="address" hookForm={false} value={user?.data?.address ?? ""} placeholder="Address" readOnly disabled />
        </div>
      </div>
    </div>
  );
}

export default CheckoutUserForm;