"use client";

import { useEffect } from "react";
import { getTransactions } from "@/redux/features/transaction/transactionAction";

import Navbar from "@/components/organism/Navbar"
import CartList from "@/components/templates/CartList";
import ProductList from "@/components/templates/ProductList";
import { useDispatch } from "react-redux";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTransactions());
  }, []);
  
  return (
    <>
      <Navbar />
      <main>
        <section>
          <ProductList />
          <CartList />
        </section>
      </main>
    </>
  );
}

export default Home;