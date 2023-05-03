import { Nunito } from "next/font/google";

import "./globals.css";
import Navbar from "./components/navbar/Navbar";
import Model from "./components/modals/Modal";
import RegisterModal from "./components/modals/RegisterModel";

export const metadata = {
  title: "Airbnb Clone",
  description: "Airbnb Clone",
};

const font = Nunito({
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head />
      <body className={font.className}>
        {/* <Model title="Hey world" isOpen actionLabel={"Submit"} /> */}
        <RegisterModal />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
