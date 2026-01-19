import { Alegreya } from "next/font/google";
import "./globals.css";
import Header from "./Components/js/Header";
import Footer from "./Components/js/Footer";
import BackTop from "./Components/js/BackTop";

const geistSans = Alegreya({
  subsets: ['latin', 'cyrillic'],
  variable: '--font-inter',
})

export const metadata = {
  title: "Адаб - Этикет",
  description:
    "Адаб — это этикет, который нам дал пророк Мухаммад (салалаху алейхим уа Салям)",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased scroll-smooth overflow-y-scroll`}>
        <Header />
        {children}
        <BackTop />
        <Footer />
      </body>
    </html>
  );
}
