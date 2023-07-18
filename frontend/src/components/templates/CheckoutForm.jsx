import { ToastContainer } from "react-toastify";
import CheckoutUserForm from "../organism/forms/CheckoutUserForm";

const CheckoutForm = () => {
  return (
    <form className="flex flex-[50%] flex-col gap-9">
      <CheckoutUserForm />

      {/* Alert */}
      <div className="Toastify__toast-auth">
        <ToastContainer />
      </div>
    </form>
  );
}

export default CheckoutForm;