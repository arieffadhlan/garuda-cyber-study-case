import Navbar from "@/components/organism/Navbar";

 const AccountLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main>
        {children}
      </main>
    </>
  )
}

export default AccountLayout;