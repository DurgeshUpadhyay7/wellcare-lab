import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "Wellcare Pathology Laboratory",
  description: "A place you can trust for accurate reports and patient care",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main style={{ paddingTop: '70px' }}>{children}</main>
        <Footer />
      </body>
    </html>
  );
}