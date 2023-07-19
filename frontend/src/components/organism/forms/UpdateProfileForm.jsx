"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import * as yup from "yup";

import { clearState } from "@/redux/features/auth/authSlice";
import { updateProfile } from "@/redux/features/auth/authAction";

import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";
import Input from "@/components/atoms/Input";
import Form from "@/components/molecules/Form";

const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required."),
  phone_number: yup.string().required("Phone number is required."),
  address: yup.string().required("Address is required.")
});

const UpdateProfileForm = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, loading, success } = useSelector((state) => state.auth);
  
  useEffect(() => {
    if (success) {
      dispatch(clearState());
      router.refresh();
    }
  }, [success]);

  const handleFormSubmit = (data) => {
    data.id = user.data.id;
    dispatch(updateProfile(data));
  }
  
	return (
    <div className="flex flex-[60%] flex-col gap-4">
      <div className="flex flex-col bg-neutral-1 border rounded-lg shadow-sm">
        <div className="px-4 py-3 border-b">
          <span className="font-semibold text-base xs:text-lg">
            Update Profile
          </span>
        </div>
        <Form 
          validationSchema={validationSchema} 
          initialValues={{
            name: user?.data?.name ?? "",
            phone_number: user?.data?.phone_number ?? "",
            address: user?.data?.address ?? "",
          }}
          onSubmit={handleFormSubmit} 
          className="flex flex-col gap-4 p-4"
        >
          <div className="flex flex-col gap-1">
            <Label id="name">Name</Label>
            <Input type="text" name="name" placeholder="Name" />
          </div>
          <div className="flex flex-col gap-1">
            <Label id="email">Email</Label>
            <Input type="email" name="email" hookForm={false} value={user?.data?.email ?? ""} placeholder="example@gmail.com" readOnly disabled />
          </div>
          <div className="flex flex-col gap-1">
            <Label id="phone_number">Phone Number</Label>
            <Input type="number" name="phone_number" placeholder="08123456789" />
          </div>
          <div className="flex flex-col gap-1">
            <Label id="address">Address</Label>
            <Input type="text" name="address" placeholder="Address" />
          </div>
          <Button type="submit" className="w-full mt-4" loading={loading}>
            Save
          </Button>
        </Form>
      </div>

      <div className="Toastify__toast-auth">
        <ToastContainer />
      </div>
    </div>
  );
}

export default UpdateProfileForm;