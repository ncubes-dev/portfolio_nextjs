import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/app/components/header";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ncubesdev",
  description: "This is my portfolio website",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className='${inter.className } antialiased bg-white'>
        <Header />
        {children}
      </body>
    </html>
  );
}
