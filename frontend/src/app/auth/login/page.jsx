"use client";

import { useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import * as yup from "yup";

import { clearAuthError, clearState } from "@/redux/features/auth/authSlice";
import { loginUser } from "@/redux/features/auth/authAction"

import Alert from "@/components/atoms/Alert";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import Form from "@/components/molecules/Form";
import InputPassword from "@/components/molecules/InputPassword";
import AuthFormContainer from "@/components/templates/AuthFormContainer";

const validationSchema = yup.object().shape({
  email: yup.string().required("Email is required."),
  password: yup.string().required("Password is required.")
});

const Login = () => {  
  const dispatch = useDispatch();
  const router = useRouter();
  const { user, loading, success, error } = useSelector((state) => state.auth);

  useEffect(() => {
    if (error) dispatch(clearAuthError());
  }, [error]);
  
  useEffect(() => {
    const redirectTimer = setTimeout(() => {
      if (success) {
        dispatch(clearState());
        router.push("/");
      }
    }, 3000);
    
    return () => clearTimeout(redirectTimer);
  }, [success]);

  const handleFormSubmit = (data) => {
    dispatch(loginUser(data));
  }
  
  return (
    <AuthFormContainer>
      <h1 className="font-bold text-2xl leading-6 text-black">
        Sign In
      </h1>
      <div className="flex flex-col gap-10">
        <Form 
          validationSchema={validationSchema}
          onSubmit={handleFormSubmit} 
          className="flex flex-col gap-4"
        >
          <div className="flex flex-col gap-1">
            <Label id="email">Email</Label>
            <Input type="email" name="email" placeholder="Your email" autoFocus />
          </div>
          <div className="flex flex-col gap-1">
            <Label id="password">Password</Label>
            <InputPassword name="password" placeholder="Your password" />
          </div>
          <Button 
            type="submit" 
            className="w-full mt-2"
            loading={loading}
          >
            Continue
          </Button>
        </Form>
        <span className="flex justify-center items-center text-sm text-black">
          No account?&nbsp;
          <Link href="/auth/register" className="font-bold text-emerald-800">
            Create One
          </Link>
        </span>
      </div>

      {/* Alert */}
      {success && <Alert type="success" message={user.message} />}
      {error && <Alert type="error" message={error.message} />}
      <div className="Toastify__toast-auth">
        <ToastContainer />
      </div>
    </AuthFormContainer>
  )
}

export default Login;