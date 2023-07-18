import Navbar from "@/components/organism/Navbar";

 const CheckoutLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}

export default CheckoutLayout;