import Navbar from "@/components/organism/Navbar";

 const CheckoutSuccessLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}

export default CheckoutSuccessLayout;