"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import * as yup from "yup";

import { clearAuthError, clearState } from "@/redux/features/auth/authSlice";
import { resetPassword } from "@/redux/features/auth/authAction";

import Alert from "@/components/atoms/Alert";
import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";
import InputPassword from "@/components/molecules/InputPassword";
import AuthFormContainer from "@/components/templates/AuthFormContainer";
import Form from "@/components/molecules/Form";

const validationSchema = yup.object().shape({
  password: yup.string()
    .required("New password is required.")
    .min(8, "New password contains at least 8 characters.")
});

const ResetPassword = ({ params }) => {  
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, loading, success, error } = useSelector((state) => state.auth);
  const { token } = params;

  useEffect(() => {
    if (error) dispatch(clearAuthError());
  }, [error]);
  
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      if (success) {
        dispatch(clearState());
        router.push("/auth/login");
      }
    }, 3000);
    
    return () => clearTimeout(redirectTimer);
  }, [success]);

  const handleFormSubmit = (data) => {
    data.token = token;
    dispatch(resetPassword(data));
  }
  
  return (
    <AuthFormContainer>
      <h1 className="font-bold text-2xl text-black">
        Reset Password
      </h1>
      <Form 
        validationSchema={validationSchema} 
        onSubmit={handleFormSubmit} 
        className="flex flex-col gap-4"
      >
        <div className="flex flex-col gap-1">
          <Label id="password">New Password</Label>
          <InputPassword name="password" placeholder="Password baru" autoFocus />
        </div>
        <Button 
          type="submit" 
          className="w-full mt-2"
          loading={loading}
        >
          Continue
        </Button>
      </Form>

      {/* Alert */}
      {success && <Alert type="success" message={user.message} />}
      {error && <Alert type="error" message={error.message} />}
      <div className="Toastify__toast-auth">
        <ToastContainer />
      </div>
    </AuthFormContainer>
  )
}

export default ResetPassword;