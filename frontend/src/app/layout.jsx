import { Inter } from "next/font/google"
import "./globals.css";

const inter = Inter({ 
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"]
});

const RootLayout = ({ children }) => {
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
      <body>{children}</body>
    </html>
  );
}

export default RootLayout;