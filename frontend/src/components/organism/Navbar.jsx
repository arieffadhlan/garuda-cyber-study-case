"use client";

import Image from "next/image";
import Link from "next/link";
import Button from "../atoms/Button";

const Navbar = () => {
  return (
		<nav className="fixed z-20 top-0 left-0 w-full border-b border-[#eaeaea] bg-white shadow-xs">
			<div className="flex flex-col gap-5 max-w-8xl px-5 py-4 mx-auto sm:px-16">
				<div className="flex flex-wrap items-center justify-between">
					<div className="flex items-center gap-[34px]">
						<Link href="/" className="font-semibold text-base">Garuda Cyber</Link>
					</div>
					<div className="flex items-center gap-4">
            <Button>
              Sign In
            </Button>
					</div>
				</div>
			</div>
		</nav>
  )
}

export default Navbar;