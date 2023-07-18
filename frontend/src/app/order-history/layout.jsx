import Navbar from "@/components/organism/Navbar";

 const OrderHistoryLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}

export default OrderHistoryLayout;