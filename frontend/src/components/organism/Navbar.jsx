"use client";

import Link from "next/link";
import { useDispatch } from "react-redux";
import { ShoppingBagIcon } from "@heroicons/react/24/outline"
import { openOffcanvas } from "@/redux/features/offcanvas/offcanvasSlice";
import Button from "../atoms/Button";
import ButtonLink from "../atoms/ButtonLink";

const Navbar = () => {
	const dispatch = useDispatch();

	const openCart = () => {
		dispatch(openOffcanvas());
	}

  return (
		<nav className="fixed z-20 top-0 left-0 w-full border-b border-[#eaeaea] bg-white shadow-xs">
			<div className="flex flex-col gap-5 max-w-8xl px-5 py-4 mx-auto sm:px-16">
				<div className="flex flex-wrap items-center justify-between">
					<div className="flex items-center">
						<Link href="/" className="font-semibold text-base">Garuda Cyber</Link>
					</div>
					<div className="flex items-center gap-8">
						<ShoppingBagIcon onClick={openCart} className="cursor-pointer w-8 h-8" />
            <ButtonLink href="/auth/login">
              Sign In
            </ButtonLink>
					</div>
				</div>
			</div>
		</nav>
  )
}

export default Navbar;