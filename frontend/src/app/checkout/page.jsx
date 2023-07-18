import CheckoutForm from "@/components/templates/CheckoutForm";
import Container from "@/components/templates/Container";

const CheckoutPage = () => {
  return (
    <Container className="mt-32">
      <div className="flex flex-col-reverse gap-6 md:flex-row 2md:gap-15">
        <CheckoutForm />
      </div>
    </Container>
  );
}

export default CheckoutPage;