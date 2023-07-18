import CartSummaryCard from "@/components/organism/cards/CartSummaryCard";
import CheckoutForm from "@/components/templates/CheckoutForm";
import Container from "@/components/templates/Container";

const CheckoutPage = () => {
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