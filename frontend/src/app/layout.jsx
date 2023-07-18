"use client";

import { Suspense } from "react";
import { Inter } from "next/font/google"
import Provider from "@/redux/provider";
import "./globals.css";

import PrivateRoute from "@/components/templates/PrivateRoute";
import Loading from "./loading";

const inter = Inter({ 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});

const RootLayout = ({ children }) => {
  const protectedRoutes = [
    "/checkout",
    "/checkout/checkout-success",
    "/order-history"
  ];
  
  return (
    <html lang="en" className={inter.className}>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="author" content="Muhammad Arief Fadhlan" />
        <meta name="description" content="Garuda Cyber Study Case" />
        <meta name="keyword" content="Garuda Cyber" />
        <title>Garuda Cyber</title>
      </head>
      <body>
        <Provider>
          <PrivateRoute protectedRoutes={protectedRoutes}>
            <Suspense fallback={<Loading />}>
              {children}
            </Suspense>
          </PrivateRoute>
        </Provider>
      </body>
    </html>
  );
}

export default RootLayout;