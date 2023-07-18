import Image from "next/image";
import Link from "next/link";

const AuthContainer = ({ children }) => {
  return (
    <section className="flex justify-center items-center min-h-screen w-full mx-auto xs:max-w-[25rem]">
      <div className="flex-[100%] flex flex-col gap-6 px-6 xs:px-0">
        <Link href="/" className="flex justify-center items-center my-6 font-semibold">
          GarudaCyber
        </Link>
        {children}
      </div>
    </section>
  )
}

export default AuthContainer;