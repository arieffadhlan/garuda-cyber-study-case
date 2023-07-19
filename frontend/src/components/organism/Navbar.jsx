"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useDispatch, useSelector } from "react-redux";
import { ShoppingBagIcon, QueueListIcon } from "@heroicons/react/24/outline"

import { openOffcanvas } from "@/redux/features/offcanvas/offcanvasSlice";
import ButtonLink from "../atoms/ButtonLink";

const Navbar = () => {
	const dispatch = useDispatch();
	const pathname = usePathname();
  const { carts } = useSelector((state) => state.cart);
	const token = localStorage.getItem("token");

	const openCart = () => {
		dispatch(openOffcanvas());
	}

  return (
		<nav className="fixed z-20 top-0 left-0 w-full border-b border-[#EAEAEA] bg-white shadow-xs">
			<div className="flex flex-col gap-5 max-w-8xl px-5 py-4 mx-auto sm:px-16">
				<div className="flex flex-wrap items-center justify-between">
					<div className="flex items-center">
						<Link href="/" className="font-semibold text-base">GarudaCyber</Link>
					</div>
					<div className="flex items-center gap-8">
						{token ? (
							<>
								<Link href="/order-history" className={pathname === "/order-history" ? "text-emerald-800" : ""}>
									<QueueListIcon className="w-6 h-6" />
								</Link>
								<button onClick={openCart} className="relative w-min h-6">
									<ShoppingBagIcon className="cursor-pointer w-6 h-6" />
									<span className={`${carts.length === 0 ? "hidden" : "inline-flex"} absolute top-0 right-0 items-center justify-center px-[7px] py-1 rounded-full bg-emerald-800 font-medium text-xs leading-none text-white transform translate-x-1/2 -translate-y-1/2`}>
										{carts.length}
									</span>
								</button>
							</>
						) : (
							<ButtonLink href="/auth/login">
								Sign In
							</ButtonLink>
						)}
					</div>
				</div>
			</div>
		</nav>
  )
}

export default Navbar;